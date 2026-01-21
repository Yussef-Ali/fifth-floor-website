import { z } from 'zod'
import { SERVICE_TITLES } from './contact-config'

// ============================================================================
// CONTACT FORM SCHEMA - Full form validation
// ============================================================================

export const contactFormSchema = z.object({
    name: z
        .string()
        .min(1, 'Name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must be less than 100 characters')
        .regex(/^[a-zA-Z\s\u0600-\u06FF\u0750-\u077F'-]+$/, 'Name can only contain letters, spaces, and hyphens'),

    email: z
        .string()
        .min(1, 'Email is required')
        .email('Please enter a valid email address')
        .max(254, 'Email must be less than 254 characters'),

    company: z
        .string()
        .max(100, 'Company name must be less than 100 characters')
        .optional()
        .or(z.literal('')),

    serviceType: z
        .string()
        .optional()
        .refine(
            (val) => !val || SERVICE_TITLES.includes(val as typeof SERVICE_TITLES[number]),
            'Please select a valid service'
        ),

    message: z
        .string()
        .min(1, 'Message is required')
        .min(10, 'Message must be at least 10 characters')
        .max(2000, 'Message must be less than 2000 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// ============================================================================
// EMAIL-ONLY SCHEMA - For simple newsletter/CTA forms
// ============================================================================

export const emailOnlySchema = z.object({
    email: z
        .string()
        .min(1, 'Email is required')
        .email('Please enter a valid email address')
        .max(254, 'Email must be less than 254 characters'),
})

export type EmailOnlyData = z.infer<typeof emailOnlySchema>

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export type FormErrors<T> = Partial<Record<keyof T, string>>

export function validateForm<T extends z.ZodObject<z.ZodRawShape>>(
    schema: T,
    data: unknown
): { success: true; data: z.infer<T> } | { success: false; errors: FormErrors<z.infer<T>> } {
    const result = schema.safeParse(data)

    if (result.success) {
        return { success: true, data: result.data }
    }

    const errors: FormErrors<z.infer<T>> = {}
    result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof z.infer<T>
        if (!errors[field]) {
            errors[field] = err.message
        }
    })

    return { success: false, errors }
}

export function validateField<T extends z.ZodObject<z.ZodRawShape>>(
    schema: T,
    field: keyof z.infer<T>,
    value: unknown
): string | null {
    const fieldSchema = schema.shape[field as string]
    if (!fieldSchema) return null

    const result = fieldSchema.safeParse(value)
    if (result.success) return null

    return result.error.errors[0]?.message || 'Invalid value'
}
