"use client";
import { cn } from "@/lib/utils";
import {
    Heart,
    Home,
    LayoutGrid,
    ShoppingCart,
    Store,
    User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
const BottomNav = () => {
    const pathName = usePathname();
    if (pathName.includes("/products/")) return null;
    return (
        <div className=" bg-primary  p-2 px-4 w-full lg:hidden sticky left-0 bottom-0 flex justify-between items-center  ">
            <Link
                href={`/`}
                className={cn("relative p-3 rounded-full block")}
                style={{
                    transformStyle: "preserve-3d",
                }}
            >
                {pathName === "/" && (
                    <motion.div
                        layoutId="clickedbutton"
                        transition={{
                            type: "spring",
                            bounce: 0.3,
                            duration: 0.6,
                        }}
                        className={cn(
                            "absolute inset-0 bg-gray-200  rounded-full "
                        )}
                    />
                )}

                <span
                    className={cn(
                        "relative block text-primary-foreground ",
                        pathName === "/" && "text-primary"
                    )}
                >
                    <Home />
                </span>
            </Link>
            <Link
                href={`/products`}
                className={cn("relative p-3 rounded-full block")}
                style={{
                    transformStyle: "preserve-3d",
                }}
            >
                {pathName.includes("/products") && (
                    <motion.div
                        layoutId="clickedbutton"
                        transition={{
                            type: "spring",
                            bounce: 0.3,
                            duration: 0.6,
                        }}
                        className={cn(
                            "absolute inset-0 bg-gray-200  rounded-full "
                        )}
                    />
                )}

                <span
                    className={cn(
                        "relative block text-primary-foreground ",
                        pathName.includes("/products") && "text-primary"
                    )}
                >
                    <Store />
                </span>
            </Link>
            <Link
                href={`/categories`}
                className={cn("relative p-3 rounded-full block")}
                style={{
                    transformStyle: "preserve-3d",
                }}
            >
                {pathName === "/categories" && (
                    <motion.div
                        layoutId="clickedbutton"
                        transition={{
                            type: "spring",
                            bounce: 0.3,
                            duration: 0.6,
                        }}
                        className={cn(
                            "absolute inset-0 bg-gray-200  rounded-full "
                        )}
                    />
                )}

                <span
                    className={cn(
                        "relative block text-primary-foreground ",
                        pathName === "/categories" && "text-primary"
                    )}
                >
                    <LayoutGrid />
                </span>
            </Link>
            <Link
                href={`/cart`}
                className={cn("relative p-3 rounded-full block")}
                style={{
                    transformStyle: "preserve-3d",
                }}
            >
                {pathName === "/cart" && (
                    <motion.div
                        layoutId="clickedbutton"
                        transition={{
                            type: "spring",
                            bounce: 0.3,
                            duration: 0.6,
                        }}
                        className={cn(
                            "absolute inset-0 bg-gray-200  rounded-full "
                        )}
                    />
                )}

                <span
                    className={cn(
                        "relative block text-primary-foreground ",
                        pathName === "/cart" && "text-primary"
                    )}
                >
                    <ShoppingCart />
                </span>
            </Link>
            <Link
                href={`/login`}
                className={cn("relative p-3 rounded-full block")}
                style={{
                    transformStyle: "preserve-3d",
                }}
            >
                {pathName === "/login" && (
                    <motion.div
                        layoutId="clickedbutton"
                        transition={{
                            type: "spring",
                            bounce: 0.3,
                            duration: 0.6,
                        }}
                        className={cn(
                            "absolute inset-0 bg-gray-200  rounded-full "
                        )}
                    />
                )}

                <span
                    className={cn(
                        "relative block text-primary-foreground ",
                        pathName === "/login" && "text-primary"
                    )}
                >
                    <User />
                </span>
            </Link>
        </div>
    );
};

export default BottomNav;
