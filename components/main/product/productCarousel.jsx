import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CustomImage from "../uitils/customImage";

const ProductCarousel = ({ data }) => {
  return (
    <Carousel>
      <CarouselContent>
        {data?.map((ele, ind) => (
          <CarouselItem className="mx-auto" key={`productImage-${ind}`}>
            <CustomImage
              src={ele}
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
