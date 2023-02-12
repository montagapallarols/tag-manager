import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

import Tag from "@components/Tag/Tag";
import TagForm from "@components/TagForm/TagForm";

import { ITag } from "@interfaces/ITag";
import { States } from "@enums/states";

import * as S from "./Dashboard.styles";

const Dashboard: React.FC = () => {
  const [tags, setTags] = useState<ITag[]>([]);
  const [status, setStatus] = useState<States>(States.IDLE);
  const [addTagStatus, setAddTagStatus] = useState<States>(States.IDLE);
  const [deleteTagStatus, setDeleteTagStatus] = useState<States>(States.IDLE);

  const baseUrl = "http://localhost:4000";

  const isLoading = status === "loading";
  const isError = addTagStatus === "error" || deleteTagStatus === "error";

  const fetchData = useCallback(async () => {
    setStatus(States.LOADING);
    try {
      const response = await axios.get(`${baseUrl}/tags`);
      setTags(response.data);
      setStatus(States.SUCCESS);
    } catch (error) {
      setStatus(States.ERROR);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const addNewTag = useCallback(
    async (inputValue: string) => {
      const id = uuid();
      const newTag = { id: id, value: inputValue };
      setAddTagStatus(States.LOADING);
      try {
        await axios.post(`${baseUrl}/tags`, newTag);
        setAddTagStatus(States.SUCCESS);
        fetchData();
      } catch (error) {
        setAddTagStatus(States.ERROR);
      }
    },
    [fetchData]
  );

  const deleteTag = useCallback(
    async (id: string) => {
      setDeleteTagStatus(States.LOADING);
      try {
        await axios.delete(`${baseUrl}/tags/${id}`);
        setDeleteTagStatus(States.SUCCESS);
        // Update tags list after delete
        setTags((prevTags: ITag[]) => prevTags.filter((tag: ITag) => tag.id !== id));
      } catch (error) {
        setDeleteTagStatus(States.ERROR);
      }
    },
    [tags]
  );

  return (
    <S.DashboardContainer>
      <S.DashboardHeader>Tag Manager</S.DashboardHeader>

      <TagForm onSubmit={addNewTag} />

      <S.DashboardTagListHeader>Tags:</S.DashboardTagListHeader>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <S.DashboardTagList>
          {tags?.map((tag: ITag) => (
            <Tag key={tag.id} tag={tag} deleteTag={deleteTag} />
          ))}
        </S.DashboardTagList>
      )}
      
      {isError && <div>Something went wrong. Please try again.</div>}
    </S.DashboardContainer>
  );
};

export default Dashboard;
