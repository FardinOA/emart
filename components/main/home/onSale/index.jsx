import React from "react";
import Card from "../../product/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

const OnSale = () => {
    return (
        <div className=" base-container space-y-4 py-10 lg:py-20 ">
            <div className="flex items-center gap-1">
                <p className=" font-bold text-xl lg:text-2xl 2xl:text-3xl text-nowrap ">
                    Product on sale!
                </p>
                <p className=" bg-gray-200 h-[1px] w-full "></p>
            </div>

            <div className="hidden lg:grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-2">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="lg:hidden">
                <Carousel
                    opts={{
                        align: "start",
                        dragFree: true,
                    }}
                >
                    <CarouselContent className={"py-2 px-2"}>
                        {Array(10)
                            .fill(0)
                            .map((ele, ind) => (
                                <CarouselItem
                                    className={"basis-[70%]"}
                                    key={``}
                                >
                                    <Card />
                                </CarouselItem>
                            ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
};

export default OnSale;
