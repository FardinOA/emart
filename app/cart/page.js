import CustomImage from "@/components/main/uitils/customImage";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { X } from "lucide-react";
import Link from "next/link";

const page = () => {
    return (
        <div className="  container py-10 pt-20 lg:py-10 space-y-10 lg:space-y-10 ">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                        <BreadcrumbPage>Cart</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className=" grid grid-cols-1 lg:grid-cols-12 gap-8 ">
                <div className="lg:col-span-9">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="">Action</TableHead>
                                <TableHead>Photo</TableHead>
                                <TableHead>Product Title</TableHead>
                                <TableHead className="">Price</TableHead>
                                <TableHead className="">Quantity</TableHead>
                                <TableHead className="">Total</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Array(5)
                                .fill(0)
                                .map((ele, ind) => (
                                    <TableRow key={`cart-page-${ind}`}>
                                        <TableCell className="font-medium">
                                            <Button
                                                className=" group "
                                                size="icon"
                                                variant="ghost "
                                            >
                                                <X className=" stroke-primary stroke-[5px] hover:stroke-red-600 " />
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <CustomImage
                                                alt={"product"}
                                                src={`/images/phone.jpg`}
                                                className={`w-20`}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Link
                                                className="hover:text-primary font-semibold text-lg "
                                                href={`/products/samsung-4k-tv`}
                                            >
                                                Cantaloupe Melon Fresh Organic
                                                Cut
                                            </Link>
                                            <p className="text-gray-400  ">
                                                SKU: BG-1033
                                            </p>
                                        </TableCell>
                                        <TableCell className={"font-medium"}>
                                            $53.00
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center cart-input-quantity ">
                                                {/* <Button>-</Button> */}
                                                <Input
                                                    className={
                                                        "focus-visible:ring-0 w-24 border-primary appearance-auto "
                                                    }
                                                    type="number"
                                                />
                                                {/* <Button>+</Button> */}
                                            </div>
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            $250.00
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="lg:col-span-3">
                    <div className=" relative lg:sticky lg:top-40 border-2 rounded-lg p-4 lg:p-6 border-primary space-y-6 ">
                        <p className="font-medium text-lg ">Cart totals</p>

                        <div className="space-y-4 grid grid-cols-2 ">
                            <p>Subtotal</p> <p>$111.00</p>
                            <p>Total</p> <p>$111.00</p>
                        </div>
                        <div className="flex justify-center">
                            <Button className={""}>Proceed to checkout</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
