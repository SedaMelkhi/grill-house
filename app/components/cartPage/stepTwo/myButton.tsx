import { Button } from "@/components/ui/button";
import React from "react";

export const MyButton = ({ value }: { value: string }) => {
  return (
    <Button
      type="submit"
      mt={4}
      className="h-[46px] rounded-[48px] bg-green text-white w-full "
    >
      {value}
    </Button>
  );
};
