"use client";
import { cn } from "@/lib/utils";
import { Heart, Home, ShoppingCart, Store } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BottomNav = () => {
    const pathName = usePathname();
    return (
        <div className=" bg-primary  p-2 px-4 w-full lg:hidden sticky left-0 bottom-0 flex justify-between items-center  ">
            <Link
                href={"/"}
                className={cn(
                    "  size-[50px] flex items-center justify-center rounded-full  ",
                    pathName == "/" && "bg-primary-foreground"
                )}
            >
                <Home
                    className={cn(
                        "text-primary-foreground",
                        pathName == "/" && "text-primary"
                    )}
                />
            </Link>
            <Link
                href={`/products`}
                className={cn(
                    "  size-[50px] flex items-center justify-center rounded-full  ",
                    pathName.includes("/products") && "bg-primary-foreground"
                )}
            >
                <Store
                    className={cn(
                        "text-primary-foreground",
                        pathName.includes("/products") && "text-primary"
                    )}
                />
            </Link>
            <div
                className={cn(
                    "  size-[50px] flex items-center justify-center rounded-full  ",
                    pathName == "/wishlist" && "bg-primary-foreground"
                )}
            >
                <Heart
                    className={cn(
                        "text-primary-foreground",
                        pathName == "/wishlist" && "text-primary"
                    )}
                />
            </div>
            <div
                className={cn(
                    "  size-[50px] flex items-center justify-center rounded-full  ",
                    pathName == "/cart" && "bg-primary-foreground"
                )}
            >
                <ShoppingCart
                    className={cn(
                        "text-primary-foreground",
                        pathName == "/cart" && "text-primary"
                    )}
                />
            </div>
        </div>
    );
};

export default BottomNav;
