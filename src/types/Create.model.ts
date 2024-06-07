import { z } from "zod";
export const CreateSuccessSchema = z.object({
    message: z.string()
})

export type CreateSuccess = z.infer<typeof CreateSuccessSchema>