import Image from "next/image";
import Link from "next/link";
import React from "react";

export const CheckboxApproval = ({
  approval,
  setApproval,
}: {
  approval: boolean;
  setApproval: (prev: boolean) => void;
}) => {
  return (
    <label className="mt-5 flex gap-2">
      <input
        type="checkbox"
        name="approval"
        checked={approval}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setApproval(e.target.checked)
        }
        className="peer hidden"
      />
      <div className="w-[18px] h-[18px] rounded border relative overflow-hidden bg-transparent peer-checked:bg-green flex justify-center items-center transition-colors delay-50">
        <Image src="/checkbox.svg" alt="" width={9} height={6} className="" />
      </div>
      <div className="xl:text-sm text-[12px] xl:leading-5 leading-4">
        Я согласен с обработкой своих{" "}
        <Link href="/" className="text-green font-medium">
          персональных данных
        </Link>
      </div>
    </label>
  );
};
