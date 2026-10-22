import type { CheckoutFormData } from "./checkout-schema";

export type CheckoutStep = "information" | "delivery" | "payment" | "review";

interface CheckoutStepDefinition {
  id: CheckoutStep;
  label: string;
  description: string;
  fields: (keyof CheckoutFormData)[];
}

export const checkoutSteps: CheckoutStepDefinition[] = [
  {
    id: "information",
    label: "Information",
    description: "Your details",
    fields: [
      "email", "newsletter", "fullName", "phone", "address", "number",
      "complement", "neighborhood", "city", "state", "zipCode",
    ],
  },
  { id: "delivery", label: "Delivery", description: "Shipping options", fields: ["deliveryMethod"] },
  { id: "payment", label: "Payment", description: "Payment method", fields: ["paymentMethod"] },
  { id: "review", label: "Review", description: "Confirm your details", fields: ["confirmed"] },
];

export const checkoutDefaults: Partial<CheckoutFormData> = {
  email: "",
  newsletter: false,
  fullName: "",
  phone: "",
  address: "",
  number: "",
  complement: "",
  neighborhood: "",
  city: "",
  state: "",
  zipCode: "",
  confirmed: false,
};

export const deliveryOptions = [
  { value: "standard", label: "Standard delivery", estimate: "5–8 business days", price: 14.9 },
  { value: "express", label: "Express delivery", estimate: "2–3 business days", price: 24.9 },
] as const satisfies readonly {
  value: CheckoutFormData["deliveryMethod"];
  label: string;
  estimate: string;
  price: number;
}[];

export const paymentOptions = [
  { value: "pix", label: "Pix", description: "Pay with Pix when payment is available." },
  { value: "card", label: "Credit card", description: "Pay by card when payment is available." },
] as const satisfies readonly {
  value: CheckoutFormData["paymentMethod"];
  label: string;
  description: string;
}[];
