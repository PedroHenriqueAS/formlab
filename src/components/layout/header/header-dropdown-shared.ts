export type HeaderDropdownProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const iconTriggerClassName =
  "flex size-11 shrink-0 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/5 aria-expanded:bg-white/5 aria-expanded:text-[#ff6738] focus-visible:outline-2 focus-visible:outline-orange-500";
