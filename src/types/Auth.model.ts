import { z } from "zod";

export const LoginSchema = z.object({
    username: z.string()
      .min(3, { message: "user name must have at least 3 characters" })
      .max(50, { message: "user name cannot be this long" }),
    password: z.string()
      .min(5, { message: "password too short" })
      .max(50, { message: "password too long" }),
  });

 export const RegisterSchema = z.object({
    email: z.string().email({message: "invalid email"})
      .min(6,{message: "please enter valid email"}),
    fullname: z.string()
      .min(3, { message: "user name must have at least 3 characters" })
      .max(50, { message: "user name cannot be this long" }),
    username: z.string()
      .min(3, { message: "user name must have at least 3 characters" })
      .max(50, { message: "user name cannot be this long" }),
    password: z.string()
      .min(5, { message: "password too short" })
      .max(50, { message: "password too long" }),
  });

  

  export type LoginType = z.infer<typeof LoginSchema>
  export type RegisterType = z.infer<typeof RegisterSchema>