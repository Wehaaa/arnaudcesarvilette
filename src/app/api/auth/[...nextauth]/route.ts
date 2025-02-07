import NextAuth, { DefaultSession, Session, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'
import { print } from 'graphql/language/printer'
import gql from 'graphql-tag'

const LOGIN_MUTATION = gql`
  mutation LoginUser($input: LoginInput!) {
    login(input: $input) {
      authToken
      refreshToken
      user {
        id
        databaseId
        email
        username
        firstName
        lastName
        name
      }
    }
  }
`

interface LoginCredentials {
  email?: string;
  password?: string;
}

async function authorize(credentials: Record<"email" | "password", string> | undefined) {
  if (!credentials?.email || !credentials?.password) {
    return null
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: print(LOGIN_MUTATION),
        variables: {
          input: {
            username: credentials.email,
            password: credentials.password,
          },
        },
      }),
    })

    const data = await response.json()

    if (data.errors) {
      throw new Error(JSON.stringify({
        message: data.errors[0]?.message || 'Login failed'
      }))
    }

    const { login } = data.data

    if (!login?.authToken || !login?.refreshToken || !login?.user) {
      return null
    }

    return {
      id: login.user.id,
      email: login.user.email,
      name: login.user.name,
      accessToken: login.authToken,
      refreshToken: login.refreshToken,
      username: login.user.username,
      firstName: login.user.firstName,
      lastName: login.user.lastName
    }
  } catch (error) {
    console.error('Login error:', error)
    throw error
  }
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'WordPress',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize
    })
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT, user?: User }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName
        }
      }
      return token
    },
    async session({ session, token }: { session: Session, token: JWT }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          username: token.username,
          firstName: token.firstName,
          lastName: token.lastName
        },
        accessToken: token.accessToken,
        refreshToken: token.refreshToken
      }
    }
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt' as const,
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }