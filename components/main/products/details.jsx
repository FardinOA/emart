import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Banknote, ShieldCheck, Truck } from "lucide-react";
import React from "react";
import CustomImage from "../uitils/customImage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BuyNow from "./BuyNow";
import BuyNowMobile from "./BuyNowMobile";
import { toast } from "@/components/ui/use-toast";
import AddToCard from "./AddToCard";
import Card from "../product/card";

const Details = () => {
    return (
        <div className=" py-20 space-y-10 lg:space-y-20  ">
            <div>
                <div className="lg:hidden fixed left-0 bottom-0 bg-primary  z-50 w-full flex justify-between gap-1 px-2 py-3 items-center ">
                    <div className="text-primary-foreground">
                        <p>Price:</p>
                        <p className="font-bold text-lg ">$8490.00</p>
                    </div>
                    <AddToCard
                        btnClassName={
                            "rounded-full bg-white text-primary hover:bg-gray-100 "
                        }
                    />
                    <div>
                        <BuyNowMobile />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 base-container ">
                    <div className="lg:col-span-4">
                        <div className="rounded-xl lg:p-6 lg:border space-y-8 relative ">
                            <Carousel>
                                <CarouselContent>
                                    {Array(5)
                                        .fill(0)
                                        .map((ele, ind) => (
                                            <CarouselItem
                                                key={`details-carousel-${ind}`}
                                            >
                                                <CustomImage
                                                    src={`/images/tv.jpg`}
                                                    className={`    `}
                                                />
                                            </CarouselItem>
                                        ))}
                                </CarouselContent>
                                <div className=" hidden lg:block ">
                                    <CarouselPrevious className={"left-0  "} />
                                    <CarouselNext className={"right-0 "} />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className="lg:col-span-4">
                        <div className=" py-2 space-y-8 ">
                            <div className="space-y-2">
                                <p className="   font-semibold text-xl lg:text-3xl  ">
                                    Makko SmartTV 75 inc Class 4K Ultra HD HDR
                                    Smart QLED TV
                                </p>
                                <p className=" text-sm    ">
                                    <span className="font-semibold">SKU</span> :
                                    MOX200608
                                </p>
                            </div>
                            <div className="py-6 border-t-[1px] space-y-4">
                                <div className="flex items-center gap-4">
                                    <p className="text-lg lg:text-2xl line-through t">
                                        $8900.00
                                    </p>
                                    <p className="text-lg lg:text-2xl font-semibold text-primary underline">
                                        $8490.00
                                    </p>
                                </div>
                                <div>
                                    <p className="t">
                                        Pellentesque habitant morbi tristique
                                        senectus et netus et malesuada fames ac
                                        turpis egestas Vestibulum tortor quam,
                                        feugiat vitae, ultricies eget, tempor.
                                    </p>
                                </div>
                                <ul className="list-disc pl-8  ">
                                    <li>Wireless, Bluetooth, USB, HDMI</li>
                                    <li>4k Ultra HD (2160px)</li>
                                    <li>Quantum Processor 4k</li>
                                </ul>
                                <div className=" hidden lg:flex flex-col gap-2 w-fit ">
                                    <div className="flex items-center gap-2">
                                        <AddToCard
                                            inputClassName={
                                                "w-24 outline-none rounded-lg focus-visible:ring-0 "
                                            }
                                            btnClassName={"rounded-lg"}
                                        />
                                    </div>
                                    <BuyNow />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="rounded-xl p-6 border space-y-8 ">
                            <div className="space-y-1">
                                <Truck className="stroke-primary text-center mx-auto " />
                                <p className=" font-medium lg:leading-6 text-center  ">
                                    International Shipment
                                </p>
                                <p className="text-sm  text-gray-400 text-center">
                                    Your orders are shipped seamlessly between
                                    countries
                                </p>
                            </div>
                            <div className="space-y-1">
                                <ShieldCheck className="stroke-primary text-center mx-auto " />
                                <p className=" font-medium lg:leading-6 text-center  ">
                                    30 Days Warranty
                                </p>
                                <p className="text-sm  text-gray-400 text-center">
                                    You have the right to return your orders
                                    within 30 days.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <Banknote className="stroke-primary text-center mx-auto " />
                                <p className=" font-medium lg:leading-6 text-center  ">
                                    Secure Payment
                                </p>
                                <p className="text-sm  text-gray-400 text-center">
                                    Your payments are secure with our private
                                    security network.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="flex items-center gap-1">
                    <p className=" font-bold text-xl lg:text-2xl 2xl:text-3xl text-nowrap ">
                        Related Products
                    </p>
                    <p className=" bg-gray-200 h-[1px] w-full "></p>
                </div>
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
                                    className={
                                        "basis-[70%] md:basis-[40%] lg:basis-[25%] 2xl:basis-[20%] "
                                    }
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

export default Details;
