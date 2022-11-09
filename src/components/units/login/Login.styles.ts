import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Button = styled.button`
  height: 43px;
  border: none;
  background-color: #2b2b2b;
  color: white;
  font-size: 14px;
  font-weight: 600;
  /* margin: 20px 0 50px 0; */
  margin-top: 20px;
  cursor: pointer;
`;

export const SignUp = styled.div`
  cursor: pointer;
  :hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  height: 100px;
  @media ${breakPoints.small} {
    height: auto;
  }
`;
