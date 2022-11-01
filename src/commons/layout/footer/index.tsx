import styled from "@emotion/styled";
import { breakPoints } from "../../styles/media";

export default function LayoutFooter() {
  return (
    <Wrapper>
      <Info>E-MAIL | jaein980304@gmail.com</Info>
      <Contents>
        ©This page has been created for portfolio use only, isn’t endorsed by Smilegate RPG and
        doesn’t reflect the views or opinions of Smilegate RPG or anyone officially involved in
        producing or managing Lostark.
      </Contents>
      <Contents>
        Lostark and Smilegate RPG are trademarks or registered trademarks of Smilegate RPG, Inc.
        Lostark © Smilegate RPG, Inc.
      </Contents>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #b5b5b5;
  background-color: black;
  padding: 50px 10px;
  font-family: "proximaNova";
  @media ${breakPoints.small} {
    display: none;
  }
`;

export const Contents = styled.div`
  padding: 0 3rem;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

export const Info = styled.div`
  font-size: 14px;
  padding-bottom: 10px;
`;
