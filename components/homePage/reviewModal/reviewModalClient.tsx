"use client";
import PhoneInput from "react-phone-input-2";
import { ClosePc, ModalBackdrop } from "../productModal";
import { useRouter } from "next/navigation";
import { useState } from "react";

import "react-phone-input-2/lib/style.css";
import Image from "next/image";
import Link from "next/link";

const ReviewModalClient = ({ onClose }: { onClose?: boolean }) => {
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const closeModal = () => {
    router.push("/"); // Возвращает на главную страницу при закрытии модала
  };

  return (
    <div className="flex items-center justify-center min-h-dvh  w-full md:static fixed top-0 review md:px-0 px-5">
      <ModalBackdrop onClose={onClose ? closeModal : undefined} />
      <div
        className={
          "shadow-lg rounded-[18px] bg-white xl:py-12 xl:px-16 py-8 md:px-10 px-6 relative md:flex xl:gap-12 md:gap-8 gap-6"
        }
      >
        <ClosePc onClose={onClose ? closeModal : undefined} visible={true} />
        <div className="xl:w-[410px] md:w-[266px] w-full">
          <h2 className="xl:text-5xl xl:leading-[56px] xl:mb-6 text-[32px] leading-[37px] font-medium mb-[16px]">
            Ваше мнение важно для нас!
          </h2>
          <p className="xl:text-xl xl:leading-6 md:text-base text-sm md:mb-0 mb-5">
            Оставьте жалобу или предложение — мы учтём каждый отзыв, чтобы стать
            лучше.
          </p>
        </div>
        <div className="xl:w-[509px] md:w-[330px] w-full">
          <form action="" className="w-full">
            <div className="relative border border-[#E7E8E9] rounded-[15px] bg-[#F5F5F5] px-[14px] py-5 xl:h-[80px] h-[52px]">
              <input
                type="text"
                id="name"
                name="name"
                className="peer bg-transparent xl:text-xl leading-5 border-0 xl:pt-2 xl:mt-1"
                placeholder=""
              />
              <label
                htmlFor="name"
                className="text-[#7B8290] xl:text-sm text-[10px] leading-4 block mb-[5px] absolute xl:-translate-y-[52px] -translate-y-9 transition-all delay-50 xl:peer-placeholder-shown:-translate-y-[30px] peer-placeholder-shown:-translate-y-[22px] xl:peer-placeholder-shown:scale-125 peer-placeholder-shown:scale-150 peer-placeholder-shown:translate-x-1 xl:peer-focus:-translate-y-[52px] peer-focus:-translate-y-9 xl:peer-focus:scale-100 peer-focus:scale-100 peer-focus:translate-x-0"
              >
                Имя
              </label>
            </div>
            <div className="relative border border-[#E7E8E9] rounded-[15px] bg-[#F5F5F5] px-[14px] py-5 pt-4 xl:h-[80px] h-[52px] xl:mt-4 mt-2.5">
              <label
                htmlFor="phone"
                className="text-[#7B8290] xl:text-sm text-[10px] leading-4 block mb-[5px] absolute xl:top-[8px] top-[5px]"
              >
                Телефон
              </label>
              <div className="xl:mt-3 mt-[-1px]">
                <PhoneInput
                  country={"ru"} // Стартовая страна
                  value={phone}
                  onChange={(value) => setPhone(value)} // Обновляем состояние при изменении
                  placeholder="+7"
                  inputClass="!w-full !rounded-md !border-0 !text-base !text-black !bg-transparent" // Дополнительные стили
                  buttonClass="!bg-transparent !border-0 hover:!bg-transparent"
                />
              </div>
            </div>
            <div className="relative border border-[#E7E8E9] rounded-[15px] bg-[#F5F5F5] px-[14px] py-5 pt-7 xl:h-[219px] h-[142px] xl:mt-4 mt-2.5">
              <textarea
                id="message"
                name="message"
                className="peer bg-transparent xl:text-xl leading-5 border-0 h-full focus:outline-none"
                placeholder=""
              />
              <label
                htmlFor="message"
                className="text-[#7B8290] xl:text-sm text-[10px] leading-4 block mb-[5px] absolute xl:-translate-y-[196px] -translate-y-[120px] transition-all delay-50 xl:peer-placeholder-shown:-translate-y-[190px] peer-placeholder-shown:-translate-y-[110px] xl:peer-placeholder-shown:scale-125 peer-placeholder-shown:scale-150  xl:peer-placeholder-shown:translate-x-[15px] peer-placeholder-shown:translate-x-[20px] xl:peer-focus:-translate-y-[196px]  peer-focus:-translate-y-[120px] xl:peer-focus:scale-100 peer-focus:scale-100 xl:peer-focus:translate-x-0 peer-focus:translate-x-0"
              >
                Ваш комментарий
              </label>
            </div>
            <div className="mt-5 flex gap-2">
              <input
                type="checkbox"
                name="approval"
                id="approval"
                className="peer hidden"
              />
              <div className="w-[18px] h-[18px] rounded border relative overflow-hidden bg-transparent peer-checked:bg-green flex justify-center items-center transition-colors delay-50">
                <Image
                  src="/checkbox.svg"
                  alt=""
                  width={9}
                  height={6}
                  className=""
                />
              </div>
              <label
                htmlFor="approval"
                className="xl:text-sm text-[12px] xl:leading-5 leading-4"
              >
                Я согласен с обработкой своих{" "}
                <Link href="/" className="text-green font-medium">
                  персональных данных
                </Link>
              </label>
            </div>
            <div className="bg-green py-[15px] px-[21px] md:inline-block text-center text-white md:text-base text-xl rounded-[36px] md:mt-8 mt-5 cursor-pointer">
              Отправить
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewModalClient;

// <div className="flex items-center justify-center min-h-dvh  w-full md:static fixed top-0 review">
// <ModalBackdrop onClose={onClose ? closeModal : undefined} />
// <div
//   className={
//     "shadow-lg rounded-[18px] bg-white xl:py-12 xl:px-16 py-8 md:px-10 px-6 relative flex xl:gap-12 md:gap-8 gap-6"
//   }
// >
//   <ClosePc onClose={onClose ? closeModal : undefined} />
//   <div className="xl:w-[410px] md:w-[266px] w-full">
//     <h2 className="xl:text-5xl xl:leading-[56px] xl:mb-6 text-[32px] leading-[37px] font-medium mb-[16px]">
//       Ваше мнение важно для нас!
//     </h2>
//     <p className="xl:text-xl xl:leading-6">
//       Оставьте жалобу или предложение — мы учтём каждый отзыв, чтобы стать
//       лучше.
//     </p>
//   </div>
//   <div>
//     <form action="" className="w-[509px]">
//       <div className="relative border border-[#E7E8E9] rounded-[15px] bg-[#F5F5F5] px-[14px] py-5 h-[80px]">
//         <input
//           type="text"
//           id="name"
//           name="name"
//           className="peer bg-transparent text-xl leading-5 border-0 pt-3"
//           placeholder=""
//         />
//         <label
//           htmlFor="name"
//           className="text-[#7B8290] text-sm leading-4 block mb-[5px] absolute -translate-y-10 transition-all delay-50 peer-placeholder-shown:-translate-y-6 peer-placeholder-shown:scale-125 peer-placeholder-shown:translate-x-1 peer-focus:-translate-y-10 peer-focus:scale-100 peer-focus:translate-x-0"
//         >
//           Имя
//         </label>
//       </div>
//       <div className="relative border border-[#E7E8E9] rounded-[15px] bg-[#F5F5F5] px-[14px] py-5 pt-7 h-[80px] mt-4">
//         <PhoneInput
//           country={"ru"} // Стартовая страна
//           value={phone}
//           onChange={(value) => setPhone(value)} // Обновляем состояние при изменении
//           placeholder="+7"
//           inputClass="!w-full !rounded-md !border-0 !text-base !text-black !bg-transparent" // Дополнительные стили
//           buttonClass="peer !bg-transparent !border-0 hover:!bg-transparent"
//         />
//         <label
//           htmlFor="phone"
//           className="text-[#7B8290] text-sm leading-4 block mb-[5px] absolute top-[14px] transition-all delay-100 peer-placeholder-shown:top-8 peer-placeholder-shown:scale-125 peer-placeholder-shown:translate-x-1 peer-focus:top-[14px] peer-focus:scale-100 peer-focus:translate-x-0"
//         >
//           Телефон
//         </label>
//       </div>
//       <div className="relative border border-[#E7E8E9] rounded-[15px] bg-[#F5F5F5] px-[14px] py-5 pt-7 h-[219px] mt-4">
//         <textarea
//           id="message"
//           name="message"
//           className="peer bg-transparent text-xl leading-5 border-0 pt-2 h-full focus:outline-none"
//           placeholder=""
//         />
//         <label
//           htmlFor="message"
//           className="text-[#7B8290] text-sm leading-4 block mb-[5px] absolute -translate-y-[190px] transition-all delay-100 peer-placeholder-shown:-translate-y-[185px] peer-placeholder-shown:scale-125 peer-placeholder-shown:translate-x-[14px] peer-focus:-translate-y-[190px] peer-focus:scale-100 peer-focus:translate-x-0 "
//         >
//           Ваш комментарий
//         </label>
//       </div>
//       <div className="mt-5 flex gap-2">
//         <input
//           type="checkbox"
//           name="approval"
//           id="approval"
//           className="peer hidden"
//         />
//         <div className="w-[18px] h-[18px] rounded border relative overflow-hidden bg-transparent peer-checked:bg-green flex justify-center items-center transition-colors delay-50">
//           <Image
//             src="/checkbox.svg"
//             alt=""
//             width={9}
//             height={6}
//             className=""
//           />
//         </div>
//         <label htmlFor="approval" className="text-sm">
//           Я согласен с обработкой своих{" "}
//           <Link href="/" className="text-green font-medium">
//             персональных данных
//           </Link>
//         </label>
//       </div>
//       <div className="bg-green py-[15px] px-[21px] inline-block text-white rounded-none">
//         Отправить
//       </div>
//     </form>
//   </div>
// </div>
// </div>
