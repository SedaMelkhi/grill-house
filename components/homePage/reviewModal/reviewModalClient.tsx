"use client";
import { ClosePc, ModalBackdrop } from "../productModal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FeedbackService } from "@/services";
import { InputPhone } from "./inputPhone";
import { NameInput } from "./nameInput";
import { InputComment } from "./inputComment";
import { CheckboxApproval } from "./checkboxApproval";
import { cn } from "@/lib/utils";
import "react-phone-input-2/lib/style.css";

const ReviewModalClient = ({ onClose }: { onClose?: boolean }) => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [approval, setApproval] = useState(false);
  const [error, setError] = useState("");
  const [isSend, setIsSend] = useState(false);
  const router = useRouter();
  const closeModal = () => {
    router.push("/"); // Возвращает на главную страницу при закрытии модала
  };

  const sendData = async () => {
    setIsSend(false);
    if (approval) {
      const res = await FeedbackService.sendFeedback({ phone, name, comment });
      console.log(res);
      if (res.type === "error") {
        setError("Ошибка запроса: " + res.message);
      } else {
        setError("");
        setIsSend(true);
      }
    }
  };
  console.log(approval);

  return (
    <div className="flex items-center justify-center min-h-dvh  w-full md:static fixed top-0 review md:px-0 px-5">
      <ModalBackdrop onClose={onClose ? closeModal : undefined} />
      <div
        className={
          "shadow-lg rounded-[18px] bg-white xl:py-12 xl:px-16 py-8 md:px-10 px-6 relative md:flex xl:gap-12 md:gap-8 gap-6"
        }
      >
        <ClosePc onClose={onClose ? closeModal : undefined} visible={true} />
        {!isSend ? (
          <>
            <div className="xl:w-[410px] md:w-[266px] w-full">
              <h2 className="xl:text-5xl xl:leading-[56px] xl:mb-6 text-[32px] leading-[37px] font-medium mb-[16px]">
                Ваше мнение важно для нас!
              </h2>
              <p className="xl:text-xl xl:leading-6 md:text-base text-sm md:mb-0 mb-5">
                Оставьте жалобу или предложение — мы учтём каждый отзыв, чтобы
                стать лучше.
              </p>
            </div>
            <div className="xl:w-[509px] md:w-[330px] w-full">
              <form action="" className="w-full">
                <NameInput name={name} setName={setName} />
                <InputPhone setPhone={setPhone} phone={phone} />
                <InputComment comment={comment} setComment={setComment} />
                <CheckboxApproval
                  approval={approval}
                  setApproval={setApproval}
                />
                <div className="text-red">{error}</div>
                <div
                  className={cn(
                    "bg-green py-[15px] px-[21px] md:inline-block text-center text-white md:text-base text-xl rounded-[36px] md:mt-8 mt-5 cursor-pointer",
                    comment.length === 0 && "pointer-events-none opacity-60",
                    !approval && "pointer-events-none opacity-60"
                  )}
                  onClick={sendData}
                >
                  Отправить
                </div>
              </form>
            </div>
          </>
        ) : (
          <div className="flex justify-between md:gap-10 gap-5 md:flex-row flex-col">
            <div className="xl:max-w-[410px] md:max-w-[265px] max-w-[250px]">
              <h2 className="xl:text-5xl text-3xl xl:mb-6 mb-4 font-medium">
                Ваше мнение важно для нас!
              </h2>
              <p className="xl:text-xl text-sm xl:leading-6">
                Оставьте жалобу или предложение — мы учтём каждый отзыв, чтобы
                стать лучше.
              </p>
            </div>
            <div className="xl:max-w-[437px] md:max-w-[293px] xl:text-xl text-sm xl:leading-6">
              Спасибо за обратную связь! Мы обязательно учтем каждый отзыв,
              спасибо что помогаете стать нам лучше!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewModalClient;
