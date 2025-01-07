"use client";
import { ModalLoader } from "@/components/homePage/reviewModal/ModalLoader";
import { DialogBody, DialogContent, DialogRoot } from "@/components/ui/dialog";

export default function ReviewModalPage() {
  return (
    <DialogRoot placement="center" defaultOpen={true} size="full">
      <DialogContent>
        <DialogBody
          minHeight="100dvh"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ModalLoader />
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
}
