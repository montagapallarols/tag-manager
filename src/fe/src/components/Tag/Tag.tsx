import React from "react";

import * as S from "./Tag.styles";

interface TagProps {
    value: string;
}

const Tag: React.FC<TagProps> = ({ value }) => {
  return <S.TagContainer>{value}</S.TagContainer>;
};

export default Tag;
