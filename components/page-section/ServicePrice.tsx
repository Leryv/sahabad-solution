"use client";
import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "motion/react";
import Link from "next/link";

export default function ServicePrice() {
  const dataPrice = [
    {
      id: 1,
      title: "Single Item Installation",
      desc: "Harga Spesial untuk instalasi 1-3 barang, cepat dan aman",
      priceAwal: "150.000",
      priceAkhir: "300.000",
      priceNotFix: null,
      durasi: "1-3 hours",
      efektifFor: "Pribadi, Instalasi Satu Unit",
    },
    {
      id: 2,
      title: "Multi Unit Projects",
      desc: "Harga Spesial untuk instalasi 4-6 barang, cepat dan aman",
      priceAwal: "500.000",
      priceAkhir: "1.000.000",
      priceNotFix: null,
      durasi: "3-7 hours",
      efektifFor: "Instalasi Beberapa Lemari dan unit dapur",
    },
    {
      id: 3,
      title: "Large Scale Projects",
      desc: "Harga Spesial untuk instalasi diatas 6 barang, cepat dan aman",
      priceAwal: null,
      priceAkhir: null,
      priceNotFix: "1.000.000++",
      durasi: "2-3 days",
      efektifFor: "Renovasi Office, dan Custom kamar",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <Container>
      <section id="service">
        <div className="grid py-18 px-8 gap-2 ">
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Start off-screen to the right
            whileInView={{ opacity: 1, x: 0 }} // Fade in and move to original position
            transition={{ duration: 1, ease: "easeInOut" }} // Transition properties
            viewport={{ once: true }} // Optional: makes it animate only once
            className="grid gap-2"
          >
            <h3 className="font-medium text-accent-blue-500 dark:text-accent-blue-400">
              Layanan
            </h3>
            <h1 className="text-2xl text-gray-800 md:text-3xl font-medium max-w-md">
              Layanan Spesial
            </h1>
            <h2 className="font-regular text-muted-foreground sm:flex lg:flex lg:flex-1">
              Temukan solusi efektif dan efisien bersama kami!
            </h2>
          </motion.div>
          <Carousel
            className="w-full mx-auto max-w-60 md:max-w-2xl lg:max-w-screen" // Adjust max width for larger screens
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{ loop: true }}
          >
            <CarouselContent>
              {Array.from(dataPrice).map((item) => (
                <CarouselItem
                  key={item.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="max-w-96 bg-white mt-8 shadow-md lg:max-w-md border-6 border-muted">
                      <CardHeader>
                        <CardTitle className="text-accent-blue-500 font-bold">
                          {item.title}
                        </CardTitle>
                        <CardDescription>{item.desc}</CardDescription>
                        <CardContent className="mx-auto px-0 py-4 text-sm font-extrabold lg:text-2xl my-2 lg:font-bold">
                          {item.priceNotFix ? (
                            <>Rp. {item.priceNotFix}</>
                          ) : (
                            <>
                              Rp.{item.priceAwal} - {item.priceAkhir}
                            </>
                          )}
                        </CardContent>
                        <CardDescription className="flex items-center gap-2">
                          Durasi :
                          <p className="text-gray-900 font-normal ">
                            {" "}
                            {` ${item.durasi}`}
                          </p>
                        </CardDescription>
                        <CardDescription className="flex items-center gap-2">
                          Efektif Untuk :
                          <p className="text-gray-900 font-normal ">
                            {" "}
                            {` ${item.efektifFor}`}
                          </p>
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="flex justify-center">
                        <Button className="text-sm/6 font-semibold bg-accent-blue-500 text-white hover:bg-white hover:text-accent-blue-500">
                          <Link href="#contact">Contact Us</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="z-100">
              <CarouselPrevious className="flex   overflow-y-auto lg:hidden" />
              <CarouselNext className="flex   overflow-y-auto lg:hidden" />
            </div>
          </Carousel>
        </div>
      </section>
    </Container>
  );
}
