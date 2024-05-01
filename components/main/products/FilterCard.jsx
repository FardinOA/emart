import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SlidersHorizontal } from "lucide-react";
import React from "react";

const FilterCard = ({ icon, data, title }) => {
    return (
        <div className=" lg:shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] lg:p-8 lg:rounded-xl space-y-4 ">
            <div className="flex items-center gap-2 ">
                <SlidersHorizontal />
                <p className="font-semibold">Filter by {title}</p>
            </div>
            <div className="flex items-center gap-[2px]  ">
                <p className="bg-primary h-[4px] w-8 rounded-full "></p>
                <p className="bg-gray-400 h-[2px] flex-1 "></p>
            </div>
            <div className="space-y-3">
                {data?.map((ele, ind) => (
                    <div
                        key={`categories-filter-${ele.name}`}
                        className="flex items-center justify-between"
                    >
                        <div className="flex items-center gap-2">
                            <Input
                                type="checkbox"
                                className="rounded-none size-fit "
                            />{" "}
                            <Label className="text-gray-800 text-nowrap ">
                                {ele.name}
                            </Label>
                        </div>
                        <p className="text-gray-400 text-sm ">({ele.value})</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterCard;
