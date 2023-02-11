import React from "react";
import { ITag } from "@interfaces/ITag";

import * as S from "./Dashboard.styles";
import Tag from "@components/Tag/Tag";

const Dashboard: React.FC = () => {

  const tags = [
    { value: "JavaScript" },
    { value: "React" },
    { value: "TypeScript" },
    { value: "Next.js" },
  ];

  return (
    <div>
      <S.DashboardHeader>Tag Manager</S.DashboardHeader>

      <S.DashboardTagList>
      {tags.map((tag: ITag) => <Tag value={tag.value}/>)}
      </S.DashboardTagList>
    </div>
  );
};

export default Dashboard;
