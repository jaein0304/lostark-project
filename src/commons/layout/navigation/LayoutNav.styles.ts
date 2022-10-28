import styled from "@emotion/styled";
import { INavMenuProps } from "./LayoutNav.types";

export const Wrapper = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
  width: 100vw;
  height: 4.5rem;
  box-shadow: 0px 0px 3px 0px #999;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: white;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const MenuName = styled.button`
  color: black;
  border: none;
  font-size: 10px;
  width: 90px;
  height: 5px;
  cursor: pointer;
  background-color: white;
  border: none;
  margin-block: 0.625rem;

  font-weight: ${(props: INavMenuProps) => (props.isActive ? "700" : "400")};
  text-decoration: ${(props: INavMenuProps) => (props.isActive ? "underline" : "none")};
  text-underline-position: ${(props: INavMenuProps) => (props.isActive ? "under" : "none")};
`;
