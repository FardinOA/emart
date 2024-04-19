import { Button } from "@/components/ui/button";
import React from "react";
import CustomImage from "../uitils/customImage";
import Link from "next/link";
import { Eye } from "lucide-react";
import CustomTooltip from "../uitils/customTooltip";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const Card = () => {
    return (
        <div className="hover:bg-primary transition-all duration-300 p-[1px] rounded-lg overflow-hidden group relative  ">
            <div className="   bg-white rounded-[4px] p-4   ">
                <QuickView />
                <Link aria-label={"link"} href={"#"} className="">
                    <p className="bg-yellow-400  size-10 rounded-full absolute top-2 right-2 text-xs flex items-center justify-center ">
                        <span>Sale!</span>
                    </p>
                    <CustomImage
                        className={"lg:h-[187px]"}
                        src={`/images/phone.jpg`}
                        alt={"phone"}
                    />
                    <h2 className=" my-2 ">Mizuna 8 Pro Android Smartphone</h2>
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
                    <Button aria-label="Add to cart" size={"sm"} className={""}>
                        Add to cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

const QuickView = () => {
    return (
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
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default Card;
