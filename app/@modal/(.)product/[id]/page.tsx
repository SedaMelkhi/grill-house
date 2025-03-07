"use client";
import { ModalLoader } from "@/components/homePage/productModal/ModalLoader";
import { DialogBody, DialogContent, DialogRoot } from "@/components/ui/dialog";

export default function ProductModalPage({
  params: { id },
}: {
  params: { id: number };
}) {
  return (
    <DialogRoot placement="center" defaultOpen={true} size="full">
      <DialogContent>
        <DialogBody
          minHeight="100dvh"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ModalLoader id={+id} />
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
}
