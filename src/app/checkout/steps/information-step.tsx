"use client";

import { useFormContext } from "react-hook-form";
import { brazilianStates, type CheckoutFormData } from "../checkout-schema";
import { checkoutInputClass, FieldError, FormPanel, TextField } from "../checkout-fields";

export function InformationStep() {
  const { register, formState: { errors } } = useFormContext<CheckoutFormData>();

  return (
    <div className="space-y-4">
      <FormPanel title="Contact Information" description="We’ll use this information to keep you updated about your order.">
        <TextField name="email" label="Email" type="email" autoComplete="email" placeholder="you@example.com" />
        <label className="mt-4 flex cursor-pointer items-start gap-3 text-xs leading-6 text-white/70">
          <input {...register("newsletter")} type="checkbox" className="mt-0.5 size-5 shrink-0 accent-[#ff6738]" />
          Send me new releases and special offers (optional).
        </label>
      </FormPanel>
      <FormPanel title="Shipping Address" description="Where should we send your order? Delivery within Brazil.">
        <div className="grid grid-cols-1 gap-5 @min-[32rem]/checkout:grid-cols-6 @min-[42rem]/checkout:grid-cols-12">
          <TextField name="fullName" label="Full name" autoComplete="name" placeholder="John Doe" className="@min-[32rem]/checkout:col-span-3 @min-[42rem]/checkout:col-span-6" />
          <TextField name="phone" label="Phone" type="tel" autoComplete="tel" placeholder="+55 (11) 91234-5678" className="@min-[32rem]/checkout:col-span-3 @min-[42rem]/checkout:col-span-6" />
          <TextField name="address" label="Address" autoComplete="address-line1" placeholder="Rua das Flores" className="@min-[32rem]/checkout:col-span-6 @min-[42rem]/checkout:col-span-12" />
          <TextField name="number" label="Number" placeholder="123 or S/N" className="@min-[32rem]/checkout:col-span-2 @min-[42rem]/checkout:col-span-4" />
          <TextField name="complement" label="Complement (optional)" autoComplete="address-line2" placeholder="Apt 45" className="@min-[32rem]/checkout:col-span-4 @min-[42rem]/checkout:col-span-8" />
          <TextField name="neighborhood" label="Neighborhood" autoComplete="address-level3" placeholder="Jardim Paulista" className="@min-[32rem]/checkout:col-span-3 @min-[42rem]/checkout:col-span-4" />
          <TextField name="city" label="City" autoComplete="address-level2" placeholder="São Paulo" className="@min-[32rem]/checkout:col-span-3" />
          <div className="min-w-0 @min-[32rem]/checkout:col-span-2">
            <label htmlFor="checkout-state" className="mb-1 block text-sm text-white/65">State</label>
            <select
              {...register("state")}
              id="checkout-state"
              autoComplete="address-level1"
              aria-invalid={Boolean(errors.state)}
              aria-describedby={errors.state ? "checkout-state-error" : undefined}
              className={`${checkoutInputClass} [color-scheme:dark]`}
            >
              <option value="">UF</option>
              {brazilianStates.map((state) => <option key={state} value={state}>{state}</option>)}
            </select>
            <FieldError name="state" />
          </div>
          <TextField name="zipCode" label="ZIP Code" inputMode="numeric" autoComplete="postal-code" placeholder="01452-000" className="@min-[32rem]/checkout:col-span-4 @min-[42rem]/checkout:col-span-3" />
        </div>
      </FormPanel>
    </div>
  );
}
