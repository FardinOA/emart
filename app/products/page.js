import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Card from "@/components/main/product/card";
import { Filter, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FilterCard from "@/components/main/products/FilterCard";
import MobileFilter from "@/components/main/products/MobileFilter";

const page = () => {
  const categoriesFilter = [
    { name: "Beverage", value: 8 },
    { name: "Desserts", value: 9 },
    { name: "Drinks & Juice", value: 6 },
    { name: "Fish & Meats", value: 7 },
    { name: "Fresh Fruits", value: 8 },
    { name: "Pets & Animals", value: 4 },
    { name: "Toys", value: 4 },
    { name: "Vegetables", value: 6 },
  ];
  const colorFilter = [
    { name: "Black", value: 1 },
    { name: "Green", value: 3 },
    { name: "Grey", value: 1 },
  ];
  const sizeFilter = [
    { name: "M", value: 12 },
    { name: "S", value: 3 },
    { name: "L", value: 1 },
    { name: "XL", value: 1 },
  ];
  const weightFilter = [
    { name: "100gm", value: 12 },
    { name: "1kg", value: 3 },
    { name: "375ml", value: 1 },
    { name: "500gm", value: 1 },
  ];
  const saleFilter = [
    { name: "On Sale", value: 12 },
    { name: "Regular", value: 3 },
  ];
  return (
    <div className=" container py-10 pt-20 lg:py-10 space-y-10 lg:space-y-10 ">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>Products</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 ">
        <div className="lg:col-span-3 space-y-4 hidden lg:block ">
          <div className="space-y-4 relative lg:sticky lg:top-40 ">
            <FilterCard title={"Categories"} data={categoriesFilter} />
            <FilterCard title={"Color"} data={colorFilter} />
            <FilterCard title={"Size"} data={sizeFilter} />
            <FilterCard title={"Weight"} data={weightFilter} />
            <FilterCard title={"Sale"} data={saleFilter} />
          </div>
        </div>
        <div className="lg:col-span-9 space-y-4 lg:space-y-0 ">
          <div className="lg:hidden">
            <MobileFilter />
          </div>
          <div className="transition-smooth grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4 ">
            {Array(20)
              .fill(0)
              .map((ele, ind) => (
                <Card key={`products-${ind}`} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
