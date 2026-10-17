import { Globe, Leaf, UserGroup } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Self Expression",
    description: "Clothing made to represent your ideas, style and perspective",
  },
  {
    icon: UserGroup,
    title: "Built for everyone",
    description: "From individual creators to teams and brands, we make it easy",
  },
  {
    icon: Globe,
    title: "A more creative world",
    description: "We believe in a future with more original ideas out there",
  },
];

export function Advantages() {
  return (
    <div className="gap-5 pt-6 flex justify-between flex-col h-full py-10 px-6">
      {benefits.map((benefit) => {
        const Icon = benefit.icon;

        return (
          <div
            key={benefit.title}
            className="flex min-w-0 items-center gap-3"
          >
            <div
              className="
                        flex size-14 shrink-0
                        items-center justify-center
                        rounded-lg
                        border border-white/30
                        text-white/80
                    "
            >
              <Icon className="size-8" strokeWidth={1.3} />
            </div>

            <div className="flex flex-col gap-0.5">
              <span
                className="
                        text-[14px]
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
  );
}
