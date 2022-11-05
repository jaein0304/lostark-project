import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 30px;
`;

interface IPageProps {
  isActive?: boolean;
}

export const Page = styled.span`
  margin: 0px 10px;
  width: 35px;
  height: 35px;
  padding: 7px;
  text-align: center;
  background-color: ${(props: IPageProps) => (props.isActive ? "#222" : "white")};
  color: ${(props: IPageProps) => (props.isActive ? "white" : "black")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  :hover {
    background-color: #888;
    color: white;
  }
  cursor: pointer;
  @media ${breakPoints.small} {
    margin: 0px 2px;
    width: 2rem;
    height: 2rem;
  }
`;
