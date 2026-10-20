"use client";

import { Popover } from "@base-ui/react/popover";
import { X } from "lucide-react";
import type { CSSProperties, ReactElement, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type DropdownProps = Pick<
  Popover.Root.Props,
  "open" | "defaultOpen" | "onOpenChange"
> &
  Pick<Popover.Positioner.Props, "align" | "side" | "sideOffset"> & {
    trigger: ReactElement;
    title: string;
    description?: ReactNode;
    children: ReactNode;
    width?: CSSProperties["width"];
    className?: string;
    initialFocus?: Popover.Popup.Props["initialFocus"];
  };

export function Dropdown({
  trigger,
  title,
  description,
  children,
  open,
  defaultOpen,
  onOpenChange,
  align = "end",
  side = "bottom",
  sideOffset = 12,
  width = 320,
  className,
  initialFocus,
}: DropdownProps) {
  return (
    <Popover.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      <Popover.Trigger render={trigger} />
      <Popover.Portal>
        <Popover.Positioner
          align={align}
          side={side}
          sideOffset={sideOffset}
          collisionPadding={12}
          className="z-50 outline-none"
        >
          <Popover.Popup
            data-slot="dropdown-content"
            initialFocus={initialFocus}
            style={{ width }}
            className={cn(
              "max-h-(--available-height) max-w-[min(var(--available-width),calc(100vw-1.5rem))] origin-(--transform-origin) overflow-y-auto overscroll-contain rounded-2xl border border-white/10 bg-[#111212] p-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] outline-none transition-[opacity,scale] duration-200 data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 motion-reduce:transition-none",
              className,
            )}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="min-w-0 pt-2">
                <Popover.Title className="text-base font-semibold">
                  {title}
                </Popover.Title>
                {description && (
                  <Popover.Description className="mt-1 text-sm leading-relaxed text-white/50">
                    {description}
                  </Popover.Description>
                )}
              </div>
              <DropdownClose
                aria-label={`Close ${title.toLowerCase()}`}
                className="flex size-11 shrink-0 items-center justify-center rounded-lg text-white/50 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-orange-500"
              >
                <X aria-hidden="true" className="size-4" />
              </DropdownClose>
            </div>
            {children}
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}

export function DropdownClose(props: Popover.Close.Props) {
  return <Popover.Close {...props} />;
}
