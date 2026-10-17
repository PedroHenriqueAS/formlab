import {
  Package,
  Shirt,
  SquarePen,
  Truck,
  type LucideIcon,
} from "lucide-react";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Create",
    description: "Bring your idea, design or concept.",
    icon: SquarePen,
  },
  {
    number: "02",
    title: "Preview",
    description: "See how it looks before you order.",
    icon: Shirt,
  },
  {
    number: "03",
    title: "We Print",
    description: "High quality materials and durable prints.",
    icon: Truck,
  },
  {
    number: "04",
    title: "You Wear",
    description: "Your idea, out in the world.",
    icon: Package,
  },
];

export function ProcessSteps() {
  return (
    <div
      className="
        grid
        h-full
        grid-cols-1
        gap-8
        rounded-2xl
        border
        border-white/10
        bg-[#111212]
        p-6

        md:grid-cols-2
        xl:grid-cols-4
        xl:gap-6
      "
    >
      {steps.map((step) => {
        const Icon = step.icon;

        return (
          <div
            key={step.number}
            className="flex min-w-0 flex-col"
          >
            {/* NUMBER + LINE */}
            <div className="flex items-center gap-4">
              <span
                className="
                  shrink-0
                  text-sm
                  font-semibold
                  tracking-wider
                  text-white/45
                "
              >
                {step.number}
              </span>

              <div
                className="
                  h-px
                  flex-1
                  bg-gradient-to-r
                  from-white/10
                  via-orange-500/40
                  to-orange-500/90
                "
              />
            </div>

            {/* ICON */}
            <div
              className="
                mt-7
                flex
                size-14
                items-center
                justify-center
                rounded-xl
                border
                border-white/15
                text-white
              "
            >
              <Icon
                className="size-6"
                strokeWidth={1.5}
              />
            </div>

            {/* TEXT */}
            <h3 className="mt-5 text-base font-semibold text-white">
              {step.title}
            </h3>

            <p className="mt-2 max-w-[180px] text-sm leading-5 text-white/45">
              {step.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}