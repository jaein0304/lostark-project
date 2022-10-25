import styled from "@emotion/styled";

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
`;

export const LogoWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  padding: 0 1em;
  cursor: pointer;
`;

export const HeaderName = styled.header`
  margin: 0.8rem;
  color: white;
  :hover {
    font-family: "headerBoldFont";
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;
