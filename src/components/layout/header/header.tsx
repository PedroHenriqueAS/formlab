import { ShoppingCart, User } from "lucide-react";
import { HeaderNav } from "./navbar";
import { SearchInput } from "@/components/ui/search-input";

export function Header() {
  return (
    <header className="flex items-center w-full justify-between h-16 px-8 py-4 bg-black max-w-[1500px]">
      <div className="flex flex-row items-center justify-between gap-2">
        <h1 className="text-2xl font-bold text-white">FormLab</h1>
        <p className="text-3xl font-thin text-gray-500">|</p>
        <span className="w-18 leading-tight uppercase text-xs placeholder:text-white/35 text-gray-500">
          your ideas wear well
        </span>
      </div>
      <HeaderNav />
      <div className="flex w-[40%] max-w-145 shrink-0 items-center gap-6 rounded-lg px-4 py-2">
        <SearchInput
          className="min-w-0 flex-1"
          placeholder="search designs, styles, or keywords..."
        />

        <User className="shrink-0 text-white" size={30} strokeWidth={2} />

        <ShoppingCart
          className="shrink-0 text-white"
          size={30}
          strokeWidth={2}
        />
      </div>
    </header>
  );
}
