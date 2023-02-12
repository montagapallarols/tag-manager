import styled from "@emotion/styled";

export const DashboardTagListHeader = styled.div`
color: #767675;
`;

export const DashboardTagForm = styled.form``;

export const DashboardTagInputWrapper = styled.div`
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
`;

export const DashboardTagInput = styled.input`
  height: 50px;
  width: 70%;
  font-size: 16px;
  padding: 14px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;

  ::placeholder {
    font-family: Maven Pro, sans-serif;
  }
`;

export const DashboardTagButton = styled.button`
  height: 50px;
  width: 30%;
  font-size: 16px;
  font-family: Maven Pro, sans-serif;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  background-color: black;
  color: #fff;
  cursor: pointer;

  &:hover{
    background-color: #575757;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.19);
  }
`;

export const DashboardContainer = styled.div`
  margin: 30px;
`;

export const DashboardHeader = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 40px;
`;

export const DashboardTagList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 6px;
  padding: 20px;
`;
