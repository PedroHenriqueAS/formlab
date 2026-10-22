"use client";

import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { checkoutSteps } from "./checkout-config";
import { useCheckoutForm, type CheckoutCompletionHandler } from "./use-checkout-form";
import { InformationStep } from "./steps/information-step";
import { DeliveryStep } from "./steps/delivery-step";
import { PaymentStep } from "./steps/payment-step";
import { ReviewStep } from "./steps/review-step";

type CheckoutFormProps = {
  onComplete?: CheckoutCompletionHandler;
};

export function CheckoutForm({ onComplete }: CheckoutFormProps) {
  const {
    form,
    step,
    stepIndex,
    isComplete,
    busy,
    headingRef,
    goToStep,
    editStep,
    editDetails,
    handleStepSubmit,
  } = useCheckoutForm(onComplete);

  return (
    <div className="@container/checkout w-full min-w-0">
      <nav aria-label="Checkout steps" className="mb-7 sm:mb-9">
        <ol className="grid grid-cols-4 gap-2 sm:gap-4">
          {checkoutSteps.map((entry, index) => {
            const current = index === stepIndex && !isComplete;
            const completed = index < stepIndex || isComplete;
            return (
              <li key={entry.id} className="min-w-0">
                <button
                  type="button"
                  onClick={() => goToStep(index)}
                  disabled={index >= stepIndex || isComplete || busy}
                  aria-current={current ? "step" : undefined}
                  aria-label={`Step ${index + 1}: ${entry.label}`}
                  className="flex min-h-11 w-full min-w-0 flex-col items-center gap-2 rounded-lg text-center outline-none focus-visible:ring-2 focus-visible:ring-[#ff6738] disabled:cursor-default @min-[42rem]/checkout:flex-row @min-[42rem]/checkout:items-start @min-[42rem]/checkout:text-left"
                >
                  <span
                    className={cn(
                      "flex size-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold",
                      current
                        ? "border-2 border-[#ff6738] text-white shadow-[0_0_16px_rgba(255,103,56,0.15)]"
                        : completed
                          ? "border-[#ff6738]/50 text-[#ff6738]"
                          : "border-white/20 text-white/40",
                    )}
                  >
                    {completed ? (
                      <Check className="size-4" aria-hidden="true" />
                    ) : (
                      index + 1
                    )}
                  </span>
                  <span className="flex min-w-0 flex-col gap-1">
                    <span
                      className={cn(
                        "text-[11px] font-medium sm:text-sm",
                        current ? "text-white" : "text-white/55",
                      )}
                    >
                      {entry.label}
                    </span>
                    <span className="hidden text-xs leading-relaxed text-white/40 @min-[42rem]/checkout:block">
                      {entry.description}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>
      <h1 ref={headingRef} tabIndex={-1} className="sr-only">
        {isComplete
          ? "Checkout details confirmed"
          : `Checkout — ${step.label}, step ${stepIndex + 1} of 4`}
      </h1>
      {isComplete ? (
        <section
          role="status"
          className="rounded-2xl border border-[#ff6738]/30 bg-[#111212] p-6 sm:p-8"
        >
          <Check aria-hidden="true" className="mb-4 size-8 text-[#ff6738]" />
          <h2 className="text-xl font-semibold">Details confirmed</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/55">
            Your demo checkout is complete. No order has been placed and no
            payment has been collected.
          </p>
          <Button
            type="button"
            variant="ctaOutline"
            className="mt-6 min-h-11 px-5"
            onClick={editDetails}
          >
            Edit details
          </Button>
        </section>
      ) : (
        <FormProvider {...form}>
          <form
            noValidate
            onSubmit={handleStepSubmit}
            aria-label="Checkout form"
            aria-busy={busy}
          >
            <fieldset className="min-w-0 space-y-4">
              <legend className="sr-only">{step.label}</legend>
              {step.id === "information" && <InformationStep />}
              {step.id === "delivery" && <DeliveryStep />}
              {step.id === "payment" && <PaymentStep />}
              {step.id === "review" && <ReviewStep onEdit={editStep} />}
              {form.formState.errors.root && (
                <p role="alert" className="text-sm text-red-300">
                  {form.formState.errors.root.message}
                </p>
              )}
              <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row">
                {stepIndex > 0 && (
                  <Button
                    type="button"
                    variant="ctaOutline"
                    disabled={busy}
                    className="min-h-13 gap-2 px-6"
                    onClick={() => goToStep(stepIndex - 1)}
                  >
                    <ArrowLeft className="size-4" aria-hidden="true" /> Back
                  </Button>
                )}
                <Button
                  type="submit"
                  variant="buy"
                  disabled={busy}
                  className="min-h-13 min-w-0 flex-1 gap-3 px-4 text-sm font-semibold"
                >
                  {busy
                    ? "Checking details…"
                    : step.id === "review"
                      ? "Confirm details"
                      : `Continue to ${checkoutSteps[stepIndex + 1].label}`}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </fieldset>
          </form>
        </FormProvider>
      )}
    </div>
  );
}
