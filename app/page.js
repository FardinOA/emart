import FlashSale from "@/components/main/home/flashSale";
import Hero from "@/components/main/home/hero";
import PopularCategories from "@/components/main/home/popularCategories";
import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-dvh">
            <Hero />
            <PopularCategories />

            <FlashSale />
            <div className="h-screen"></div>
            {/* <div className="h-screen"></div>
            <div className="h-screen"></div> */}
        </main>
    );
}
