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
    <section className="relative isolate min-h-160 w-full overflow-hidden rounded-lg bg-[url(/hero-background.png)] bg-cover bg-position-[70%_center] bg-no-repeat px-5 py-8 md:min-h-104 md:bg-position-[65%_center] md:px-6 xl:min-h-96 xl:bg-position-[68%_center] xl:px-8">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/60 md:bg-linear-to-r md:from-black/60 md:to-transparent xl:hidden" />
      <div className="relative md:w-[70%] xl:w-1/2">
        <span className="text-xs leading-tight tracking-widest text-white uppercase">
          Custom shirts for a brighter you
        </span>
        <h2 className="mt-3 text-4xl font-bold text-white md:text-[2.5rem] xl:mt-0 xl:text-5xl">
          Make it <span className=" text-orange-500">Yours.</span>
        </h2>
        <h3 className="text-4xl font-bold text-white md:text-[2.5rem] xl:text-5xl">Wear what matters</h3>
        <p className="mt-3 mb-6 max-w-sm text-sm leading-6 text-white/70 xl:text-white/50">
          Custom printed shirts for self expression, your team, your brand - or
          just because
        </p>
        <div className="flex flex-col gap-3 md:flex-row md:flex-wrap xl:gap-4">
          <Button variant="cta" size="hero">
            Start Customizing
            <ArrowRight />
          </Button>

          <Button variant="ctaOutline" size="hero">
            Explore Catalog
          </Button>
        </div>
        <div className="grid gap-4 pt-6 md:grid-cols-3 md:gap-2 xl:gap-0">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="flex min-w-0 items-center gap-3 md:flex-col md:items-start md:border-r md:border-white/15 md:pr-2 md:last:border-0 xl:flex-row xl:items-center xl:px-4 xl:first:pl-0 xl:last:pr-0"
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
      <div className="mt-8 flex justify-end md:absolute md:right-6 md:bottom-6 md:mt-0 xl:right-8 xl:bottom-8">
        <div
          className="
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
