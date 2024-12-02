import { ProductModal } from "@/app/components/homePage";
import Home from "@/app/page";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-50">
        <ProductModal id={+id} />
      </div>
      <Home />
    </div>
  );
}
