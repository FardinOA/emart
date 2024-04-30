import React from "react";
import CustomImage from "./uitils/customImage";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MapPin, Phone, Search, UserCircle } from "lucide-react";
import SidebarCart from "./cart/sidebarCart";
import MobileMenuBar from "./mobileMenuBar";

const Header = () => {
    return (
        <header className="shadow-sm sticky top-0 left-0 z-[99] bg-white ">
            <nav className=" hidden lg:block border-b ">
                <div className="text-xs text-gray-400 base-container py-4 flex items-center justify-between">
                    <div>
                        <p>
                            Discount up to 35% for the first purchase only this
                            month
                        </p>
                    </div>
                    <div className="flex items-center gap-4 lg:gap-6">
                        <p className="flex items-center gap-1">
                            <MapPin size={15} className="stroke-primary" />{" "}
                            <span>Find out branch</span>
                        </p>
                        <p className="flex items-center gap-1">
                            <Phone size={15} className="stroke-primary" />{" "}
                            <span>Download out app</span>
                        </p>
                    </div>
                </div>
            </nav>
            <nav className="base-container bg-primary/30 lg:bg-inherit py-2 lg:py-4 flex items-center  justify-between gap-2 lg:gap-6   ">
                <div className="lg:hidden overflow-hidden flex-1 rounded-full relative ">
                    {/* <UserCircle
                        size={30}
                        className="stroke-primary absolute right-[8px] top-1/2 -translate-y-1/2 "
                    /> */}
                    <MobileMenuBar />
                    <Input
                        placeholder="Search in E-mart"
                        className={"w-full  rounded-full pl-6  "}
                    />
                </div>
                <CustomImage
                    src={`/images/logo.png`}
                    alt="logo"
                    className=" hidden lg:block w-32 lg:w-40"
                />
                <div className=" hidden w-full lg:flex items-center">
                    <Input placeholder="Search..." className="rounded-r-none" />{" "}
                    <Button
                        size={"icon"}
                        aria-label="search"
                        className="rounded-l-none"
                    >
                        <Search />
                    </Button>
                </div>
                <div className="hidden lg:flex items-center gap-4">
                    <div className="flex items-center  ">
                        <UserCircle size={30} className="stroke-primary" />
                        <Button
                            aria-label="account"
                            variant="link"
                            className="flex flex-col px-1"
                        >
                            <span className="text-gray-400">Sign in</span>
                            <span className="font-semibold text-black ">
                                Account
                            </span>
                        </Button>
                    </div>

                    <SidebarCart />
                </div>
            </nav>
        </header>
    );
};

export default Header;
