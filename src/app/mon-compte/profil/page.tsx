// app/mon-compte/profil/page.tsx
import type { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { UpdateProfileForm } from '@/components/profile/UpdateProfileForm'

export const metadata: Metadata = {
  title: 'Mon profil',
  description: 'Gérez vos informations personnelles',
}

export default function ProfilePage() {
  return (
    <div className="container">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Profil</h1>
          <p className="text-muted-foreground">
            Gérez vos informations personnelles.
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardContent className="pt-4">
              <UpdateProfileForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}