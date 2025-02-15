import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { StarIcon } from "@heroicons/react/20/solid";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image1 from "@/public/customer/user2.webp";
import Image2 from "@/public/customer/user3.webp";
import Image3 from "@/public/customer/user4.png";
import Image, { StaticImageData } from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";

interface DataTestimoni {
  // id: number;
  name: string;
  from: string;
  comment: string;
  orderHistory: string;
  jumlahBintang: number;
  img: StaticImageData;
}

const dataTestimoni: DataTestimoni[] = [
  {
    // id: 1,
    name: "Rezia Lesti",
    from: "Google Maps Review",
    comment:
      "satsetsatset yg ngerakit dipan gapake lamaa worth it lahh mana dikasih gratis kaki kakiannya 🥹🥹 …",
    orderHistory: "Single Item Installation",
    jumlahBintang: 5,
    img: Image1,
  },
  {
    // id: 2,
    name: "Valen Idealistino",
    from: "Google Maps Review",
    comment:
      "admin fast response, tukangnya udah profesional sejam selesai, harga murah meriah cuma 150 rb",
    orderHistory: "Multi Unit Projects",
    jumlahBintang: 5,
    img: Image2,
  },
  {
    // id: 3,
    name: "Grace",
    from: "Google Maps Review",
    comment:
      "admin fast response, tukangnya udah profesional sejam selesai, harga murah meriah cuma 150 rb",
    orderHistory: "Single Item Installation",
    jumlahBintang: 5,
    img: Image3,
  },
];

const RatingComponent = ({
  name,
  from,
  comment,
  orderHistory,
  jumlahBintang,
  img,
}: DataTestimoni) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon
      key={index}
      aria-hidden="true"
      className={`h-5 w-5 flex-none ${
        index < jumlahBintang ? "text-accent-blue-500" : "text-gray-300"
      }`}
    />
  ));

  return (
    <div className="flex flex-col items-start p-4">
      <p className="sr-only">{jumlahBintang} out of 5 stars</p>
      <div className="flex gap-x-1 text-accent-blue-500">{stars}</div>
      <blockquote className="mt-5 h-50 max-h-48 text-lg lg:text-3xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9 line-clamp-6 lg:line-clamp-5">
        <p>{`"${comment}"`}</p>
      </blockquote>
      <figcaption className="mt-2 flex items-center gap-x-6">
        <Image
          width={48}
          height={48}
          className="rounded-full bg-gray-50"
          src={img}
          alt=""
        />
        <div className="text-sm leading-6">
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="mt-0.5 text-gray-600">{orderHistory}</div>
          <div className="hidden">{from}</div>
        </div>
      </figcaption>
    </div>
  );
};

export default function Testimonial() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const [itemsPerSlide, setItemsPerSlide] = useState(1); // Default for mobile
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 2);
    };

    // Set initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second delay

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Container>
      <section
        id="experience"
        className="bg-white dark:bg-gray-900 h-215 lg:h-220"
      >
        <div className="py-12 lg:py-18 px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Start off-screen to the right
            whileInView={{ opacity: 1, x: 0 }} // Fade in and move to original position
            transition={{ duration: 1, ease: "easeInOut" }} // Transition properties
            viewport={{ once: true }} // Optional: makes it animate only once
          >
            <p className="font-medium text-accent-blue-500 dark:text-accent-blue-400">
              Pengalaman
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
              Apa Yang Customer kami katakan Tentang Kami
            </h1>
            <Card className="w-full max-h-lg max-w-8xl mt-10 shadow-lg mb-20">
              <CardHeader>
                <CardTitle>Google Maps Review</CardTitle>
                <CardContent>
                  <Carousel
                    className="w-full mx-auto max-w-2xl lg:max-w-screen"
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    opts={{ loop: true }}
                  >
                    <CarouselContent>
                      {isLoading ? (
                        // Loading animation
                        <CarouselItem>
                          <div className="animate-pulse flex space-x-4">
                            <div className="flex-1 space-y-4 py-1">
                              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                              <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                            </div>
                          </div>
                        </CarouselItem>
                      ) : (
                        Array.from({
                          length: Math.ceil(
                            dataTestimoni.length / itemsPerSlide
                          ),
                        }).map((_, index) => {
                          const itemsToDisplay = dataTestimoni.slice(
                            index * itemsPerSlide,
                            index * itemsPerSlide + itemsPerSlide
                          );

                          // Create a unique key based on the first item's ID in the slice
                          const carouselItemKey =
                            itemsToDisplay.length > 0
                              ? `carousel-item-${itemsToDisplay[0].name}`
                              : `carousel-item-${index}`;

                          return (
                            <CarouselItem key={carouselItemKey}>
                              <div className="flex justify-between">
                                {itemsToDisplay.map((item) => (
                                  <RatingComponent
                                    key={item.name} // Unique key for RatingComponent
                                    name={item.name}
                                    from={item.from}
                                    comment={item.comment}
                                    orderHistory={item.orderHistory}
                                    jumlahBintang={item.jumlahBintang}
                                    img={item.img}
                                  />
                                ))}
                              </div>
                            </CarouselItem>
                          );
                        })
                      )}
                    </CarouselContent>
                    <CarouselPrevious className="flex overflow-y-auto lg:hidden" />
                    <CarouselNext className="flex overflow-y-auto lg:hidden" />
                  </Carousel>
                </CardContent>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>
    </Container>
  );
}
