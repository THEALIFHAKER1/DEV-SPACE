"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function ProjectsCarousel() {
  return (
    <div className="flex justify-center items-center ">
      <Carousel
        className="relative w-full rounded-lg shadow-lg overflow-hidden"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-56 md:h-96">
          <CarouselItem className="bg-red-300  flex justify-center items-center  ">
            Coming Soon
          </CarouselItem>
          <CarouselItem className="bg-blue-300  flex justify-center items-center ">
            Coming Soon
          </CarouselItem>
          <CarouselItem className="bg-green-300  flex justify-center items-center ">
            Coming Soon
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
