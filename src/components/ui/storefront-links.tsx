"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { useNavigation } from "@/providers/navigation-provider";

type StorefrontLinkProps = {
  children: ReactNode;
  onClose?: () => void;
};

const linkClassName =
  "mt-5 flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4";

export function CatalogLink({ children, onClose }: StorefrontLinkProps) {
  const { setActiveSection } = useNavigation();

  return (
    <Link
      href="/"
      onClick={() => {
        setActiveSection("catalog");
        onClose?.();
      }}
      className={`${linkClassName} bg-[#ff6738] hover:bg-[#ff7b53] focus-visible:outline-orange-500`}
    >
      {children}
      <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  );
}

export function CheckoutLink({ children, onClose }: StorefrontLinkProps) {
  const { setActiveSection } = useNavigation();

  return (
    <Link
      href="/checkout"
      onClick={() => {
        setActiveSection("catalog");
        onClose?.();
      }}
      className={`${linkClassName} bg-[#211e1d] hover:bg-[#635652] focus-visible:outline-orange-500`}
    >
      {children}
      <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  );
}
