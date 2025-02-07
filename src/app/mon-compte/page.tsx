'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { User2, Lock, LogOut } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function AccountPage() {
  const router = useRouter()
  const { data: session } = useSession()

  return (
    <div className="container">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Mon compte</h1>
          <p className="text-muted-foreground">
            Bienvenue {session?.user?.firstName || session?.user?.name}, gérez vos informations personnelles ici.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User2 className="h-5 w-5" />
                Profil
              </CardTitle>
              <CardDescription>
                Gérez vos informations personnelles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium">Email actuel</p>
                  <p className="text-sm text-muted-foreground">{session?.user?.email}</p>
                </div>
                <Button asChild>
                  <Link href="/mon-compte/profil">
                    Modifier le profil
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Sécurité
              </CardTitle>
              <CardDescription>
                Gérez votre mot de passe
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Modifiez votre mot de passe régulièrement pour plus de sécurité
                  </p>
                </div>
                <Button asChild>
                  <Link href="/mon-compte/mot-de-passe">
                    Changer le mot de passe
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LogOut className="h-5 w-5" />
                Déconnexion
              </CardTitle>
              <CardDescription>
                Quitter votre session
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Déconnectez-vous de votre compte en toute sécurité
                  </p>
                </div>
                <Button 
                  variant="destructive"
                  onClick={() => {
                    signOut({ redirect: false });
                    router.push('/');
                  }}
                >
                  Se déconnecter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}