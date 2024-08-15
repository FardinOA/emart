import { Button } from "@/components/ui/button";
import React from "react";
import CustomImage from "../uitils/customImage";
import Link from "next/link";
import { Eye, Minus, Plus, ShoppingCart } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductCarousel from "./productCarousel";
import { Input } from "@/components/ui/input";

const Card = ({ ele }) => {
  return (
    // <div className="hover:bg-primary transition-all duration-300 p-[1px] rounded-lg overflow-hidden group relative  ">
    <div className=" h-full flex flex-col justify-between bg-white    rounded-lg p-4  relative transition-all duration-500  shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]   ">
      <QuickView ele={ele} />
      <Link
        aria-label={"link"}
        href={`/products/${ele?.id}`}
        className="group   flex-1 "
      >
        <p className="bg-yellow-400  size-10 rounded-full absolute top-2 right-2 text-xs flex items-center justify-center ">
          <span>Sale!</span>
        </p>
        <CustomImage className={"h-[187px]"} src={ele?.image} alt={"phone"} />
        <p className=" line-clamp-2 text-sm lg:text-base my-2 group-hover:text-primary transition-all duration-300 ">
          {ele?.title}
        </p>
        <span className=" flex items-center gap-2 ">
          {/* <del aria-hidden="true">
            <span className=" text-sm lg:text-base text-gray-400">
              <bdi>
                <span className=" ">$</span>
                {ele?.price}
              </bdi>
            </span>
          </del>{" "} */}

          <span className=" text-sm lg:text-base text-primary ">
            <bdi>
              <span className=" ">$</span>
              {ele?.price}
            </bdi>
          </span>
        </span>
      </Link>
      <div className="  mt-5">
        <Button aria-label="Add to cart" size={"sm"} className={"w-full"}>
          Add to cart
        </Button>
      </div>
    </div>
    // </div>
  );
};

const QuickView = ({ ele }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size={"icon"}
            aria-label="quick view"
            className={
              " size-6 p-1 absolute top-14 right-4   transition-all duration-500 "
            }
          >
            <Eye />
          </Button>
        </DialogTrigger>
        <DialogContent className="rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-4 w-[90%] lg:!max-w-[40rem] ">
          <div>
            <ProductCarousel data={[ele?.image]} />
          </div>
          <div>
            <DialogHeader>
              <DialogTitle>{ele?.title}</DialogTitle>
              <DialogDescription className="text-primary ">
                ${ele?.price}
              </DialogDescription>
              <DialogDescription>{ele?.description}</DialogDescription>
              <div className="pt-4 flex items-center gap-4 ">
                <div className="flex items-center">
                  <Button
                    variant="icon"
                    className={
                      "bg-primary text-primary-foreground rounded-r-none"
                    }
                    size={"sm"}
                  >
                    <Minus size={15} />
                  </Button>
                  <Input
                    placeholder="1"
                    className="text-center h-9  w-full rounded-none border-primary ring-0 focus:!outline-none focus:!ring-offset-0   focus-visible:!ring-0 "
                    value={1}
                  />
                  <Button
                    variant="icon"
                    className={
                      "bg-primary text-primary-foreground rounded-l-none"
                    }
                    size={"sm"}
                  >
                    <Plus size={15} />
                  </Button>
                </div>
                <Button size={"sm"} className="gap-2">
                  <ShoppingCart /> Add To Cart
                </Button>
              </div>
            </DialogHeader>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Card;
