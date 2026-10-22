"use client";

import type { ComponentProps, ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import type { CheckoutFormData } from "./checkout-schema";

export const checkoutInputClass = "h-12 w-full min-w-0 rounded-lg border border-white/15 bg-transparent px-3 text-base text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#ff6738] focus:ring-2 focus:ring-[#ff6738]/20 aria-invalid:border-red-400 md:text-sm";

interface FormPanelProps {
  title: string;
  description?: string;
  children: ReactNode;
}

interface TextFieldProps extends Omit<ComponentProps<"input">, "name"> {
  name: keyof Pick<
    CheckoutFormData,
    "email" | "fullName" | "phone" | "address" | "number" | "complement" | "neighborhood" | "city" | "zipCode"
  >;
  label: string;
}

interface ChoiceGroupProps {
  name: "deliveryMethod" | "paymentMethod";
  legend: string;
  options: readonly {
    value: string;
    label: string;
    description: string;
    trailing?: string;
  }[];
}

export function FormPanel({ title, description, children }: FormPanelProps) {
  return (
    <section className="min-w-0 rounded-2xl border border-white/10 bg-[#0c0d0d] p-5 sm:p-6 xl:p-7">
      <h2 className="text-lg font-semibold text-white sm:text-xl">{title}</h2>
      {description && <p className="mt-2 text-sm leading-relaxed text-white/50">{description}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function FieldError({ name }: { name: keyof CheckoutFormData }) {
  const { formState: { errors } } = useFormContext<CheckoutFormData>();
  const message = errors[name]?.message;

  return message ? (
    <p id={`checkout-${name}-error`} role="alert" className="mt-2 text-xs leading-relaxed text-red-300">
      {message}
    </p>
  ) : null;
}

export function TextField({ name, label, className, ...props }: TextFieldProps) {
  const { register, formState: { errors } } = useFormContext<CheckoutFormData>();
  return (
    <div className={cn("min-w-0", className)}>
      <label htmlFor={`checkout-${name}`} className="mb-1 block text-sm text-white/65">{label}</label>
      <input
        {...props}
        {...register(name)}
        id={`checkout-${name}`}
        aria-invalid={Boolean(errors[name])}
        aria-describedby={errors[name] ? `checkout-${name}-error` : undefined}
        className={checkoutInputClass}
      />
      <FieldError name={name} />
    </div>
  );
}

export function ChoiceGroup({ name, legend, options }: ChoiceGroupProps) {
  const { register, formState: { errors } } = useFormContext<CheckoutFormData>();
  return (
    <fieldset className="min-w-0" aria-describedby={errors[name] ? `checkout-${name}-error` : undefined}>
      <legend className="sr-only">{legend}</legend>
      <div className="space-y-3">
        {options.map((option) => (
          <label key={option.value} className="grid min-w-0 cursor-pointer grid-cols-[auto_minmax(0,1fr)] items-start gap-x-3 gap-y-2 rounded-xl border border-white/15 p-4 transition-colors hover:border-white/30 has-checked:border-[#ff6738] has-checked:bg-[#ff6738]/5 has-focus-visible:ring-2 has-focus-visible:ring-[#ff6738] @min-[32rem]/checkout:grid-cols-[auto_minmax(0,1fr)_auto]">
            <input
              {...register(name)}
              type="radio"
              value={option.value}
              aria-describedby={errors[name] ? `checkout-${name}-error` : undefined}
              className="mt-0.5 size-5 shrink-0 accent-[#ff6738]"
            />
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-white">{option.label}</span>
              <span className="mt-1 block text-sm leading-relaxed text-white/50">{option.description}</span>
            </span>
            {option.trailing && <span className="col-start-2 whitespace-nowrap text-sm font-semibold text-white @min-[32rem]/checkout:col-start-3 @min-[32rem]/checkout:row-start-1">{option.trailing}</span>}
          </label>
        ))}
      </div>
      <FieldError name={name} />
    </fieldset>
  );
}
