import { ITag } from "@interfaces/ITag";
import axios from "axios";
import Image from "next/image";
import React, { useCallback, useState } from "react";

import Close from "../../../public/assets/close.svg";

import * as S from "./Tag.styles";

interface TagProps {
  tag: ITag;
  deleteTag: (id: string) => void;
}

const Tag: React.FC<TagProps> = ({ tag, deleteTag }) => {
  const onClickRemove = (id: string) => {
    deleteTag(id);
  };

  return (
    <S.TagContainer>
      {tag?.value}
      <S.TagRemoveButton onClick={() => onClickRemove(tag.id)}>
        <Image src={Close} alt="close" height={15} width={15} />
      </S.TagRemoveButton>
    </S.TagContainer>
  );
};

export default Tag;
