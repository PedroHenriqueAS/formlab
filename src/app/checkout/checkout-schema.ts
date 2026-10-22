import { z } from "zod";

export const brazilianStates = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO",
  "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI",
  "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",
] as const;

export const checkoutSchema = z.object({
  email: z.string().trim().pipe(z.email("Enter a valid email address.")),
  newsletter: z.boolean(),
  fullName: z.string().trim().min(3, "Enter your full name.").max(100, "Use up to 100 characters."),
  phone: z.string().trim().refine(
    (value) => /^(?:\+?55)?[1-9]{2}(?:[2-5]\d{7}|9\d{8})$/.test(value.replace(/[\s()-]/g, "")),
    "Enter a Brazilian phone number with area code.",
  ),
  address: z.string().trim().min(3, "Enter your street address.").max(120, "Use up to 120 characters."),
  number: z.string().trim().min(1, "Enter the number or S/N.").max(15, "Use up to 15 characters."),
  complement: z.string().trim().max(100, "Use up to 100 characters."),
  neighborhood: z.string().trim().min(2, "Enter your neighborhood.").max(80, "Use up to 80 characters."),
  city: z.string().trim().min(2, "Enter your city.").max(80, "Use up to 80 characters."),
  state: z.string().refine(
    (value) => brazilianStates.some((state) => state === value),
    "Select your state.",
  ),
  zipCode: z.string().trim().regex(/^\d{5}-?\d{3}$/, "Enter a valid ZIP code, such as 01452-000."),
  deliveryMethod: z.enum(["standard", "express"], { error: "Choose a delivery option." }),
  paymentMethod: z.enum(["pix", "card"], { error: "Choose a payment method." }),
  confirmed: z.boolean().refine((value) => value, "Confirm your details before continuing."),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
