import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type SearchInputProps = React.ComponentProps<typeof Input>;

export function SearchInput({
  className,
  placeholder = "Search designs, styles, or keywords...",
  ...props
}: SearchInputProps) {
  return (
    <div className="relative w-full">
      <Search
        aria-hidden="true"
        className="
          absolute
          left-4
          top-1/2
          size-4
          -translate-y-1/2
          text-white/60
          pointer-events-none
        "
      />

      <Input
        type="search"
        placeholder={placeholder}
        className={cn(
          `
            h-11
            w-full
            rounded-full
            border-white/10
            bg-white/[0.02]
            pl-11
            pr-4
            text-sm
            text-white
            placeholder:text-white/35
            transition-colors
            duration-200
            hover:border-white/20
            hover:bg-white/[0.035]
            focus-visible:border-white/25
            focus-visible:bg-white/[0.04]
            focus-visible:ring-0
          `,
          className
        )}
        {...props}
      />
    </div>
  );
}