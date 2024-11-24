import React from "react";
import { motion } from "framer-motion";
import { AddressData } from "./addressModal";

interface AddressItemProps {
  address: AddressData;
  onSelect: (address: AddressData) => void;
}

const AddressItem = ({ address, onSelect }: AddressItemProps) => (
  <motion.li
    onClick={() => onSelect(address)}
    style={{
      padding: "8px 12px",
      cursor: "pointer",
      borderBottom: "1px solid #eee",
      color: "#333",
    }}
    whileHover={{ backgroundColor: "#f5f5f5" }}
  >
    {address.value}
  </motion.li>
);

AddressItem.displayName = "AddressItem";

export { AddressItem };
