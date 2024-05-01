import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Delete, ShoppingCartIcon, Trash } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CustomImage from "../uitils/customImage";

const SidebarCart = () => {
    return (
        <Sheet>
            <SheetTrigger aria-label="open cart">
                <ShoppingCartIcon size={30} className="stroke-primary" />
            </SheetTrigger>
            <SheetContent className="overflow-y-scroll no-scrollbar p-0 border-none w-full  ">
                <div className="relative ">
                    <div className="p-6">
                        <SheetHeader>
                            <SheetTitle>Cart</SheetTitle>
                        </SheetHeader>
                        <div className=" grid grid-cols-1 gap-4 divide-y-2">
                            {Array(10)
                                .fill(0)
                                .map((ele, ind) => (
                                    <Card
                                        className={
                                            " border-none flex bg-white "
                                        }
                                        key={`floating-cart-items-${ind}`}
                                    >
                                        <CustomImage
                                            alt={"product"}
                                            src={"/images/phone.jpg"}
                                            className={
                                                " w-20 h-fit object-contain pt-2 "
                                            }
                                        />{" "}
                                        <div>
                                            <CardHeader
                                                className={"py-2 pl-2 "}
                                            >
                                                <CardTitle
                                                    className={
                                                        "text-base leading-[20px]"
                                                    }
                                                >
                                                    Mizuna 8 Pro Android
                                                    Smartphone
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent
                                                className={"py-0 pl-2"}
                                            >
                                                <p>
                                                    <span className=" text-primary ">
                                                        <bdi>
                                                            <span className=" ">
                                                                $
                                                            </span>
                                                            829.00
                                                        </bdi>
                                                    </span>
                                                </p>
                                            </CardContent>
                                            <CardFooter className={"py-0 pl-2"}>
                                                <div className="flex items-center w-full justify-between">
                                                    <Input
                                                        value={1}
                                                        type="number"
                                                        className={
                                                            "size-6 w-20 "
                                                        }
                                                    />
                                                    <Button
                                                        className={
                                                            " hover:text-red-600 "
                                                        }
                                                        variant="icon"
                                                    >
                                                        <Trash size={18} />
                                                    </Button>
                                                </div>
                                            </CardFooter>
                                        </div>
                                    </Card>
                                ))}
                        </div>
                    </div>
                    <div className=" bg-secondary w-full p-6   sticky -left-6 -bottom-0 space-y-4 ">
                        <div className="p-4 border-[2px] rounded-xl grid grid-cols-2 gap-2 lg:gap-4 font-medium ">
                            <p>Subtotal</p> <p>$111.00</p>
                            <p>Total</p> <p>$111.00</p>
                        </div>
                        <div className="flex gap-4">
                            <Button
                                variant="outline"
                                size="lg"
                                className={" w-full "}
                            >
                                View Cart
                            </Button>
                            <Button className={" w-full "} size="lg">
                                Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default SidebarCart;
