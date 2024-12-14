// pages/@modal/product/[id]/page.tsx
"use client";
//import { useRouter } from "next/navigation";
import { ModalLoader } from "@/components/homePage/productModal/ModalLoader";
import { DialogBody, DialogContent, DialogRoot } from "@/components/ui/dialog";

export default function ProductModalPage({
  params: { id },
}: {
  params: { id: number };
}) {
  // const router = useRouter();

  // const closeModal = () => {
  //   router.back();
  // };

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
