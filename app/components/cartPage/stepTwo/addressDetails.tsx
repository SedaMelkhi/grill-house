import React from "react";
import { Box, Input } from "@chakra-ui/react";

interface AddressDetailsProps {
  entranceNumber: string;
  setEntranceNumber: (value: string) => void;
  doorCode: string;
  setDoorCode: (value: string) => void;
  floor: string;
  setFloor: (value: string) => void;
  apartment: string;
  setApartment: (value: string) => void;
}

export const AddressDetails: React.FC<AddressDetailsProps> = ({
  entranceNumber,
  setEntranceNumber,
  doorCode,
  setDoorCode,
  floor,
  setFloor,
  apartment,
  setApartment,
}) => {
  const inputStyles = {
    className:
      "border rounded-md p-3 text-base focus:border-green placeholder-[#7B8290] text-green min-h-[43px]",
  };

  return (
    <div className="md:mt-[14px] mt-3">
      <Box>
        {/* Первая строка */}
        <div className="md:mb-[14px] mb-3">
          <Box display="flex">
            <Box width="calc(50% - 4.5px)" mr="9px">
              <Input
                {...inputStyles}
                placeholder="Номер подъезда"
                value={entranceNumber}
                onChange={(e) => setEntranceNumber(e.target.value)}
              />
            </Box>
            <Box width="calc(50% - 4.5px)">
              <Input
                {...inputStyles}
                placeholder="Код двери"
                value={doorCode}
                onChange={(e) => setDoorCode(e.target.value)}
              />
            </Box>
          </Box>
        </div>
        {/* Вторая строка */}
        <Box display="flex">
          <Box width="calc(50% - 4.5px)" mr="9px">
            <Input
              {...inputStyles}
              placeholder="Этаж"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
            />
          </Box>
          <Box width="calc(50% - 4.5px)">
            <Input
              {...inputStyles}
              placeholder="Квартира"
              value={apartment}
              onChange={(e) => setApartment(e.target.value)}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

AddressDetails.displayName = "AddressDetails";
