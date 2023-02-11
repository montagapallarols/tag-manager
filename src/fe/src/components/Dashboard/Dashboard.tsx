import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { ITag } from "@interfaces/ITag";

import * as S from "./Dashboard.styles";
import Tag from "@components/Tag/Tag";

const Dashboard: React.FC = () => {
  const [tags, setTags] = useState<ITag[]>([]);
  const [addTagResponse, setAddTagResponse] = useState<string>();
  const [inputValue, setInputValue] = useState<string>("");

  const fetchData = useCallback(async () => {
    axios
      .get("http://localhost:4000/tags")
      .then((response) => setTags(response.data));
  }, []);

  const addNewTag = useCallback(async (inputValue: string) => {
    const newTag = { id: "5", value: inputValue };
    setAddTagResponse("loading")
    axios
      .post("http://localhost:4000/tags", newTag)
      .then((response) => setAddTagResponse(response.data));
    setInputValue("");
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (addTagResponse === "error") return;
    if (addTagResponse === "success") {
      fetchData();
    }
  }, [addTagResponse]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTag(inputValue);
  };

  return (
    <S.DashboardContainer>
      <S.DashboardHeader>Tag Manager</S.DashboardHeader>

      <S.DashboardTagForm onSubmit={handleSubmit}>
        <S.DashboardTagInputWrapper>
          <S.DashboardTagInput
            type="text"
            name="tag"
            aria-required="true"
            aria-label="Add tag"
            autoFocus
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

      <S.DashboardTagListHeader>Tags:</S.DashboardTagListHeader>

      {addTagResponse === "loading" && <div>Loading.....</div>}

      <S.DashboardTagList>
        {tags.map((tag: ITag) => (
          <Tag value={tag?.value} />
        ))}
      </S.DashboardTagList>
    </S.DashboardContainer>
  );
};

export default Dashboard;
