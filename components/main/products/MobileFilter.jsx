import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import FilterCard from "./FilterCard";

const MobileFilter = () => {
    const categoriesFilter = [
        { name: "Beverage", value: 8 },
        { name: "Desserts", value: 9 },
        { name: "Drinks & Juice", value: 6 },
        { name: "Fish & Meats", value: 7 },
        { name: "Fresh Fruits", value: 8 },
        { name: "Pets & Animals", value: 4 },
        { name: "Toys", value: 4 },
        { name: "Vegetables", value: 6 },
    ];
    const colorFilter = [
        { name: "Black", value: 1 },
        { name: "Green", value: 3 },
        { name: "Grey", value: 1 },
    ];
    const sizeFilter = [
        { name: "M", value: 12 },
        { name: "S", value: 3 },
        { name: "L", value: 1 },
        { name: "XL", value: 1 },
    ];
    const weightFilter = [
        { name: "100gm", value: 12 },
        { name: "1kg", value: 3 },
        { name: "375ml", value: 1 },
        { name: "500gm", value: 1 },
    ];
    const saleFilter = [
        { name: "On Sale", value: 12 },
        { name: "Regular", value: 3 },
    ];
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon">
                    <SlidersHorizontal />
                </Button>
            </SheetTrigger>
            <SheetContent className={"overflow-y-auto  no-scrollbar"}>
                <SheetHeader>
                    <SheetTitle className={"text-start"}>
                        Filter and get you desire products
                    </SheetTitle>
                </SheetHeader>

                <div className="space-y-8 mt-8 relative lg:sticky lg:top-40  ">
                    <FilterCard title={"Categories"} data={categoriesFilter} />
                    <FilterCard title={"Color"} data={colorFilter} />
                    <FilterCard title={"Size"} data={sizeFilter} />
                    <FilterCard title={"Weight"} data={weightFilter} />
                    <FilterCard title={"Sale"} data={saleFilter} />
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileFilter;
