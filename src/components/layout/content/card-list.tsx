import { cards } from "@/utils/product";
import { Card } from "./card";

export function CardList() {
  return (
    <div className="mt-4 grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1fr)_8rem] xl:gap-4">
      <div className="grid min-w-0 grid-cols-1 content-start gap-3 min-[360px]:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(max(12rem,calc((100%_-_2rem)/3)),1fr))] md:gap-4 xl:grid-cols-4">
        {cards.map((card) => (
          <Card key={card.id} imageUrl={card.imageUrl} slug={card.slug} />
        ))}
      </div>

      <div
        role="img"
        aria-label="FormLab promotional artwork"
        className="mx-auto aspect-[1/2] w-full max-w-64 self-start rounded-2xl bg-cover bg-center bg-no-repeat md:max-w-72 xl:mt-20 xl:max-w-none xl:rounded-r-none"
        style={{
          backgroundImage: `url(/side-banner.png)`,
        }}
      />
    </div>
  );
}
