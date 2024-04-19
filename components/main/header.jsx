import React from "react";
import CustomImage from "./uitils/customImage";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MapPin, Phone, Search, UserCircle } from "lucide-react";
import SidebarCart from "./cart/sidebarCart";

const Header = () => {
    return (
        <header className="shadow-sm ">
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
            <nav className="base-container py-4 flex items-center justify-between gap-2 lg:gap-6   ">
                <CustomImage
                    src={`/images/logo.png`}
                    alt="logo"
                    className=" w-32 lg:w-40"
                />
                <div className=" hidden w-full lg:flex items-center">
                    <Input placeholder="Search..." className="rounded-r-none" />{" "}
                    <Button aria-label="search" className="rounded-l-none">
                        <Search />
                    </Button>
                </div>
                <div className="flex items-center gap-4">
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
