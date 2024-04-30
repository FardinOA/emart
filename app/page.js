import FeaturedSection from "@/components/main/home/FeaturedSection";
import FlashSale from "@/components/main/home/flashSale";
import Hero from "@/components/main/home/hero";
import NewArrival from "@/components/main/home/newArrival";
import OnSale from "@/components/main/home/onSale";
import PopularCategories from "@/components/main/home/popularCategories";
import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-dvh">
            <Hero />
            <PopularCategories />

            <FlashSale />
            <FeaturedSection />
            <NewArrival />
            <OnSale />
            {/* <div className="h-screen"></div> */}
            {/* <div className="h-screen"></div>
            <div className="h-screen"></div> */}
        </main>
    );
}
