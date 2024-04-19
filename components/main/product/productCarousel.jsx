import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import CustomImage from "../uitils/customImage";

const ProductCarousel = () => {
    return (
        <Carousel>
            <CarouselContent>
                {Array(5)
                    .fill(0)
                    ?.map((ele, ind) => (
                        <CarouselItem
                            className="mx-auto"
                            key={`productImage-${ind}`}
                        >
                            <CustomImage
                                src={"/images/phone.jpg"}
                                alt={"product name"}
                                className={" w-56 mx-auto"}
                            />
                        </CarouselItem>
                    ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
        </Carousel>
    );
};

export default ProductCarousel;
