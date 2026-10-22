import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Advantages } from "./advantages";
import { ProcessIntro } from "./process-intro";
import { ProcessSteps } from "./process-steps";

export function AboutSection() {
  return (
    <section className="mt-6">
      <div className="grid grid-cols-[7fr_3fr] gap-4 h-80">
        <div className="grid grid-cols-[3.5fr_7fr] gap-4">
          <div>
            <span className="font-bold text-orange-500">About</span>
            <h2 className="text-5xl font-bold tracking-wide">
              more than <br /> shirts.
            </h2>
            <p className="text-sm text-white/45">
              FormLab was created to give people a way to wear what they think,
              feel and create. We believe clothing can be more than just fabric.
              <span className="text-orange-500">
                {" "}
                — it can carry ideas, stories and a piece of who you are.
              </span>
            </p>
            <Button variant="ctaOutline" className="mt-3 p-4">
              Our history <ChevronDown />
            </Button>
          </div>
          <div
            style={{
              backgroundImage: `url(${"/about-1.png"})`,
            }}
            className="h-[300px] w-full overflow-hidden rounded-2xl bg-cover bg-no-repeat bg-[position:center_55%]"
          >
            {" "}
            img
          </div>
        </div>
        <div>
          <Advantages />
        </div>
      </div>
      <div className="grid grid-cols-[1fr_2fr_1fr] gap-4 h-80">
        <ProcessIntro />
        <ProcessSteps />
        <div
        style={{
              backgroundImage: `url(${"/about-2.png"})`,
            }} className="overflow-hidden rounded-2xl bg-cover bg-no-repeat bg-[position:center_20%]"
        >25%</div>
      </div>
    </section>
  );
}
