import ReviewModalClient from "@/components/homePage/reviewModal/reviewModalClient";
import Home from "@/app/page";

export default async function ReviewPage() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-50 ">
        <ReviewModalClient onClose={true} />
      </div>
      <Home />
    </div>
  );
}
