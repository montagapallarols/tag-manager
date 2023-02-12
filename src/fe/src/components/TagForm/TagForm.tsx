import React, { useEffect, useRef, useState } from "react";

import * as S from "./TagForm.styles";

interface TagFormProps {
  onSubmit: (inputValue: string) => void;
}

const TagForm: React.FC<TagFormProps> = ({ onSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <S.DashboardTagForm onSubmit={handleSubmit}>
      <S.DashboardTagInputWrapper>
        <S.DashboardTagInput
          ref={inputRef}
          type="text"
          name="tag"
          aria-required="true"
          aria-label="Add tag"
          placeholder="Add new tag..."
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
        ></S.DashboardTagInput>
        <S.DashboardTagButton
          type="submit"
          title="Add new tag"
          aria-label="Add tag"
          disabled={!inputValue}
        >
          Add tag
        </S.DashboardTagButton>
      </S.DashboardTagInputWrapper>
    </S.DashboardTagForm>
  );
};

export default TagForm;
