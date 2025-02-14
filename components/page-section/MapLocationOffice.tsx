// components/Map.js
import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css"; // See notes below
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export default function MapLocationOffice() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const lng = 107.0265783;
  const lat = -6.3429081;
  const zoom = 20;
  const API_KEY = "if3XRVDh4zXvKejCPHhn";

  useEffect(() => {
    if (map.current) return; // stops map from initializing more than once

    // Ensure mapContainer.current is not null
    if (mapContainer.current) {
      map.current = new maplibregl.Map({
        container: mapContainer.current, // This is now guaranteed to be an HTMLElement
        style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
        center: [lng, lat],
        zoom: 14,
      });

      map.current.addControl(new maplibregl.NavigationControl(), "top-right");
      new maplibregl.Marker({ color: "#FF0000" })
        .setLngLat([107.0265783, -6.3429081])
        .addTo(map.current);
    }
  }, [API_KEY, lng, lat, zoom]);

  return (
    <Container>
      <div className="py-12 lg:py-18 px-8 gap-2 h-150 lg:h-200">
        <div>
          <p className="font-medium text-accent-blue-500 dark:text-accent-blue-400 ">
            Lokasi
          </p>

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white ">
            Lokasi Kantor Kami
          </h1>
        </div>

        <Card className="h-100 lg:h-150 w-full max-w-8xl mt-10 shadow-lg p-4">
          <div ref={mapContainer} className="w-full h-full " />
        </Card>
      </div>
    </Container>
  );
}
