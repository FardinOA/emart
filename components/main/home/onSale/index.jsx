import React from "react";
import Card from "../../product/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const getProducts = async () => {
  try {
    const res = await fetch(
      "https://fakestoreapi.com/products?limit=10&skip=8"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const OnSale = async () => {
  const data = await getProducts();
  return (
    <div className=" base-container space-y-4 py-10 lg:py-20 ">
      <div className="flex items-center justify-between gap-1 border-b-[1px] border-b-gray-300 pb-2 ">
        <p className=" font-bold text-xl lg:text-2xl 2xl:text-3xl text-nowrap ">
          Best Selling
        </p>

        <Link href={"/products"}>
          <Button size="sm">View All</Button>
        </Link>
      </div>

      <div className="hidden lg:grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-2">
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
            {Array(10)
              .fill(0)
              .map((ele, ind) => (
                <CarouselItem className={"basis-[70%]"} key={``}>
                  <Card />
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default OnSale;
