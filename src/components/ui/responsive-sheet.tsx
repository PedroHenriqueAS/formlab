"use client";

import { useCallback, useState, useSyncExternalStore, type ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const desktopQuery = "(min-width: 768px)";
const getDesktopSnapshot = () => window.matchMedia(desktopQuery).matches;
const getServerSnapshot = () => true;

type ResponsiveSheetProps = {
  children: ReactNode;
  title: string;
  description: string;
  trigger: ReactNode;
  triggerLabel?: string;
};

// The owner keeps interaction state; the same controls move between the
// inline tablet/desktop layout and the mobile dialog without duplicating it.
export function ResponsiveSheet({
  children,
  title,
  description,
  trigger,
  triggerLabel,
}: ResponsiveSheetProps) {
  const [open, setOpen] = useState(false);
  const subscribe = useCallback((onChange: () => void) => {
    const media = window.matchMedia(desktopQuery);
    const handleChange = () => {
      setOpen(false);
      onChange();
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);
  const isDesktop = useSyncExternalStore(
    subscribe,
    getDesktopSnapshot,
    getServerSnapshot
  );

  return (
    <>
      <div className="hidden min-w-0 md:block">{isDesktop && children}</div>
      {/* Reset dialog internals on a breakpoint change, including exit animations. */}
      <Sheet
        key={isDesktop ? "inline" : "drawer"}
        open={open && !isDesktop}
        onOpenChange={setOpen}
      >
        <SheetTrigger
          aria-label={triggerLabel}
          className="flex min-h-11 min-w-11 items-center justify-center gap-2 justify-self-start rounded-lg border border-white/15 px-3 text-sm text-white hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 md:hidden"
        >
          {trigger}
        </SheetTrigger>
        {!isDesktop && (
          <SheetContent side="left" className="dark overflow-y-auto overscroll-contain border-white/15 bg-[#111212] text-white data-[side=left]:w-[calc(100%-2rem)] data-[side=left]:max-w-sm">
            <SheetHeader className="pr-16">
              <SheetTitle>{title}</SheetTitle>
              <SheetDescription>{description}</SheetDescription>
            </SheetHeader>
            <div className="min-w-0 px-4 pb-6">{children}</div>
          </SheetContent>
        )}
      </Sheet>
    </>
  );
}
