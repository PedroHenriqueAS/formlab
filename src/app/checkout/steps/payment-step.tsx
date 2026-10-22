"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { ChoiceGroup, FormPanel } from "../checkout-fields";
import { paymentOptions } from "../checkout-config";
import type { CheckoutFormData } from "../checkout-schema";

export function PaymentStep() {
  const { control } = useFormContext<CheckoutFormData>();
  const method = useWatch({ control, name: "paymentMethod" });

  return (
    <FormPanel title="Payment Method" description="Choose your preferred payment method.">
      <ChoiceGroup name="paymentMethod" legend="Payment methods" options={paymentOptions} />
      <div className="mt-5 rounded-xl border border-white/10 p-4 text-sm leading-relaxed text-white/55">
        {method === "pix"
          ? "Pix selected. This demo does not generate a QR code or collect payment."
          : method === "card"
            ? "Credit card selected. This demo does not request card details or collect payment."
            : "This is a checkout demo. No payment will be collected."}
      </div>
    </FormPanel>
  );
}
