import { ArrowRight, Trash } from "lucide-react";
import { RightsSection } from "./rights-section";

export function Footer() {
  return (
    <div className="mt-35 w-full bg-[#111212] text-white">
      <div className="mx-auto w-full max-w-360 px-8">
        <div className="border-t border-white/10 py-10">
          <div className="grid grid-cols-[3fr_4fr_3fr] gap-10">
            <div className="w-full">
              <div className="flex items-center gap-4">
                <h2 className="font-display text-[42px] leading-none tracking-[-0.02em] text-white">
                  FormLab
                </h2>
                <div className="h-10 w-px bg-white/25" />
                <h3 className="text-[13px] font-medium uppercase leading-tight tracking-[0.06em] text-white/50">
                  Your Ideas
                  <br />
                  Wear Well
                </h3>
              </div>
              <p className="mt-6 max-w-sm text-sm leading-6 text-white/55">
                Custom shirts for self-expression, your team, your brand — or
                just because. Make it yours.
              </p>
              <div className="mt-7 flex items-center gap-6">
                <button className="flex size-12 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/40 hover:text-white">
                  <Trash size={16} />
                </button>
                <button className="flex size-12 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/40 hover:text-white">
                  <Trash size={16} />
                </button>
                <button className="flex size-12 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/40 hover:text-white">
                  <Trash size={16} />
                </button>
                <button className="flex size-12 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/40 hover:text-white">
                  <Trash size={16} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <ul className="space-y-2 text-sm text-white/55">
                <li className="mb-4 text-base font-semibold text-white">
                  Shop
                </li>
                <li className="transition hover:text-white">All Products</li>
                <li className="transition hover:text-white">T-Shirts</li>
                <li className="transition hover:text-white">Long Sleeve</li>
                <li className="transition hover:text-white">New Drop</li>
              </ul>
              <ul className="space-y-2 text-sm text-white/55">
                <li className="mb-4 text-base font-semibold text-white">
                  Company
                </li>
                <li className="transition hover:text-white">About</li>
                <li className="transition hover:text-white">Customize</li>
                <li className="transition hover:text-white">Sustainability</li>
                <li className="transition hover:text-white">Contact</li>
              </ul>
              <ul className="space-y-2 text-sm text-white/55">
                <li className="mb-4 text-base font-semibold text-white">
                  Support
                </li>
                <li className="transition hover:text-white">Size Guide</li>
                <li className="transition hover:text-white">
                  Shipping & Returns
                </li>
                <li className="transition hover:text-white">FAQ</li>
              </ul>
            </div>
            <div className="border-l border-white/10 pl-10">
              <h2 className="text-lg font-semibold text-white">
                Join the Creative Club
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
                Get early access to new drops, exclusive designs and special
                offers.
              </p>
              <form className="mt-6 w-full">
                <div className="flex h-14 items-center rounded-full border border-white/15 bg-white/[0.02] p-1">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="
                  h-full
                  min-w-0
                  flex-1
                  bg-transparent
                  px-5
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/35
                "
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="
                  flex
                  size-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-r
                  from-[#ff7a32]
                  to-[#ff5a2f]
                  text-white
                  transition
                  hover:brightness-110
                  active:scale-95
                ">
                    <ArrowRight className="size-5" />
                  </button>
                </div>
              </form>
              <div className="mt-4 flex items-center gap-3">
                <input
                  id="newsletter-consent"
                  type="checkbox"
                  className="size-4 accent-orange-500"
                />
                <label
                  htmlFor="newsletter-consent"
                  className="text-xs text-white/40"
                >
                  I agree to receive emails from FormLab.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RightsSection />
      <div
        className="
      h-96
      w-full
      bg-[url('/footer.png')]
      bg-cover
      bg-position-[center_75%]
      bg-no-repeat
    "
      />
    </div>
  );
}
