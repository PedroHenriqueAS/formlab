"use client";

import { useFormContext } from "react-hook-form";
import { formatCurrency } from "@/lib/format-currency";
import { ChoiceGroup, FormPanel } from "../checkout-fields";
import { deliveryOptions } from "../checkout-config";
import type { CheckoutFormData } from "../checkout-schema";

export function DeliveryStep() {
  const { getValues } = useFormContext<CheckoutFormData>();
  const { address, number, complement, neighborhood, city, state, zipCode } = getValues();

  return (
    <FormPanel title="Delivery Options" description="Choose how you’d like to receive your order.">
      <div className="mb-6 rounded-xl bg-white/3 p-4 text-sm leading-relaxed text-white/65 [overflow-wrap:anywhere]">
        <p className="mb-1 font-medium text-white">Shipping to</p>
        <p>{address}, {number}{complement ? ` · ${complement}` : ""}</p>
        <p>{neighborhood} · {city}, {state}</p>
        <p>{zipCode} · Brazil</p>
      </div>
      <ChoiceGroup
        name="deliveryMethod"
        legend="Shipping options"
        options={deliveryOptions.map((option) => ({
          ...option,
          description: option.estimate,
          trailing: formatCurrency(option.price),
        }))}
      />
      <p className="mt-4 text-xs leading-relaxed text-white/45">Demo shipping options. Prices and delivery times are illustrative.</p>
    </FormPanel>
  );
}
