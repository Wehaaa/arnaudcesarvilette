import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { UpdatePasswordForm } from '@/components/profile/UpdatePasswordForm'

export const metadata: Metadata = {
  title: 'Modifier le mot de passe',
  description: 'Modifiez votre mot de passe en toute sécurité',
}

export default function PasswordPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Mot de passe</h1>
        <p className="text-muted-foreground">
          Modifiez votre mot de passe en toute sécurité.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Modifier le mot de passe</CardTitle>
            <CardDescription>
              Assurez-vous de choisir un mot de passe fort que vous n&apos;utilisez 
              nulle part ailleurs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <UpdatePasswordForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}