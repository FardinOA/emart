import { Button } from "@/components/ui/button";
import { Banknote, ShieldCheck, Truck } from "lucide-react";
import React from "react";
import CustomImage from "../../uitils/customImage";
import Card from "../../product/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

const getProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=8");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const NewArrival = async () => {
  const data = await getProducts();

  return (
    <div className="base-container py-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 ">
      <div className="lg:col-span-2 space-y-4 lg:space-y-4 ">
        <div className="rounded-lg p-4 border space-y-6 ">
          <div className="space-y-1">
            <Truck className="stroke-primary text-center mx-auto " />
            <p className=" font-medium lg:leading-6 text-center  ">
              International Shipment
            </p>
            <p className="text-sm  text-gray-400 text-center">
              Your orders are shipped seamlessly between countries
            </p>
          </div>
          <div className="space-y-1">
            <ShieldCheck className="stroke-primary text-center mx-auto " />
            <p className=" font-medium lg:leading-6 text-center  ">
              30 Days Warranty
            </p>
            <p className="text-sm  text-gray-400 text-center">
              You have the right to return your orders within 30 days.
            </p>
          </div>
          <div className="space-y-1">
            <Banknote className="stroke-primary text-center mx-auto " />
            <p className=" font-medium lg:leading-6 text-center  ">
              Secure Payment
            </p>
            <p className="text-sm  text-gray-400 text-center">
              Your payments are secure with our private security network.
            </p>
          </div>
        </div>
        <div className="rounded-lg border space-y-5 bg-gradient-to-b from-accent  to-white ">
          <div className="p-4 pb-0 ">
            <p className=" text-primary-foreground text-center  ">Promo</p>
            <p className="font-bold text-center  lg:leading-6 ">
              Discount up to 30% for first purchase!
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 pb-4  ">
            <Button variant="outline">Learn More</Button>
            <CustomImage src={`/images/smarttv.png`} className={` `} />
          </div>
        </div>
      </div>
      <div className="lg:col-span-10 space-y-4 pt-2 ">
        <div className="flex items-center justify-between gap-1 border-b-[1px] border-b-gray-300 pb-2 ">
          <p className=" font-bold text-xl lg:text-2xl 2xl:text-3xl text-nowrap ">
            New Arrival
          </p>

          <Link href={"/products"}>
            <Button size="sm">View All</Button>
          </Link>
        </div>
        <div className="hidden lg:grid grid-cols-2 lg:grid-cols-4 gap-2">
          {data?.map((ele, ind) => (
            <Card key={`product-new-arrival-${ele.id}`} ele={ele} />
          ))}
        </div>
        <div className="lg:hidden">
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
            }}
          >
            <CarouselContent className={"py-2 px-2"}>
              {data?.map((ele, ind) => (
                <CarouselItem
                  className={"basis-[70%]"}
                  key={`product-new-arrival-${ele.id}`}
                >
                  <Card ele={ele} />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
