import React from "react";
import CustomImage from "../../uitils/customImage";
import Counter from "./Counter";
import Card from "../../product/card";
import FlashSaleSlider from "./FlashSaleSlider";

const FlashSale = () => {
    return (
        <div className=" base-container mt-12 p-4 bg-white lg:shadow-[0px_0px_50px_0px_rgba(0,0,0,0.1)] rounded-xl grid grid-cols-1 lg:grid-cols-11 gap-4 ">
            <div className="lg:col-span-2 space-y-4">
                <figure className="bg-gray-100 rounded-full p-4 w-fit mx-auto">
                    <CustomImage
                        src={`/images/bolt.svg`}
                        className={"size-8"}
                        alt={"flash"}
                    />
                </figure>

                <p className="text-gray-500 lg:text-xl font-semibold  text-center">
                    Flash sale
                </p>
                <p className="text-gray-400 text-center">
                    Consectetuer tempor commodo nascetur amet nisi turpis eros
                    adipiscing molestie
                </p>

                <Counter />
            </div>
            <div className="lg:col-span-9 hidden lg:block ">
                {" "}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className="lg:col-span-9  lg:hidden ">
                <FlashSaleSlider />
            </div>
        </div>
    );
};

export default FlashSale;
