import React from "react";
import CustomImage from "../../uitils/customImage";
import Counter from "./Counter";
import Card from "../../product/card";

const FlashSale = () => {
    return (
        <div className=" base-container mt-12 p-4 bg-white shadow-xl rounded-xl grid grid-cols-1 lg:grid-cols-12 gap-4 ">
            <div className="lg:col-span-3 space-y-4">
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
            <div className="lg:col-span-9">
                {" "}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default FlashSale;
