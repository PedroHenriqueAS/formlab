import { ArrowRight, Shirt } from "lucide-react";
import { Button } from "../ui/button";

export function HeroSection() {
    return (
        <section className="w-full h-96 bg-[url(/hero-background.png)] px-8 py-8 rounded-lg grid grid-cols-2 bg-cover bg-[position:68%_center] bg-no-repeat">
            <div>
                <span className="w-18 leading-tight uppercase text-xs placeholder:text-white/35 text-white tracking-widest">Custom shirts for a brighter you</span>
                <h2 className="text-2xl font-bold text-white">Make it Yours.</h2>
                <h3 className="text-2xl font-bold text-white">Wear what matters</h3>
                <p className="text-white w-2/3 mb-8">Custom printed shirts for self expression, your team, your brand - or just because</p>
                <div className="flex gap-4">
                    <Button variant="cta" size="hero">
                        Start Customizing
                    <ArrowRight />
                    </Button>

                    <Button variant="ctaOutline" size="hero">
                        Explore Catalog
                    </Button>
                </div>
                <div>
                    <div>
                        <Shirt />
                    </div>
                </div>
            </div>
            <div>teste2</div>
        </section>
    )
}