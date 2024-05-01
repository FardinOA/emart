import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "../../product/card";

const FlashSaleSlider = () => {
    return (
        <Carousel
            opts={{
                align: "start",
                dragFree: true,
            }}
        >
            <CarouselContent className={"py-4 px-2"}>
                {Array(10)
                    .fill(0)
                    .map((ele, ind) => (
                        <CarouselItem className={"basis-[70%]"} key={``}>
                            <Card />
                        </CarouselItem>
                    ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
        </Carousel>
    );
};

export default FlashSaleSlider;
