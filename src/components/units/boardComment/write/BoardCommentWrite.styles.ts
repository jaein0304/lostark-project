import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
`;

export const CommentTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  @media ${breakPoints.mobile} {
    justify-content: space-between;
  }
`;

export const ContentsWrapper = styled.div`
  border: 1px solid lightgray;
`;

export const Input = styled.input`
  width: 11.25rem;
  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 1rem;
  @media ${breakPoints.mobile} {
    margin: 0px;
  }
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  resize: none;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid lightgray;
`;

export const ContentsLength = styled.div`
  width: 100%;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;

export const Button = styled.button`
  width: 5rem;
  background-color: #2b2b2b;
  color: white;
  cursor: pointer;
  border: none;
`;
