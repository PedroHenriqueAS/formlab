"use client";

import { User } from "lucide-react";

import { Dropdown } from "@/components/ui/dropdown";
import { CatalogLink } from "@/components/ui/storefront-links";

import { iconTriggerClassName, type HeaderDropdownProps } from "./header-dropdown-shared";

export function AccountDropdown({ open, onOpenChange }: HeaderDropdownProps) {
  return (
    <Dropdown
      open={open}
      onOpenChange={onOpenChange}
      title="Your account"
      align="end"
      trigger={
        <button type="button" aria-label="Account" className={iconTriggerClassName}>
          <User className="size-6 xl:size-7" strokeWidth={2} aria-hidden="true" />
        </button>
      }
    >
      <div className="py-3 text-center">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60">
          <User className="size-6" strokeWidth={1.5} aria-hidden="true" />
        </span>
        <p className="mt-4 text-sm font-medium text-white">Welcome to FormLab</p>
        <p className="mt-2 text-sm leading-relaxed text-white/50">
          You’re browsing as a guest.
        </p>
        <CatalogLink onClose={() => onOpenChange(false)}>Explore catalog</CatalogLink>
      </div>
    </Dropdown>
  );
}
