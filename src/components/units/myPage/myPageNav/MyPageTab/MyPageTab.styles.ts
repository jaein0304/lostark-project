import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

interface ISideMenuProps {
  isActive: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 55px;
  color: #b1b3b6;
  background-color: #414753;
`;

export const Page = styled.div`
  width: 20%;
  height: 55px;
`;
export const Current = styled.button`
  width: 100%;
  height: 100%;
  font-size: 1.5em;
  cursor: pointer;
  border: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${(props: ISideMenuProps) => (props.isActive ? "white" : "#414753")};
  color: ${(props: ISideMenuProps) => (props.isActive ? "black" : "#b1b3b6")};

  @media ${breakPoints.mobile} {
    font-size: 14px;
  }
`;
