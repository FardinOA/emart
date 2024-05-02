import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const Page = () => {
    return (
        <div className="container py-20 ">
            <Card
                className={
                    "bg-white rounded-xl border-none shadow-none flex items-center justify-center py-10 lg:py-20 "
                }
            >
                <Card
                    className={
                        "w-full h-full lg:w-[400px] border-none shadow-none bg-inherit "
                    }
                >
                    <CardContent className={"space-y-5"}>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                className={"focus-visible:ring-secondary"}
                                id="email"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                type="password"
                                className={"focus-visible:ring-secondary"}
                                id="password"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="confirm_password">
                                Confirm Password
                            </Label>
                            <Input
                                type="password"
                                className={"focus-visible:ring-secondary"}
                                id="confirm_password"
                            />
                        </div>

                        <Button size={"lg"} className={"rounded-full w-full"}>
                            Register
                        </Button>

                        <div className="flex justify-center gap-4">
                            <p>Already a Member?</p>{" "}
                            <Link
                                href={`/login`}
                                className="hover:underline hover:text-primary"
                            >
                                Login
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </Card>
        </div>
    );
};

export default Page;
