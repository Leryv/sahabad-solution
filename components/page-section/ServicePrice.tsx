import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
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

  return (
    <Container>
      <div className="grid py-9 px-8 gap-2 ">
        <h1 className="text-2xl font-medium max-w-sm">Layanan Spesial</h1>
        <h2 className="text-xl font-regular max-w-80 text-muted-foreground sm:flex lg:flex lg:flex-1">
          Temukan solusi efektif dan efisien bersama kami!
        </h2>
        <Carousel className="w-full mx-auto max-w-80 lg:max-w-screen">
          <CarouselContent>
            {Array.from(dataPrice).map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="max-w-80 bg-white mt-8 shadow-md lg:max-w-md border-6 border-muted">
                    <CardHeader>
                      <CardTitle className="text-accent-blue-500">
                        {item.title}
                      </CardTitle>
                      <CardDescription>{item.desc}</CardDescription>
                      <CardContent className="mx-auto px-0 py-4 text-xl font-bold lg:text-2xl my-2">
                        {item.priceNotFix ? (
                          <>Rp. {item.priceNotFix}</>
                        ) : (
                          <>
                            Rp.{item.priceAwal} - Rp{item.priceAkhir}
                          </>
                        )}
                      </CardContent>
                      <CardDescription>Durasi : {item.durasi}</CardDescription>
                      <CardDescription>
                        Efektif Untuk : {item.efektifFor}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-center">
                      <Button className="text-sm/6 font-semibold bg-accent-blue-500 text-white hover:bg-white hover:text-accent-blue-500">
                        Contact Us
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="flex lg:hidden" />
          <CarouselNext className="flex lg:hidden" />
        </Carousel>
      </div>
    </Container>
  );
}
