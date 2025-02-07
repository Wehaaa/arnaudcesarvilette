// lib/schemas/auth-schemas.ts
import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email format'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters'),
})

export type LoginFormData = z.infer<typeof loginSchema>

export const updateEmailSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email format'),
  password: z
    .string()
    .min(1, 'Current password is required for security'),
  firstName: z
    .string()
    .min(1, 'First name is required'),
  lastName: z
    .string()
    .min(1, 'Last name is required'),
  rppsNumber: z
    .string()
    .min(1, 'RPPS number is required'),
  profession: z
    .string()
    .min(1, 'Profession is required'),
  practiceLocation: z
    .string()
    .min(1, 'Practice location is required')
})

export type UpdateEmailFormData = z.infer<typeof updateEmailSchema>

export const updatePasswordSchema = z.object({
  currentPassword: z
    .string()
    .min(1, 'Current password is required'),
  newPassword: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  confirmPassword: z
    .string()
    .min(1, 'Please confirm your password')
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export type UpdatePasswordFormData = z.infer<typeof updatePasswordSchema>