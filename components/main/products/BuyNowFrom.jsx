"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { DialogClose } from "@/components/ui/dialog";
const BuyNowFrom = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    return (
        <div className="pt-4 space-y-4 ">
            {!isSubmitted ? (
                <>
                    <div className="grid w-full   items-center gap-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" />
                    </div>
                    <div className="grid w-full   items-center gap-1.5">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="text" />
                    </div>
                    <div className="flex justify-end">
                        <Button onClick={() => setIsSubmitted(true)}>
                            Submit
                        </Button>
                    </div>
                </>
            ) : (
                <>
                    <Label>Input Otp</Label>
                    <InputOTP maxLength={6}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>

                    <div className="flex justify-end">
                        <DialogClose asChild>
                            <Button type="button">Confirm Order</Button>
                        </DialogClose>
                    </div>
                </>
            )}
        </div>
    );
};

export default BuyNowFrom;
