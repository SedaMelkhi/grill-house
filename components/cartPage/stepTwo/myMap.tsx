"use client";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";
import { AddressData } from "./addressModal";

export const MyMap = ({
  selectedAddress,
}: {
  selectedAddress: AddressData | null;
}) => {
  const [mapState, setMapState] = useState({
    center: [43.3178, 45.6983], // Начальная точка (Грозный)
    zoom: 12, // Начальный масштаб
  });

  useEffect(() => {
    if (selectedAddress?.data?.geo_lat && selectedAddress?.data?.geo_lon) {
      setMapState({
        center: [+selectedAddress.data.geo_lat, +selectedAddress.data.geo_lon],
        zoom: 16, // Более высокий уровень масштабирования для подробного адреса
      });
    }
  }, [selectedAddress]);

  return (
    <div className="">
      <YMaps>
        <div className="md:h-full h-[100%] md:w-[54%] w-full right-0 absolute top-0 map">
          <Map state={mapState} width="100%" height="100%">
            {selectedAddress?.data?.geo_lat &&
              selectedAddress?.data?.geo_lon && (
                <Placemark
                  geometry={[
                    +selectedAddress.data.geo_lat,
                    +selectedAddress.data.geo_lon,
                  ]}
                />
              )}
          </Map>
        </div>
      </YMaps>
    </div>
  );
};
