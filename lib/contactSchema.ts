import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 character long'),
  email: z.email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
  phone: z.string().optional(),
});

export type ContactInput = z.infer<typeof ContactSchema>;