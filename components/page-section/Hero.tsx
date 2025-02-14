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

const navigation = [
  { name: "Service", href: "#" },
  { name: "Experience", href: "#" },
  { name: "Contact", href: "#" },
  // { name: "Company", href: "#" },
];

const LogoComponent = () => {
  return (
    <div className="flex lg:flex-1">
      <Link href="/" className="-m-1.5 p-1.5 ">
        <span className="sr-only">Your Company</span>
        <Image
          alt=""
          src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          width={32} // Specify the width here
          height={32} // Specify the height here
          className="h-8 w-auto"
        />
      </Link>
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
              <Button>
                <Link href="/">
                  <span className="sr-only">Your Company</span>
                  <Image
                    alt=""
                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    width={32} // Specify the width here
                    height={32} // Specify the height here
                    className="h-8 w-auto"
                  />
                </Link>
              </Button>
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
              <div className="py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
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
    <section className="bg-accent-blue-600">
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
              Furniture Dreams Meet Expert Touch
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              Kami menawarkan layanan pemasangan furniture profesional untuk
              menciptakan ruang yang nyaman dan fungsional.
            </p>
            <div className="mt-20 flex items-center justify-center gap-x-6">
              <Button
                className="bg-white hover:bg-accent-blue-700 text-blue-500 focus:stroke-blue-400"
                asChild
              >
                <Link href={"/"}>Let&apos;s See</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div> */}
      </div>
    </section>
  );
}
