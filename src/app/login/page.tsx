import type { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LoginForm } from '@/components/auth/LoginForm'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
}

export default async function Page() {
  return (
    <div className="container mx-auto flex h-[calc(100vh-115px)] w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <Card className="p-0">
          <CardHeader>
            <CardTitle className="mb-5">Bienvenue !</CardTitle>
            <CardDescription>
              Entrez votre email et mot de passe pour vous connecter
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}