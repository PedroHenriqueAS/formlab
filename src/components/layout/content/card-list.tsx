import { cards } from "@/utils/product";
import { Card } from "./card";

export function CardList() {
  return (
    <div className="grid grid-cols-[6fr_1fr] gap-4 mt-1 h-screen">
      <div className="grid grid-cols-4 gap-4 mt-1 h-100">
        {cards.map((card) => (
          <Card key={card.id} imageUrl={card.imageUrl} />
        ))}
      </div>
      
      <div className="h-screen">
        <div
          className="w-40 h-80 absolute inset-y-140 right-0 rounded-l-2xl bg-cover bg-no-repeat bg-position-[center_65%]"
          style={{
            backgroundImage: `url(/side-banner.png)`,
          }}
        ></div>
      </div>
    </div>
  );
}
