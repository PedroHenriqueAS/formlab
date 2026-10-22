"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { useForm, type FieldErrors } from "react-hook-form";
import { checkoutDefaults, checkoutSteps, type CheckoutStep } from "./checkout-config";
import { checkoutSchema, type CheckoutFormData } from "./checkout-schema";

export type CheckoutCompletionHandler = (data: CheckoutFormData) => void | Promise<void>;

export function useCheckoutForm(onComplete?: CheckoutCompletionHandler) {
  const [stepIndex, setStepIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isAdvancing, setIsAdvancing] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const shouldFocusHeading = useRef(false);
  const navigationLock = useRef(false);
  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: checkoutDefaults,
    shouldUnregister: false,
    mode: "onChange",
  });
  const step = checkoutSteps[stepIndex];
  const busy = isAdvancing || form.formState.isSubmitting;

  useEffect(() => {
    if (shouldFocusHeading.current) {
      headingRef.current?.focus();
      shouldFocusHeading.current = false;
    }
  }, [stepIndex, isComplete]);

  function goToStep(index: number) {
    if (navigationLock.current) return;
    form.setValue("confirmed", false);
    form.clearErrors("confirmed");
    form.clearErrors("root");
    shouldFocusHeading.current = true;
    setStepIndex(index);
  }

  function editStep(id: CheckoutStep) {
    goToStep(checkoutSteps.findIndex((entry) => entry.id === id));
  }

  function editDetails() {
    setIsComplete(false);
    goToStep(0);
  }

  async function confirmDetails(data: CheckoutFormData) {
    try {
      await onComplete?.(data);
      shouldFocusHeading.current = true;
      setIsComplete(true);
    } catch {
      form.setError("root", {
        message: "We couldn’t confirm your details. Please try again.",
      });
    }
  }

  function showInvalidStep(errors: FieldErrors<CheckoutFormData>) {
    const invalidIndex = checkoutSteps.findIndex((entry) =>
      entry.fields.some((field) => errors[field]),
    );
    if (invalidIndex !== -1 && invalidIndex !== stepIndex) {
      shouldFocusHeading.current = true;
      setStepIndex(invalidIndex);
    }
  }

  async function handleStepSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (navigationLock.current) return;
    navigationLock.current = true;
    setIsAdvancing(true);
    try {
      if (step.id === "review") {
        await form.handleSubmit(confirmDetails, showInvalidStep)(event);
      } else if (await form.trigger(step.fields, { shouldFocus: true })) {
        shouldFocusHeading.current = true;
        setStepIndex((current) => current + 1);
      }
    } finally {
      navigationLock.current = false;
      setIsAdvancing(false);
    }
  }

  return {
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
  };
}
