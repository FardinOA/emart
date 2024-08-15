import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "../../product/card";

const FlashSaleSlider = ({ data }) => {
  return (
    <Carousel
      opts={{
        align: "start",
        dragFree: true,
      }}
    >
      <CarouselContent className={"py-4 px-2"}>
        {data?.map((ele, ind) => (
          <CarouselItem className={"basis-[70%]"} key={`flash-sale-${ele?.id}`}>
            <Card ele={ele} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
            <CarouselNext /> */}
    </Carousel>
  );
};

export default FlashSaleSlider;
