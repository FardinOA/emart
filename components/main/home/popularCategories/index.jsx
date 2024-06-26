import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import CustomImage from "../../uitils/customImage";
import { Star } from "lucide-react";
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
];

const PopularCategories = () => {
    return (
        <div className="base-container ">
            <Carousel
                opts={{
                    align: "start",
                    dragFree: true,
                }}
            >
                <CarouselContent>
                    {category?.map((ele, ind) => (
                        <CarouselItem
                            className={
                                " basis-[25%] md:basis-1/3 lg:basis-[10%]  px-4      "
                            }
                            key={`popular-categories-${ele.id}`}
                        >
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
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>
        </div>
    );
};

export default PopularCategories;
