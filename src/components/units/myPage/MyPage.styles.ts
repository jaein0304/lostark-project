import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoWrapper = styled.article`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 250px;
  color: #2b2b2b;
  background-color: rgb(30, 34, 42);
  padding: 42px;
  @media ${breakPoints.mobile} {
    height: 300px;
  }
`;

export const Info = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  width: 100px;
  height: 100px;
`;
export const Profile = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 2rem;
  @media ${breakPoints.mobile} {
    margin: 0px;
    margin-bottom: 10px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media ${breakPoints.mobile} {
    margin-top: 50px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  @media ${breakPoints.mobile} {
    align-items: center;
    justify-content: center;
  }
`;

export const Name = styled.h1`
  font-size: 1.625em;
  font-weight: 300;
  color: #ddd;
`;

export const ChangePW = styled.button`
  width: 7.5rem;
  height: 30px;
  border: rgb(30, 34, 42);
  border-radius: 10px;
  background-color: #2b2b2b;
  color: #ddd;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid #ddd;
`;

export const Crystal = styled.div`
  width: 37px;
  height: 43px;
  margin: 0 10px 20px 0px;
  background-position: -1185px -44px;
  background-size: 1273px 1239px;
  background-image: url("https://cdn-lostark.game.onstove.com/2018/obt/assets/images/pc/sprite/sprite.png?b2d4895908632ffdc5e9a39f3a642151");
`;

export const PointWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  @media ${breakPoints.mobile} {
    margin: 0px;
    margin-top: 10px;
  }
`;

export const Point = styled.h1`
  font-family: "HeaderFont";
  color: #ddd;
  font-size: 36px;
  font-weight: 400;
  text-align: center;
  @media ${breakPoints.mobile} {
    font-size: 24px;
  }
`;

export const ChargeBtn = styled.button`
  width: 3rem;
  height: 30px;
  border: rgb(30, 34, 42);
  border-radius: 10px;
  background-color: #2b2b2b;
  color: #ddd;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid #ddd;
  margin-left: 1em;
  margin-bottom: 1em;
  @media ${breakPoints.mobile} {
    margin-top: 8px;
  }
`;
