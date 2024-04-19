import {
    Box,
    Diamond,
    Facebook,
    Gem,
    Headset,
    Instagram,
    Lock,
    ShieldCheck,
    Verified,
    X,
    Youtube,
} from "lucide-react";
import React from "react";
import CustomImage from "./uitils/customImage";
import { Button } from "../ui/button";
import Link from "next/link";
import { Input } from "../ui/input";

const Footer = () => {
    return (
        <footer className="pb-56">
            <div className="bg-primary text-white p-4 lg:p-0">
                <div className="   base-container py-4 divide-y-2  lg:divide-y-0 lg:divide-x-2 grid grid-cols-1 lg:grid-cols-4  ">
                    <div className="flex gap-4 pb-4 lg:pb-0 ">
                        <Gem className="stroke-secondary size-12 " />
                        <div>
                            <p className="text-lg font-semibold">
                                Original Product
                            </p>
                            <p>
                                100% original product that covered warranty by
                                the vendor
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4  py-4 lg:py-0 lg:px-4 ">
                        <ShieldCheck className="stroke-secondary size-12 " />
                        <div>
                            <p className="text-lg font-semibold">
                                30 Days Warranty
                            </p>
                            <p>
                                You have the right to return your orders within
                                30 days
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 py-4 lg:py-0 lg:px-4">
                        <Box className="stroke-secondary size-12 " />
                        <div>
                            <p className="text-lg font-semibold">
                                Original Product
                            </p>
                            <p>
                                Your orders are shipped seamlessly between
                                countries
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 py-4 lg:py-0 lg:px-4">
                        <Lock className="stroke-secondary size-12 " />
                        <div>
                            <p className="text-lg font-semibold">100% Secure</p>
                            <p>
                                Your payments are secure with out private
                                security network.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" base-container py-12 grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-10">
                <div className="lg:col-span-2 h-full">
                    <CustomImage
                        src={`/images/logo.png`}
                        alt={`logo`}
                        className={`w-40 lg:w-56 `}
                    />

                    <p className="mt-6 text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Officiis animi sequi maiores! Laborum repellat
                        architecto assumenda placeat nulla ipsam similique!
                    </p>

                    <div className="flex gap-4 mt-6 ">
                        <Headset size={40} className="stroke-primary" />
                        <div>
                            <p className="text-gray-400">Need help? Call us!</p>
                            <p className="lg:text-xl font-semibold ">
                                800-7000-234
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                        <Link
                            aria-label={"facebook"}
                            href={`#`}
                            className={
                                "group border p-1 rounded-lg hover:bg-primary transition-all duration-500 "
                            }
                        >
                            <Facebook className="fill-primary stroke-primary group-hover:stroke-white group-hover:fill-white transition-all duration-500" />
                        </Link>
                        <Link
                            aria-label={"instragram"}
                            href={`#`}
                            className={
                                "group border p-1 rounded-lg hover:bg-primary transition-all duration-500 "
                            }
                        >
                            <Instagram className="  stroke-primary group-hover:stroke-white   transition-all duration-500" />
                        </Link>
                        <Link
                            aria-label={"twitter"}
                            href={`#`}
                            className={
                                "group border p-1 rounded-lg hover:bg-primary transition-all duration-500 "
                            }
                        >
                            <X className="fill-primary stroke-primary group-hover:stroke-white group-hover:fill-white transition-all duration-500" />
                        </Link>
                        <Link
                            aria-label={"youtube"}
                            href={`#`}
                            className={
                                "group border p-1 rounded-lg hover:bg-primary transition-all duration-500 "
                            }
                        >
                            <Youtube className=" stroke-primary group-hover:stroke-white   transition-all duration-500" />
                        </Link>
                    </div>
                </div>

                <div>
                    <h6 className="font-semibold text-lg mb-4 ">
                        Customer Service
                    </h6>
                    {[
                        "Help Center",
                        "Track your order",
                        "My Account",
                        "Returns & Replacements",
                        "Contact us",
                    ]?.map((ele, ind) => (
                        <Link
                            aria-label={"facebook"}
                            href={`#`}
                            key={`customer-service-${ind}`}
                            className="hover:text-primary transition-all duration-500 text-gray-400 block py-1"
                        >
                            {ele}
                        </Link>
                    ))}
                </div>

                <div>
                    <h6 className="font-semibold text-lg mb-4 ">
                        Get to Know Us
                    </h6>
                    {[
                        "About us",
                        "Careers",
                        "Leadership",
                        "News & Article",
                        "Legal Notice",
                    ]?.map((ele, ind) => (
                        <Link
                            aria-label={"facebook"}
                            href={`#`}
                            key={`customer-service-${ind}`}
                            className="hover:text-primary transition-all duration-500 text-gray-400 block py-1 "
                        >
                            {ele}
                        </Link>
                    ))}
                </div>
                <div>
                    <h6 className="font-semibold text-lg mb-4 ">
                        Partnerships
                    </h6>
                    {[
                        "Affiliate Program",
                        "Advertise with Us",
                        "Self-Publish with Us",
                    ]?.map((ele, ind) => (
                        <Link
                            aria-label={"facebook"}
                            href={`#`}
                            key={`customer-service-${ind}`}
                            className="hover:text-primary transition-all duration-500 text-gray-400 block py-1 "
                        >
                            {ele}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="bg-[#F7F7F7] rounded-xl border p-4 lg:p-8 flex flex-col lg:flex-row gap-4 justify-between items-center base-container ">
                <div className="space-y-3 text-center">
                    <p className="font-bold lg:text-4xl ">Newsletter</p>
                    <p className="font-semibold text-sm lg:text-base">
                        Signup our newsletter to get update information, news,
                        insight or promotions.
                    </p>
                </div>

                <div className="space-y-2   ">
                    <Input placeholder="Email" className="w-full" />
                    <Button aria-label="Subscribe" className={"w-full"}>
                        Subscribe
                    </Button>
                </div>
            </div>
            <div className="base-container py-10 flex flex-col lg:flex-row gap-4 items-center justify-between ">
                <p className="text-sm text-gray-500">
                    Copyright &copy; {new Date().getFullYear()} Emart, All
                    rights reserved. Powered by FOA.
                </p>
                <CustomImage
                    src={`/images/payment.png`}
                    alt="payment methods"
                    className={`lg:w-96`}
                />
            </div>
        </footer>
    );
};

export default Footer;
