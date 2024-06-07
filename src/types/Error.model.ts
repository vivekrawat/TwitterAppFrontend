import { z } from 'zod'

export const ErrorSchema = z.object({
    status: z.number(),
    data: z.object({
        message: z.string()
    })
})

export type Error = z.infer<typeof ErrorSchema>