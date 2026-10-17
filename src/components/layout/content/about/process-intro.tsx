import { ArrowRight } from "lucide-react";

export function ProcessIntro() {
  return (
    <div
      className="
        flex
        h-full
        flex-col
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-[#111212]
        p-6
      "
    >
      <div>
        <span
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.18em]
            text-white/45
          "
        >
          Our Process
        </span>

        <h2
          className="
            mt-3
            max-w-[260px]
            font-display
            text-4xl
            leading-[1.05]
            text-white
          "
        >
          From idea
          <br />
          to <span className="text-orange-500">reality.</span>
        </h2>

        <p className="mt-4 max-w-77.5 text-sm leading-6 text-white/45">
          We combine quality materials, modern printing techniques and a love
          for design to bring your ideas to life.
        </p>
      </div>

      <button
        type="button"
        className="
          mt-7
          flex
          w-fit
          items-center
          gap-3
          rounded-full
          border
          border-white/25
          px-5
          py-3
          text-sm
          font-medium
          text-white
          transition
          hover:border-white/50
          hover:bg-white/4
        "
      >
        Start Creating

        <ArrowRight className="size-4" />
      </button>
    </div>
  );
}