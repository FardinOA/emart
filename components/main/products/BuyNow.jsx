import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import BuyNowFrom from "./BuyNowFrom";

const BuyNow = () => {
    return (
        <Dialog>
            <DialogTrigger className=" h-10 px-8 border rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-500 ">
                {/* <Button variant="outline" className={"rounded-lg"}> */}
                Buy Now
                {/* </Button> */}
            </DialogTrigger>
            <DialogContent className={"z-[9999]  "}>
                <DialogHeader>
                    <DialogTitle>Easy & Quick</DialogTitle>
                    <BuyNowFrom />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default BuyNow;
