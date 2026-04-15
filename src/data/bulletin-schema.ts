import { z } from "zod";

const actionSchema = z.object({
  label: z.string().min(1),
  url: z.string().url(),
  variant: z.enum(["primary", "secondary", "text"]),
});

const faqItemSchema = z.object({
  question: z.string().min(1),
  paragraphs: z.array(z.string()).min(1),
  list: z.array(z.string()).optional(),
});

export const bulletinSchema = z.object({
  navigation: z.object({
    brand: z.string().min(1),
    links: z.array(z.object({ label: z.string().min(1), url: z.string().url() })).min(1),
  }),
  hero: z.object({
    headline: z.tuple([z.string().min(1), z.string().min(1)]),
    project: z.object({
      prefix: z.string().min(1),
      label: z.string().min(1),
      url: z.string().url(),
      suffix: z.string().min(1),
    }),
    summary: z.string().default(""),
    updatedAt: z.string().min(1),
    visualAlt: z.string().min(1),
    actions: z.array(actionSchema).min(2),
  }),
  faq: z.object({
    title: z.string().min(1),
    items: z.array(faqItemSchema).min(1),
  }),
});

export type BulletinData = z.infer<typeof bulletinSchema>;
