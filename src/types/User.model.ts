import { z } from "zod";

export const UserSchema = z.object({
  _id: z.string(),
  created_at: z.date(),
  email: z.string().email(),
  default_profile: z.boolean(),
  default_profile_image: z.boolean(),
  description: z.string().default('').optional(),
//   entities: { url: { urls: [] }, description: { urls: [] } },
  favourites_count: z.number().default(0),
  followers_count: z.number().default(0),
  friends_count: z.number().default(0),
  listed_count: z.number().default(0),
  location: z.string().default('').optional(),
  name: z.string(),
  notifications_enabled_device_count: z.string().optional().default("0"),
  profile_banner_color: z.string().default('').optional(),
  profile_banner_url: z.string().default('').optional(),
  profile_image_url_https: z.string().default('').optional(),
  protected: z.boolean().default(false),
  screen_name: z.string(),
  url: z.string().optional(),
  verified: z.boolean().optional().default(false),
  __v: z.number().default(0),
});

export const loginSuccessSchema = z.object({
  message: z.string(),
  token: z.string(),
  user: UserSchema
})

export type User = z.infer<typeof UserSchema>;
export type LoginSuccess = z.infer<typeof loginSuccessSchema>
