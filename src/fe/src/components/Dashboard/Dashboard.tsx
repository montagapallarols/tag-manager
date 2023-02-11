import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { ITag } from "@interfaces/ITag";

import * as S from "./Dashboard.styles";
import Tag from "@components/Tag/Tag";

const Dashboard: React.FC = () => {
  const [data, setData] = useState("");

  const fetchData = useCallback(async () => {
    axios
      .get("http://localhost:4000/tags")
      .then((response) => setData(response.data));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const tags = [
    { value: "JavaScript" },
    { value: "React" },
    { value: "TypeScript" },
    { value: "Next.js" },
  ];

  console.log("DATA", data)

  return (
    <S.DashboardContainer>
      <S.DashboardHeader>Tag Manager</S.DashboardHeader>

      <S.DashboardAddTagButton>Add tag</S.DashboardAddTagButton>

      <S.DashboardTagList>
        {tags.map((tag: ITag) => (
          <Tag value={tag.value} />
        ))}
      </S.DashboardTagList>
    </S.DashboardContainer>
  );
};

export default Dashboard;
