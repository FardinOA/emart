import CustomImage from "@/components/main/uitils/customImage";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

const Page = () => {
    const category = [
        {
            id: 1,
            name: "Clothing",
            image: "/images/clothing.svg",
            slug: "clothing",
        },
        {
            id: 2,
            name: "Electronics",
            image: "/images/electronics.svg",
            slug: "electronics",
        },
        {
            id: 3,
            name: "Home & Garden",
            image: "/images/home-garden.svg",
            slug: "home-and-garden",
        },
        {
            id: 4,
            name: "Books & Audible",
            image: "/images/books-audible.svg",
            slug: "books-and-audible",
        },
        {
            id: 5,
            name: "Health & Beauty",
            image: "/images/health-beauty.svg",
            slug: "health-and-beauty",
        },
        {
            id: 6,
            name: "Toys & Games",
            image: "/images/toys-games.svg",
            slug: "toys-and-games",
        },
        {
            id: 7,
            name: "Sports & Outdoors",
            image: "/images/sports-outdoors.svg",
            slug: "sports-and-outdoors",
        },
        {
            id: 8,
            name: "Automotive",
            image: "/images/automotive.svg",
            slug: "automotive",
        },
        {
            id: 9,
            name: "Jewelry & Watches",
            image: "/images/jewelry-watches.svg",
            slug: "jewelry-and-watches",
        },
        {
            id: 10,
            name: "Pet Supplies",
            image: "/images/pet-supplies.svg",
            slug: "pet-supplies",
        },
        {
            id: 1,
            name: "Clothing",
            image: "/images/clothing.svg",
            slug: "clothing",
        },
        {
            id: 2,
            name: "Electronics",
            image: "/images/electronics.svg",
            slug: "electronics",
        },
        {
            id: 3,
            name: "Home & Garden",
            image: "/images/home-garden.svg",
            slug: "home-and-garden",
        },
        {
            id: 4,
            name: "Books & Audible",
            image: "/images/books-audible.svg",
            slug: "books-and-audible",
        },
        {
            id: 5,
            name: "Health & Beauty",
            image: "/images/health-beauty.svg",
            slug: "health-and-beauty",
        },
        {
            id: 6,
            name: "Toys & Games",
            image: "/images/toys-games.svg",
            slug: "toys-and-games",
        },
        {
            id: 7,
            name: "Sports & Outdoors",
            image: "/images/sports-outdoors.svg",
            slug: "sports-and-outdoors",
        },
        {
            id: 8,
            name: "Automotive",
            image: "/images/automotive.svg",
            slug: "automotive",
        },
        {
            id: 9,
            name: "Jewelry & Watches",
            image: "/images/jewelry-watches.svg",
            slug: "jewelry-and-watches",
        },
        {
            id: 10,
            name: "Pet Supplies",
            image: "/images/pet-supplies.svg",
            slug: "pet-supplies",
        },
        {
            id: 1,
            name: "Clothing",
            image: "/images/clothing.svg",
            slug: "clothing",
        },
        {
            id: 2,
            name: "Electronics",
            image: "/images/electronics.svg",
            slug: "electronics",
        },
        {
            id: 3,
            name: "Home & Garden",
            image: "/images/home-garden.svg",
            slug: "home-and-garden",
        },
        {
            id: 4,
            name: "Books & Audible",
            image: "/images/books-audible.svg",
            slug: "books-and-audible",
        },
        {
            id: 5,
            name: "Health & Beauty",
            image: "/images/health-beauty.svg",
            slug: "health-and-beauty",
        },
        {
            id: 6,
            name: "Toys & Games",
            image: "/images/toys-games.svg",
            slug: "toys-and-games",
        },
        {
            id: 7,
            name: "Sports & Outdoors",
            image: "/images/sports-outdoors.svg",
            slug: "sports-and-outdoors",
        },
        {
            id: 8,
            name: "Automotive",
            image: "/images/automotive.svg",
            slug: "automotive",
        },
        {
            id: 9,
            name: "Jewelry & Watches",
            image: "/images/jewelry-watches.svg",
            slug: "jewelry-and-watches",
        },
        {
            id: 10,
            name: "Pet Supplies",
            image: "/images/pet-supplies.svg",
            slug: "pet-supplies",
        },
        {
            id: 1,
            name: "Clothing",
            image: "/images/clothing.svg",
            slug: "clothing",
        },
        {
            id: 2,
            name: "Electronics",
            image: "/images/electronics.svg",
            slug: "electronics",
        },
        {
            id: 3,
            name: "Home & Garden",
            image: "/images/home-garden.svg",
            slug: "home-and-garden",
        },
        {
            id: 4,
            name: "Books & Audible",
            image: "/images/books-audible.svg",
            slug: "books-and-audible",
        },
        {
            id: 5,
            name: "Health & Beauty",
            image: "/images/health-beauty.svg",
            slug: "health-and-beauty",
        },
        {
            id: 6,
            name: "Toys & Games",
            image: "/images/toys-games.svg",
            slug: "toys-and-games",
        },
        {
            id: 7,
            name: "Sports & Outdoors",
            image: "/images/sports-outdoors.svg",
            slug: "sports-and-outdoors",
        },
        {
            id: 8,
            name: "Automotive",
            image: "/images/automotive.svg",
            slug: "automotive",
        },
        {
            id: 9,
            name: "Jewelry & Watches",
            image: "/images/jewelry-watches.svg",
            slug: "jewelry-and-watches",
        },
        {
            id: 10,
            name: "Pet Supplies",
            image: "/images/pet-supplies.svg",
            slug: "pet-supplies",
        },
    ];
    return (
        <div className="container py-20 space-y-10 ">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                        <BreadcrumbPage>Categories</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 2xl:grid-cols-10 gap-6 lg:gap-8 ">
                {category?.map((ele, ind) => (
                    <div key={`categories-${ind}`}>
                        {" "}
                        <figure className="bg-gradient-to-br rounded-full group from-primary/30 via-white to-white relative  ">
                            <CustomImage
                                src={ele.image}
                                alt={ele.name}
                                className="h-full w-full  aspect-square !object-contain !object-center p-6 z-[0] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 transform-gpu "
                            />
                        </figure>
                        <div className=" mt-1  ">
                            <p className="text-center font-semibold text-sm">
                                {ele?.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
