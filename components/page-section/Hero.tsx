"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import LogoSimple from "@/public/hero/logo_simple.png";
import LogoTulisan from "@/public/hero/logo_tulisan_1000x1000.png";
import { Card } from "../ui/card";

const navigation = [
  { name: "Layanan", href: "#service" },
  { name: "Pengalaman", href: "#experience" },
  { name: "Kontak", href: "#contact" },
  { name: "Lokasi", href: "#location" },
];

const LogoComponent = () => {
  return (
    <div className="flex lg:flex-1">
      <Card className="">
        <Link
          href="/"
          // className="-m-1.5 p-1.5"
        >
          <span className="sr-only">Your Company</span>
          <Image alt="" src={LogoTulisan} className="h-12 w-25" />
        </Link>
      </Card>
    </div>
  );
};

const HeroDrawer = () => {
  return (
    <div className="flex lg:hidden">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 bg-white text-accent-blue-500">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="fixed  right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <DialogTitle>
              <Card className="p-4">
                <Link href="/">
                  <span className="sr-only">Your Company</span>
                  <Image
                    alt=""
                    src={LogoSimple}
                    width={80} // Specify the width here
                    height={80} // Specify the height here
                    className="h-12 w-10"
                  />
                </Link>
              </Card>
            </DialogTitle>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              {/* <div className="py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div> */}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const HeroNavBar = () => {
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-sm/6 font-semibold text-white "
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

const ButtonNavBarHero = () => {
  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <Button className="text-sm/6 font-semibold bg-white text-accent-blue-500">
        <Link href="/">
          Log in <span aria-hidden="true">&rarr;</span>
        </Link>
      </Button>
    </div>
  );
};

export default function Hero() {
  return (
    <section id="hero" className="bg-accent-blue-600">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <LogoComponent />
          <HeroDrawer />
          <HeroNavBar />
          <ButtonNavBarHero />
        </nav>
      </header>

      <div className="relative isolate px-6 pt-9 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-white ring-1 ring-white hover:ring-3">
              Announcing our next round of funding.{" "}
              <Link className="font-bold" href="/">
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl sm:leading-24">
              Sentuhan Ahli untuk Furniture Impian Anda!
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              Kami menawarkan layanan pemasangan furniture profesional untuk
              menciptakan ruang yang nyaman dan fungsional.
            </p>
            <div className="mt-20 flex items-center justify-center gap-x-6">
              <Button
                className="text-sm/6 font-semibold bg-white text-accent-blue-500 hover:bg-accent-blue-500 hover:text-white"
                asChild
              >
                <Link href={"#promo"}>Let&apos;s See</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
