import Productinfo from "./product-info";

export default function ProductPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] h-155 grid grid-cols-[6fr_4fr] gap-2 px-8">
      <div className="bg-gray-500 grid grid-cols-[1fr_4fr]">
        <div className="flex flex-col gap-3 pl-2">
            <div className="h-30 w-30 bg-amber-800 rounded-lg"></div>
            <div className="h-30 w-30 bg-amber-800 rounded-lg"></div>
            <div className="h-30 w-30 bg-amber-800 rounded-lg"></div>
            <div className="h-30 w-30 bg-amber-800 rounded-lg"></div>
        </div>
        <div className="h-155 w-155 bg-blue-700 rounded-2xl"></div>
      </div>
      <Productinfo />
    </main>
  );
}