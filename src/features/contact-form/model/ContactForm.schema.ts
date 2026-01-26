import { z } from 'zod';

export const createContactFormSchema = () =>
  z.object({
    fullName: z.string().min(1, 'This field is required'),
    email: z.string().email('Invalid email address').min(1, 'This field is required'),
    companyProject: z.string().optional(),
    topicOfInquiry: z.string().min(1, 'This field is required'),
    description: z.string().optional(),
  });

export type ContactFormSchema = z.infer<ReturnType<typeof createContactFormSchema>>;
