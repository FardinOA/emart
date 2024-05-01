"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import React from "react";

const AddToCard = ({ btnClassName, inputClassName }) => {
    const { toast } = useToast();
    return (
        <>
            {" "}
            <div>
                <Input
                    type="number"
                    value={3}
                    className={cn(" rounded-full w-16 ", inputClassName)}
                />
            </div>
            <div>
                <Button
                    onClick={() => {
                        toast({
                            variant: "success",
                            title: "Product Added to successfully",
                        });
                    }}
                    className={cn(" ", btnClassName)}
                >
                    Add to cart
                </Button>
            </div>
        </>
    );
};

export default AddToCard;
