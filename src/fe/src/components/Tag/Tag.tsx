import React, { useState } from "react";
import Image from "next/image";

import { ITag } from "@interfaces/ITag";

import * as S from "./Tag.styles";
import Close from "../../../public/assets/close.svg";

interface TagProps {
  tag: ITag;
  deleteTag: (id: string) => void;
  tagToEdit: string;
  editTag: (id: string, value: string) => void;
  setTagToEdit: (tagToEdit: string) => void;
}

const Tag: React.FC<TagProps> = ({ tag, deleteTag, tagToEdit, editTag, setTagToEdit }) => {
  const [editValue, setEditValue] = useState<string>(tag.value);
  const onClickRemove = (id: string) => {
    deleteTag(id);
  };

  const submitEditedValue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTag(tag.id, editValue)
    setTagToEdit("")
  }

  return (
    <S.TagContainer data-testid="tag">
      {tagToEdit === tag.id ? (
        <S.TagEditForm onSubmit={submitEditedValue}>
        <S.TagEditInput
          value={editValue}
          type="text"
          name="edit-tag"
          aria-label="Edit tag"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditValue(e.target.value)
          }
        />
        </S.TagEditForm>
      ) : (
        tag?.value
      )}
      <S.TagRemoveButton
        onClick={() => onClickRemove(tag.id)}
        data-testid="tag-remove-button"
      >
        <Image src={Close} alt="close" height={15} width={15} />
      </S.TagRemoveButton>
    </S.TagContainer>
  );
};

export default Tag;
