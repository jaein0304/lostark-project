import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 375px;
  height: auto;
  margin: 50px 0px 10px 0px;
  min-height: 600px;
  @media screen and (min-width: 1920px) {
    min-height: 750px;
    max-width: 500px;
  }
  @media ${breakPoints.small} {
    min-height: 400px;
  }
`;

export const Logo = styled.img`
  width: 300px;
  height: 70px;
  /* margin: 0 1rem 0 1rem; */
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-top: 20px;
`;

export const Input = styled.input`
  height: 43px;
  border: 1px solid gainsboro;
  text-indent: 10px;
  outline: 1px solid gainsboro;
`;

export const Error = styled.div`
  color: red;
`;

export const Button = styled.button`
  height: 43px;
  margin-top: 43px;
  border: none;
  background-color: #2b2b2b;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  /* margin-bottom: 50px; */
`;
