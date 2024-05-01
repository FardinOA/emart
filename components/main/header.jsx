import React from "react";
import CustomImage from "./uitils/customImage";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
    Bell,
    MapPin,
    Phone,
    Search,
    SearchIcon,
    UserCircle,
} from "lucide-react";
import SidebarCart from "./cart/sidebarCart";
import MobileMenuBar from "./mobileMenuBar";
import Link from "next/link";

const Header = () => {
    return (
        <header className="shadow-sm fixed w-full lg:sticky top-0 left-0 z-50   bg-white ">
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
            <nav className="base-container  lg:py-4 flex items-center  justify-between gap-2 lg:gap-6   ">
                <div className="lg:hidden overflow-hidden flex-1   py-2 flex justify-between items-center  ">
                    <div className="bg-primary/20 rounded-full w-fit flex gap-1 items-center pr-2 ">
                        <CustomImage
                            className={`rounded-full size-[35px] p-1 bg-primary `}
                            alt="user"
                            src={"/images/businessman.png"}
                        />
                        <p className="font-medium text-sm ">Hello&apos; User</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <Bell />
                        <SearchIcon />
                        <SidebarCart />
                    </div>
                </div>
                <Link href={`/`}>
                    {" "}
                    <CustomImage
                        src={`/images/logo.png`}
                        alt="logo"
                        className=" hidden lg:block w-32 lg:w-40"
                    />
                </Link>
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
