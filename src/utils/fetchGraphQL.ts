// utils/fetchGraphQL.ts
import { getSession } from 'next-auth/react'

export async function fetchGraphQL<T = any>(
  query: string,
  variables?: { [key: string]: any },
): Promise<T> {
  const session = await getSession()
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(session?.accessToken && {
          Authorization: `Bearer ${session.accessToken}`
        }),
      },
      body: JSON.stringify({ query, variables }),
    }
  )
  
  const json = await response.json()
  return json.data
}