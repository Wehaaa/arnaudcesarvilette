// types/next-auth.d.ts
import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    accessToken?: string
    refreshToken?: string
    user: {
      id: string
      username?: string
      firstName?: string
      lastName?: string
    } & DefaultSession['user']
  }

  interface User {
    id: string
    username?: string
    firstName?: string
    lastName?: string
    accessToken?: string
    refreshToken?: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    accessToken?: string
    refreshToken?: string
    username?: string
    firstName?: string
    lastName?: string
  }
}