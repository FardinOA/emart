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
import BuyNowFrom from "./BuyNowFrom";

const BuyNowMobile = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className={"bg-white hover:bg-gray-100 text-primary "}>
                    Buy Now
                </Button>
            </SheetTrigger>
            <SheetContent className={"  "} side="bottom">
                <SheetHeader className={"text-start"}>
                    <SheetTitle>Easy & Quick</SheetTitle>
                </SheetHeader>
                <BuyNowFrom />
            </SheetContent>
        </Sheet>
    );
};

export default BuyNowMobile;
