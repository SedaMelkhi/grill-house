import Image from "next/image";
import { Container } from "../../shared";
import { HeaderStepper } from "..";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="xl:block hidden py-4 shadow-cartHeader">
      <Container>
        <div className="flex justify-between">
          <Link href="/">
            <Image src="/logo.png" alt="grill_house" width={228} height={84} />
          </Link>
          <HeaderStepper />
        </div>
      </Container>
    </header>
  );
};
