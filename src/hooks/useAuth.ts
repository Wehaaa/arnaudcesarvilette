'use client'

import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { LoginFormData } from '@/lib/schemas/auth-schemas'

export function useAuth() {
  const router = useRouter()

  const handleLogin = async (
    data: LoginFormData,
    callbackUrl: string,
    setError: (error: string | null) => void
  ) => {
    try {
      setError(null)
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      })

      if (!result?.ok) {
        try {
          const errorData = JSON.parse(result?.error || '');
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = errorData?.message || 'Invalid credentials';
          setError(tempDiv.textContent || tempDiv.innerText);
        } catch {
          setError(result?.error || 'Invalid credentials');
        }
        return;
      }

      router.push(callbackUrl)
      router.refresh()
    } catch (error) {
      console.error('Login error:', error)
      setError('An unexpected error occurred')
    }
  }

  return { handleLogin }
}