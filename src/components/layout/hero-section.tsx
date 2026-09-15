import { ArrowRight, Leaf, LucideIcon, Shirt, Truck } from "lucide-react";
import { Button } from "../ui/button";

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: Shirt,
    title: "Premium Quality",
    description: "Made to last",
  },
  {
    icon: Truck,
    title: "Fast Fulfillment",
    description: "Shipped with care",
  },
  {
    icon: Leaf,
    title: "A More Creative World",
    description: "One shirt at a time",
  },
];

export function HeroSection() {
  return (
    <section className="w-full h-96 bg-[url(/hero-background.png)] px-8 py-8 rounded-lg grid grid-cols-2 bg-cover bg-position-[68%_center] bg-no-repeat">
      <div>
        <span className="w-18 leading-tight uppercase text-xs placeholder:text-white/35 text-white tracking-widest">
          Custom shirts for a brighter you
        </span>
        <h2 className="text-5xl font-bold text-white">
          Make it <span className=" text-orange-500">Yours.</span>
        </h2>
        <h3 className="text-5xl font-bold text-white">Wear what matters</h3>
        <p className="w-2/3 mb-6 mt-2 text-sm text-white/45">
          Custom printed shirts for self expression, your team, your brand - or
          just because
        </p>
        <div className="flex gap-4">
          <Button variant="cta" size="hero">
            Start Customizing
            <ArrowRight />
          </Button>

          <Button variant="ctaOutline" size="hero">
            Explore Catalog
          </Button>
        </div>
        <div className="grid grid-cols-3 pt-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className={`
                    flex items-center gap-3
                    px-5
                    first:pl-0
                    last:pr-0
                    ${index !== benefits.length - 1 ? "border-r border-white/15" : ""}
                    `}
              >
                <div
                  className="
                        flex size-11 shrink-0
                        items-center justify-center
                        rounded-full
                        border border-white/30
                        text-white/80
                    "
                >
                  <Icon className="size-5" strokeWidth={1.3} />
                </div>

                <div className="flex flex-col gap-0.5">
                  <span
                    className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-white/80
                        "
                  >
                    {benefit.title}
                  </span>

                  <span
                    className="
                        text-[11px]
                        font-normal
                        text-white/45
                        "
                  >
                    {benefit.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative">
        <div
          className="
                        absolute
                        bottom-0.5
                        right-0.5
                        flex
                        flex-col
                        gap-0.5
                        uppercase
                        text-white/45"
        >
          <span className="text-[9px] font-semibold tracking-[0.22em]">
            FormLab
          </span>
          <span className="text-[9px] font-semibold tracking-[0.22em]">
            Est. 2026
          </span>
          <span className="text-[9px] font-semibold tracking-[0.22em]">
            For a brighter you
          </span>
        </div>
      </div>
    </section>
  );
}
