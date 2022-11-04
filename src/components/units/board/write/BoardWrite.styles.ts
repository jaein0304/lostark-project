import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

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
export const Row = styled.div`
  width: 100%;
  height: 50px;
  padding: 0px 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Column = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Writer = styled.input`
  width: 95%;
  padding: 10px;
  border: 0.5px solid gainsboro;
  font-size: 14px;
`;

export const Password = styled.input`
  width: 100%;
  padding: 10px;
  border: 0.5px solid gainsboro;
  font-size: 14px;
`;

export const ContentsWrapper = styled.div`
  height: 500px;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid gainsboro;
`;

export const Contents = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  margin: 30px 0px 70px 0px;
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

export const YoutubeWrapper = styled.div`
  padding: 1rem;
  margin-top: 20px;
  width: 100%;
  height: 100px;
`;

export const Youtube = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid gainsboro;
  padding: 10px;
`;

export const Error = styled.div`
  padding-top: 5px;
  font-size: 12px;
  color: red;
`;

export const ContentsError = styled(Error)`
  padding-left: 1rem;
`;
