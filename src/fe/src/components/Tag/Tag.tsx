import React from "react";
import Image from "next/image";

import { ITag } from "@interfaces/ITag";

import * as S from "./Tag.styles";
import Close from "../../../public/assets/close.svg";

interface TagProps {
  tag: ITag;
  deleteTag: (id: string) => void;
}

const Tag: React.FC<TagProps> = ({ tag, deleteTag }) => {

  const onClickRemove = (id: string) => {
    deleteTag(id);
  };

  return (
    <S.TagContainer data-testid="tag">
      {tag?.value}
      <S.TagRemoveButton onClick={() => onClickRemove(tag.id)} data-testid="tag-remove-button">
        <Image src={Close} alt="close" height={15} width={15} />
      </S.TagRemoveButton>
    </S.TagContainer>
  );
};

export default Tag;
