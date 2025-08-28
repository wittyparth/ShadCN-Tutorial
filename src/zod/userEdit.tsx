import { z } from "zod";
export const formSchema = z.object({
  Username: z.string().min(2).max(50),
  Email: z.email(),
  Phone: z.string().min(10).max(12),
  Location: z.string().min(5).max(40),
  Role: z.enum(["Admin", "User"]),
});

export type formSchemaType = z.infer<typeof formSchema>