import React from "react";
import { motion } from "framer-motion";
import { AddressItem } from "./addressItem";
import { AddressData } from "./addressModal";

interface AddressDropdownProps {
  addresses: AddressData[];
  onSelect: (address: AddressData) => void;
}

const AddressDropdown = ({ addresses, onSelect }: AddressDropdownProps) => (
  <motion.ul
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: "auto", opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.3 }}
    style={{
      position: "absolute",
      width: "100%",
      background: "white",
      border: "1px solid #ccc",
      borderRadius: "4px",
      overflow: "hidden",
      zIndex: 1000,
    }}
  >
    {addresses.map((address, index) => (
      <AddressItem key={index} address={address} onSelect={onSelect} />
    ))}
  </motion.ul>
);

AddressDropdown.displayName = "AddressDropdown";

export { AddressDropdown };
