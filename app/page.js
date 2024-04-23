import FeaturedSection from "@/components/main/home/FeaturedSection";
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
            <FeaturedSection />
            <div className="h-screen"></div>
            {/* <div className="h-screen"></div>
            <div className="h-screen"></div> */}
        </main>
    );
}
