import { Plus } from "lucide-react";

interface CardProps {
  imageUrl: string;
}

export function Card({ imageUrl }: CardProps) {
  return (
    <div className="w-53 h-53 bg-blue-400 rounded-2xl align-center">
      <div
        className="h-[65%]
                   w-full
                   overflow-hidden
                   rounded-t-2xl
                 bg-[#181818]
                   bg-[length:100%_auto]
                   bg-[position:center_15%]
                   bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
      </div>
      <div className="w-full rounded-b-2xl h-[35%] bg-[#111212] pl-2 pr-2 pt-1">
        <div className="flex flex-row justify-between">
          <p className="text-[11px] font-semibold font-bold">Big camisa</p>
          <span className="text-[11px] font-bold text-[12px]"> $45</span>
        </div>
        <div>
          <p className="text-[10px] font-semibold text-gray-500">
            Descrição do produto
          </p>
        </div>
        <div className="flex flex-row justify-between items-center mt-2">
          <div className="flex flex-row gap-1 mt-2">
            <div className=" rounded-md w-3 h-3 bg-amber-200" />
            <div className=" rounded-md w-3 h-3 bg-black" />
            <div className="rounded-md w-3 h-3 bg-gray-300" />
            <p className="text-[10px] font-bold">+3</p>
          </div>
          <button className=" text-white py-1 rounded-lg w-5 h-5 items-center justify-center flex p-1 border border-gray-300">
            <Plus />
          </button>
        </div>
      </div>
    </div>
  );
}
