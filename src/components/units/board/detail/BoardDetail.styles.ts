import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0px;
  min-height: 500px;
  @media ${breakPoints.small} {
    margin: 30px 10px;
    margin-bottom: 100px;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h2`
  font-weight: 600;
  color: #222;
`;

export const Writer = styled.div`
  margin-top: 3px;
  font-size: 15px;
  color: #888;
  margin-right: 5px;
`;

export const CreatedAt = styled.div`
  margin-top: 3px;
  font-size: 15px;
  color: #888;
`;

export const ContentsWrapper = styled.section``;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Images = styled.img`
  max-width: 1200px;
  max-height: 1200px;
  margin: 30px;
`;

export const Contents = styled.div`
  line-height: 30px;
`;

export const LikeButtonWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const LikeButton = styled.button`
  width: 8rem;
  height: 50px;
  border: 1px solid gainsboro;
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LikeCount = styled.span`
  font-size: 20px;
  margin-left: 5px;
  line-height: 10px;
`;

export const FlexEnd = styled.section``;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 50px 0px 30px 0px;
  @media ${breakPoints.small} {
    justify-content: center;
  }
`;
