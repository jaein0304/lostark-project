import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;
export const MainWrapper = styled.fieldset`
  border: 1px solid gainsboro;
  box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);
  margin-top: 40px;
  @media ${breakPoints.small} {
    margin: 0px;
  }
`;

export const TitleWrapper = styled.div`
  padding: 1rem;
  margin-top: 20px;
  width: 100%;
  height: 100px;
`;

export const Title = styled.input`
  font-size: 20px;
  width: 100%;
  height: 60px;
  padding: 10px;
  border: 0.5px solid gainsboro;
`;

export const ContentsWrapper = styled.div`
  height: 500px;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid gainsboro;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  margin-bottom: 70px;
`;

export const Margin = styled.div`
  margin-right: 1rem;
`;

export const ImgTitle = styled.h3`
  margin-left: 1rem;
  font-weight: 600;
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  margin-bottom: 50px;
  padding: 1rem;
`;
