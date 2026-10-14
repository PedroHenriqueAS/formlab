"use client";

export type DropdownOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type DropdownProps = {
  options: readonly DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  name?: string;
  disabled?: boolean;
  className?: string;
};

export function Dropdown({
  options,
  value,
  onChange,
  label = "Ordenar por",
  name,
  disabled = false,
  className = "w-35",
}: DropdownProps) {
  return (
    <div className={`relative max-w-full shrink-0 ${className}`}>
      <select
        aria-label={label}
        name={name}
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
        className="block h-[30px] w-full cursor-pointer appearance-none rounded-[10px] border-2 border-[#2b2b2b] bg-[#171717] pl-[10px] pr-8 text-sm font-semibold text-[#f5f5f5] transition-colors [color-scheme:dark] hover:border-[#404040] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#737373] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>

      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        fill="none"
        className={`pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-[#d4d4d4] ${disabled ? "opacity-50" : ""}`}
      >
        <path
          d="m5 9 7 7 7-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}