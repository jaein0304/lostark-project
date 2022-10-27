import styled from "@emotion/styled";
import { breakPoints } from "../../styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  height: 60px;
  background-color: black;
`;

export const LostLogo = styled.img`
  width: 192px;
  height: 46px;
  @media ${breakPoints.small} {
    width: 43px;
  }
`;

export const LogoWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  padding: 0 2rem;
  cursor: pointer;
  @media ${breakPoints.small} {
    padding: 0 1rem;
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-flow: row wrap;
`;

export const HeaderName = styled.header`
  margin: 0.8rem;
  color: white;
  :hover {
    font-family: "headerBoldFont";
    text-decoration: underline;
    text-underline-offset: 5px;
  }
  @media ${breakPoints.small} {
    display: none;
  }
`;

export const GameStart = styled(HeaderName)`
  padding: 0 2rem;
  justify-content: flex-end;
  @media ${breakPoints.small} {
    display: block;
    width: 60px;
    padding: 0;
  }
`;
