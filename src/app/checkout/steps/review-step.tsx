"use client";

import { useFormContext } from "react-hook-form";
import { formatCurrency } from "@/lib/format-currency";
import { FieldError, FormPanel } from "../checkout-fields";
import { deliveryOptions, paymentOptions, type CheckoutStep } from "../checkout-config";
import type { CheckoutFormData } from "../checkout-schema";

const editClass = "min-h-11 shrink-0 rounded-lg px-3 text-sm text-[#ff6738] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-orange-500";

export function ReviewStep({ onEdit }: { onEdit: (step: CheckoutStep) => void }) {
  const { getValues, register, formState: { errors } } = useFormContext<CheckoutFormData>();
  const values = getValues();
  const delivery = deliveryOptions.find((option) => option.value === values.deliveryMethod);
  const payment = paymentOptions.find((option) => option.value === values.paymentMethod);

  return (
    <FormPanel title="Review Your Details" description="Make sure everything is correct before confirming.">
      <div className="divide-y divide-white/10 text-sm leading-relaxed text-white/60 [overflow-wrap:anywhere]">
        <section className="pb-5">
          <div className="mb-2 flex items-center justify-between gap-3">
            <h3 className="font-semibold text-white">Contact & shipping address</h3>
            <button type="button" onClick={() => onEdit("information")} className={editClass} aria-label="Edit contact and address">Edit</button>
          </div>
          <p className="font-medium text-white/85">{values.fullName}</p>
          <p>{values.email}</p>
          <p>{values.phone}</p>
          <p className="mt-3">{values.address}, {values.number}</p>
          {values.complement && <p>{values.complement}</p>}
          <p>{values.neighborhood} · {values.city}, {values.state}</p>
          <p>{values.zipCode} · Brazil</p>
          <p className="mt-3 text-xs text-white/45">Receive news & offers: {values.newsletter ? "Yes" : "No"}</p>
        </section>
        <section className="py-5">
          <div className="mb-2 flex items-center justify-between gap-3">
            <h3 className="font-semibold text-white">Delivery</h3>
            <button type="button" onClick={() => onEdit("delivery")} className={editClass} aria-label="Edit delivery">Edit</button>
          </div>
          {delivery && <p>{delivery.label} · {delivery.estimate}<br />{formatCurrency(delivery.price)} (demo rate)</p>}
        </section>
        <section className="py-5">
          <div className="mb-2 flex items-center justify-between gap-3">
            <h3 className="font-semibold text-white">Payment</h3>
            <button type="button" onClick={() => onEdit("payment")} className={editClass} aria-label="Edit payment">Edit</button>
          </div>
          <p>{payment?.label}</p>
          <p className="mt-1 text-xs text-white/45">No charge will be made in this demo.</p>
        </section>
      </div>
      <label className="mt-2 flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-white/75">
        <input
          {...register("confirmed")}
          type="checkbox"
          aria-invalid={Boolean(errors.confirmed)}
          aria-describedby={errors.confirmed ? "checkout-confirmed-error" : undefined}
          className="mt-0.5 size-5 shrink-0 accent-[#ff6738]"
        />
        I have checked my contact and shipping details.
      </label>
      <FieldError name="confirmed" />
    </FormPanel>
  );
}
