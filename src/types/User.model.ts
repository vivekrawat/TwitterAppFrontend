import { z } from "zod";


export const UserSchema = z.object({
    id: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
    full_name: z.string(),
    email: z.string().email()
})

export type User = z.infer<typeof UserSchema>