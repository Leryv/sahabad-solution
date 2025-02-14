"use client";
import Contact from "@/components/page-section/Contact";
import Hero from "@/components/page-section/Hero";
import Promo from "@/components/page-section/Promo";
import ServicePrice from "@/components/page-section/ServicePrice";
import dynamic from "next/dynamic";

export default function Home() {
  const MapLocationOffice = dynamic(
    () => import("@/components/page-section/MapLocationOffice"),
    {
      ssr: false, // Disable server-side rendering
    }
  );

  return (
    <div>
      <Hero />
      <Promo />
      <ServicePrice />
      <Contact />
      <MapLocationOffice />
    </div>
  );
}
