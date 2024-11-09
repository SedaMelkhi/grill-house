import Image from "next/image";
import { Container } from "../shared";
import { HeaderStepper } from ".";

export const Header = () => {
  return (
    <header className="xl:block hidden py-4 shadow-cartHeader">
      <Container>
        <div className="flex justify-between">
          <Image src="/logo.png" alt="grill_house" width={228} height={84} />
          <HeaderStepper />
        </div>
      </Container>
    </header>
  );
};
