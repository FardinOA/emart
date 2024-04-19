"use client";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
const HeroCarousel = () => {
    const banner = [
        {
            tag: "Up to 30% off",
            title: "Get the best deal an be happy!",
            url: "#",
            image: "/images/banner-1.jpg",
        },
        {
            tag: "Up to 30% off",
            title: "Get the best deal an be happy!",
            url: "#",
            image: "/images/banner-2.jpg",
        },
        {
            tag: "Up to 30% off",
            title: "Get the best deal an be happy!",
            url: "#",
            image: "/images/banner-3.jpg",
        },
    ];
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 5000,
                }),
            ]}
            className="h-full w-full"
        >
            <CarouselContent className="h-full rounded-xl ml-0   ">
                {banner?.map((ele, ind) => (
                    <CarouselItem
                        style={{
                            backgroundImage: `url("${ele.image}")`,
                        }}
                        className={cn(
                            `  h-[180px] lg:h-[380px] w-full rounded-xl overflew-hidden bg-cover bg-no-repeat object-cover `
                        )}
                        key={`hero-banner-${ind}`}
                    >
                        <div className="flex items-center h-full    ">
                            <div className="lg:p-6 lg:py-8 space-y-2 ">
                                <p className="lg:text-lg font-semibold text-primary">
                                    {ele.tag}
                                </p>
                                <p className="lg:text-4xl font-bold text-gray-700">
                                    {ele.title}
                                </p>
                                <Button
                                    aria-label={`${ele.tag} shop now`}
                                    asChild={true}
                                    size="sm"
                                >
                                    <Link
                                        aria-label={"shop now"}
                                        href={ele.url}
                                    >
                                        Shop Now
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
        </Carousel>
    );
};

export default HeroCarousel;
