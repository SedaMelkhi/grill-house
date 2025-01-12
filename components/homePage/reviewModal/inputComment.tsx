import React from "react";

export const InputComment = ({
  comment,
  setComment,
}: {
  comment: string;
  setComment: (prev: string) => void;
}) => {
  return (
    <div className="relative border border-[#E7E8E9] rounded-[15px] bg-[#F5F5F5] px-[14px] py-5 pt-7 xl:h-[219px] h-[142px] xl:mt-4 mt-2.5">
      <textarea
        id="message"
        name="message"
        className="peer bg-transparent xl:text-xl leading-5 border-0 h-full focus:outline-none"
        placeholder=""
        value={comment}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setComment(e.target.value)
        }
      />
      <label
        htmlFor="message"
        className="text-[#7B8290] xl:text-sm text-[10px] leading-4 block mb-[5px] absolute xl:-translate-y-[196px] -translate-y-[120px] transition-all delay-50 xl:peer-placeholder-shown:-translate-y-[190px] peer-placeholder-shown:-translate-y-[110px] xl:peer-placeholder-shown:scale-125 peer-placeholder-shown:scale-150  xl:peer-placeholder-shown:translate-x-[15px] peer-placeholder-shown:translate-x-[20px] xl:peer-focus:-translate-y-[196px]  peer-focus:-translate-y-[120px] xl:peer-focus:scale-100 peer-focus:scale-100 xl:peer-focus:translate-x-0 peer-focus:translate-x-0"
      >
        Ваш комментарий
      </label>
    </div>
  );
};
