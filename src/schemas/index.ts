import * as z from "zod";

export const GuestBookSchemaEntry = z.object({
  message: z
    .string()
    .min(1, {
      message: "Message is empty",
    })
    .max(100, {
      message: "Name is too long",
    }),
});
