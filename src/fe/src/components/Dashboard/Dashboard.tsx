import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

import Tag from "@components/Tag/Tag";

import { ITag } from "@interfaces/ITag";

import * as S from "./Dashboard.styles";

const Dashboard: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [getTagsResponse, setGetTagsResponse] = useState<{
    status: string;
    data: ITag[];
  }>({ status: "idle", data: [] });
  const [addTagResponse, setAddTagResponse] = useState<string>("idle");
  const [deleteTagResponse, setDeleteTagResponse] = useState<string>("idle");
  const [inputValue, setInputValue] = useState<string>("");

  const isLoading =
    getTagsResponse.status === "loading" ||
    addTagResponse === "loading" ||
    deleteTagResponse === "loading";

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:4000/tags");
      setGetTagsResponse({ status: "success", data: response.data });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const addNewTag = useCallback(
    async (inputValue: string) => {
      const id = uuid();
      const newTag = { id: id, value: inputValue };
      setAddTagResponse("loading");
      try {
        await axios.post("http://localhost:4000/tags", newTag);
        setAddTagResponse("success");
        fetchData();
      } catch (error) {
        setAddTagResponse("error");
        console.error(error);
      }
      setInputValue("");
    },
    []
  );

  const deleteTag = useCallback(async (id: string) => {
    setDeleteTagResponse("loading");
    try {
      await axios.delete(`http://localhost:4000/tags/${id}`);
      setDeleteTagResponse("success");
      setGetTagsResponse({
        status: "success",
        data: getTagsResponse.data.filter((tag: ITag) => tag.id !== id),
      });
    } catch (error) {
      setDeleteTagResponse("error");
      console.error(error);
    }
  }, [getTagsResponse]);

  useEffect(() => {
    fetchData();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

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

      <S.DashboardTagListHeader>Tags:</S.DashboardTagListHeader>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <S.DashboardTagList>
          {getTagsResponse?.data.map((tag: ITag) => (
            <Tag key={tag.id} tag={tag} deleteTag={deleteTag} />
          ))}
        </S.DashboardTagList>
      )}
    </S.DashboardContainer>
  );
};

export default Dashboard;
