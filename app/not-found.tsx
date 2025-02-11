"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <Container>
      <main className="grid min-h-full place-items-center mt-45 px-6 py-24 sm:py-32 lg:px-8 bg-white ">
        <div className="text-center">
          <p className="text-base font-semibold text-accent-blue-600">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-5 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              asChild
              className="bg-accent-blue-500 hover:bg-accent-blue-400"
            >
              <Link href={"/"}>Back To Home</Link>
            </Button>
          </div>
        </div>
      </main>
    </Container>
  );
}
