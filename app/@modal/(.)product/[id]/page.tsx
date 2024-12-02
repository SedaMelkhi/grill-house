import { ProductModal } from "@/app/components/homePage";
import { DialogBody, DialogContent, DialogRoot } from "@/components/ui/dialog";

export default async function ProductModalPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <DialogRoot placement={"center"} defaultOpen={true} size="full">
      <DialogContent>
        <DialogBody
          height={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <ProductModal id={+id} />
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
}
