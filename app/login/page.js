import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

                        <Button size={"lg"} className={"rounded-full w-full"}>
                            Log In
                        </Button>

                        <div className="flex justify-center gap-4">
                            <p>Not A Member?</p>{" "}
                            <Link
                                href={`/register`}
                                className="hover:underline hover:text-primary"
                            >
                                Register
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </Card>
        </div>
    );
};

export default Page;
