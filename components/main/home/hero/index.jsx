import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
    BadgePercent,
    Camera,
    Computer,
    Gamepad,
    Headset,
    Phone,
    Tv,
    Watch,
} from "lucide-react";
import React from "react";
import HeroCarousel from "./heroCarousel";

const Hero = () => {
    const categories = [
        {
            icon: <Phone />,
            title: "Cell Phones",
        },
        {
            icon: <Computer />,
            title: "Computer & Laptop",
        },
        {
            icon: <Tv />,
            title: "Television & Video",
        },
        {
            icon: <Gamepad />,
            title: "Game & Console",
        },
        {
            icon: <Watch />,
            title: "Smartwatches",
        },
        {
            icon: <Camera />,
            title: "Camera & Photo",
        },
        {
            icon: <Headset />,
            title: "Headset",
        },
        {
            icon: <BadgePercent />,
            title: "Discount Product",
        },
    ];
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 base-container py-10 ">
            <div className="lg:col-span-3 hidden lg:block bg-white border rounded-xl p-4 ">
                <p className="text-center font-semibold text-gray-600 w-full">
                    Categories
                </p>
                <div className=" ">
                    {categories?.map((ele, ind) => (
                        <Button
                            aria-label={ele.title}
                            className={cn(
                                "items-center gap-3 w-full justify-start border-b text-gray-400 ",
                                ind == categories.length - 1 && "border-b-0"
                            )}
                            variant="link"
                            key={`categories-${ind}`}
                        >
                            {React.cloneElement(ele?.icon, {
                                size: 20,
                                className: "stroke-primary",
                            })}

                            <span>{ele?.title}</span>
                        </Button>
                    ))}
                </div>
            </div>
            <div className="lg:col-span-9 h-full">
                <HeroCarousel />
            </div>
        </div>
    );
};

export default Hero;
