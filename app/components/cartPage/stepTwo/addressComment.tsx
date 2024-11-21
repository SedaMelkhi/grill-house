import React from "react";
import { Field } from "@/components/ui/field";
import { Input } from "@chakra-ui/react";

interface AddressCommentProps {
  comment: string;
  setComment: (value: string) => void;
}

export const AddressComment: React.FC<AddressCommentProps> = ({
  comment,
  setComment,
}) => {
  return (
    <div className="md:mt-[14px] mt-3">
      <Field invalid label="" errorText="">
        <Input
          className="border rounded-md p-3 text-sm focus:border-green placeholder-[#7B8290] text-green min-h-[43px]"
          placeholder="Комментарий к адресу"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </Field>
    </div>
  );
};

AddressComment.displayName = "AddressComment";
