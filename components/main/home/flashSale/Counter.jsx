import { Button } from "@/components/ui/button";
import React from "react";

const Counter = () => {
    return (
        <div className=" grid grid-cols-3 gap-2">
            <div className="flex flex-col gap-1 rounded-lg bg-gray-200 p-2 ">
                <span className="text-center text-primary font-bold">16</span>{" "}
                <span className="text-center text-gray-800 font-semibold text-xs">
                    Hours
                </span>
            </div>
            <div className="flex flex-col gap-1 rounded-lg bg-gray-200 p-2 ">
                <span className="text-center text-primary font-bold">16</span>{" "}
                <span className="text-center text-gray-800 font-semibold text-xs">
                    Minuses
                </span>
            </div>
            <div className="flex flex-col gap-1 rounded-lg bg-gray-200 p-2 ">
                <span className="text-center text-primary font-bold">16</span>{" "}
                <span className="text-center text-gray-800 font-semibold text-xs">
                    Seconds
                </span>
            </div>
        </div>
    );
};

export default Counter;
