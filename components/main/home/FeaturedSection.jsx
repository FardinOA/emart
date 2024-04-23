import { Button } from "@/components/ui/button";
import React from "react";
import CustomImage from "../uitils/customImage";

const FeaturedSection = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 base-container py-20 ">
            <div className=" h-[200px]  border-[1px] border-gray-200  relative p-8 py-6 group rounded-xl overflow-hidden shadow-[0px_0px_50px_0px_rgba(0,0,0,0.1)]  ">
                <div className="space-y-4 w-[50%] ">
                    <p className="font-semibold text-lg lg:text-xl ">
                        Apple Book
                    </p>
                    <p className="text-gray-400 ">
                        Don&apos;t miss the last opportunity
                    </p>
                    <Button variant="outline" className={`rounded-lg`}>
                        Learn more
                    </Button>
                </div>
                <CustomImage
                    src={`/images/macbook.png`}
                    className={`h-[70%] absolute top-1/2 -translate-y-1/2 right-[-12rem] group-hover:right-[-7rem] object-contain    transition-all duration-700 `}
                />
            </div>
            <div className=" h-[200px]  border-[1px] border-gray-200  relative p-8 py-6 group rounded-xl overflow-hidden shadow-[0px_0px_50px_0px_rgba(0,0,0,0.1)]  ">
                <div className="space-y-4 w-[50%] ">
                    <p className="font-semibold text-lg lg:text-xl ">
                        Smartwatches
                    </p>
                    <p className="text-gray-400 ">
                        Don&apos;t miss the last opportunity
                    </p>
                    <Button variant="outline" className={`rounded-lg`}>
                        Learn more
                    </Button>
                </div>
                <CustomImage
                    src={`/images/smartwatch.webp`}
                    className={`h-[70%] absolute top-1/2 -translate-y-1/2 right-[-12rem] group-hover:right-[-7rem] object-contain    transition-all duration-700 `}
                />
            </div>
            <div className=" h-[200px]  border-[1px] border-gray-200  relative p-8 py-6 group rounded-xl overflow-hidden shadow-[0px_0px_50px_0px_rgba(0,0,0,0.1)]  ">
                <div className="space-y-4 w-[50%] ">
                    <p className="font-semibold text-lg lg:text-xl ">SmartTv</p>
                    <p className="text-gray-400 ">
                        Don&apos;t miss the last opportunity
                    </p>
                    <Button variant="outline" className={`rounded-lg`}>
                        Learn more
                    </Button>
                </div>
                <CustomImage
                    src={`/images/smarttv.png`}
                    className={`h-[70%] absolute top-1/2 -translate-y-1/2 right-[-12rem] group-hover:right-[-7rem] object-contain    transition-all duration-700 `}
                />
            </div>
        </div>
    );
};

export default FeaturedSection;
