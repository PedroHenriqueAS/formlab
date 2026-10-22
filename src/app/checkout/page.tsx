import { CheckoutForm } from "./checkout-form";
import { ProductCheckoutList } from "./product-checkout-list";

export default function CheckoutPage() {
  return (
    <main
      style={{ backgroundImage: "url(/checkout-bg.png)" }}
      className="w-full bg-cover bg-top bg-no-repeat"
    >
      <div className="mx-auto grid w-full max-w-[1440px] min-w-0 grid-cols-1 items-start gap-6 px-4 py-6 md:px-6 md:py-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] xl:gap-8 xl:px-8 xl:py-10">
        <CheckoutForm />
        <ProductCheckoutList />
      </div>
    </main>
  );
}
