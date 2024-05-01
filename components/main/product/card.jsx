import { Button } from "@/components/ui/button";
import React from "react";
import CustomImage from "../uitils/customImage";
import Link from "next/link";
import { Eye, Minus, Plus, ShoppingCart } from "lucide-react";
import CustomTooltip from "../uitils/customTooltip";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import ProductCarousel from "./productCarousel";
import { Input } from "@/components/ui/input";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

const Card = () => {
    return (
        // <div className="hover:bg-primary transition-all duration-300 p-[1px] rounded-lg overflow-hidden group relative  ">
        <div className="   bg-white rounded-2xl p-4  relative transition-all duration-500 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] lg:shadow-none lg:hover:shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]   ">
            <QuickView />
            <Link
                aria-label={"link"}
                href={"/products/samsung-hdr-smart-qled=tv"}
                className="group"
            >
                <p className="bg-yellow-400  size-10 rounded-full absolute top-2 right-2 text-xs flex items-center justify-center ">
                    <span>Sale!</span>
                </p>
                <CustomImage
                    className={"lg:h-[187px]"}
                    src={`/images/phone.jpg`}
                    alt={"phone"}
                />
                <h2 className=" my-2 group-hover:text-primary transition-all duration-300 ">
                    Mizuna 8 Pro Android Smartphone
                </h2>
                <span className=" flex items-center gap-2 ">
                    <del aria-hidden="true">
                        <span className=" text-gray-400">
                            <bdi>
                                <span className=" ">$</span>
                                999.00
                            </bdi>
                        </span>
                    </del>{" "}
                    <ins>
                        <span className=" text-primary ">
                            <bdi>
                                <span className=" ">$</span>
                                829.00
                            </bdi>
                        </span>
                    </ins>
                </span>
            </Link>
            <div className=" mt-5">
                <Button
                    aria-label="Add to cart"
                    size={"sm"}
                    className={"w-full"}
                >
                    Add to cart
                </Button>
            </div>
        </div>
        // </div>
    );
};

const QuickView = () => {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        size={"icon"}
                        aria-label="quick view"
                        className={
                            " size-6 p-1 absolute top-14 right-4   transition-all duration-500 "
                        }
                    >
                        <Eye />
                    </Button>
                </DialogTrigger>
                <DialogContent className="rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-4 w-[90%] lg:!max-w-[40rem] ">
                    <div>
                        <ProductCarousel />
                    </div>
                    <div>
                        <DialogHeader>
                            <DialogTitle>Red Radish 1 pack</DialogTitle>
                            <DialogDescription className="text-primary ">
                                $20,00
                            </DialogDescription>
                            <DialogDescription>
                                This action cannot be undone. This will
                                permanently delete your account and remove your
                                data from our servers.
                            </DialogDescription>
                            <div className="pt-4 flex items-center gap-4 ">
                                <div className="flex items-center">
                                    <Button
                                        variant="icon"
                                        className={
                                            "bg-primary text-primary-foreground rounded-r-none"
                                        }
                                        size={"sm"}
                                    >
                                        <Minus size={15} />
                                    </Button>
                                    <Input
                                        placeholder="1"
                                        className="text-center h-9  w-full rounded-none border-primary ring-0 focus:!outline-none focus:!ring-offset-0   focus-visible:!ring-0 "
                                        value={1}
                                    />
                                    <Button
                                        variant="icon"
                                        className={
                                            "bg-primary text-primary-foreground rounded-l-none"
                                        }
                                        size={"sm"}
                                    >
                                        <Plus size={15} />
                                    </Button>
                                </div>
                                <Button size={"sm"} className="gap-2">
                                    <ShoppingCart /> Add To Cart
                                </Button>
                            </div>
                        </DialogHeader>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Card;
