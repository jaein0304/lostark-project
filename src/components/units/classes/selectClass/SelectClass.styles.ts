import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto auto;
  grid-template-columns: repeat(5, 1fr);
  max-width: none;
  margin: 0 auto;
  padding-top: 50px;

  // 내부 스크롤 만들고 숨기기
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none !important;
  }

  @media ${breakPoints.small} {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: repeat(5, 160px);
    max-width: 500px;
  }
`;

export const SelectClass = styled.a`
  position: relative;
  padding-bottom: 223%;
  border-bottom-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(
      rgba(138, 137, 138, 0.1),
      rgba(255, 255, 255, 0.38),
      rgba(138, 137, 138, 0.1)
    )
    0 1 / 1 / 0 stretch;
  height: auto;
  cursor: pointer;
  overflow: hidden;
  grid-row-start: 1;
  @media ${breakPoints.small} {
    display: block;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    /* height: 160px; */
    grid-row-start: 1;
    border-width: 1px;
    border-style: solid;
    border-color: transparent transparent rgba(138, 137, 138, 0.1);
    border-image: initial;
    padding-bottom: 300px;
  }
`;

export const SelectFighter = styled(SelectClass)`
  @media ${breakPoints.small} {
    grid-row-start: 2;
  }
`;

export const SelectMage = styled(SelectClass)`
  @media ${breakPoints.small} {
    grid-row-start: 3;
  }
`;
export const SelectGunner = styled(SelectClass)`
  @media ${breakPoints.small} {
    grid-row-start: 4;
  }
`;
export const SelectAssassin = styled(SelectClass)`
  @media ${breakPoints.small} {
    grid-row-start: 5;
  }
`;

export const WarriorClass = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url("https://i.esdrop.com/d/f/eJqYA2AGQd/YP9LCD18du.jpg");
  background-size: cover;
  :hover {
    transform: translateY(0);
    transform: scale(1.1);
    transition: transform 250ms cubic-bezier(0, 0, 0.12, 1) 0s;
  }
  @media ${breakPoints.small} {
    background-image: url("https://i.esdrop.com/d/f/eJqYA2AGQd/EHebE7pXY3.jpg");
    background-position-x: 90%;
    height: 160px;
    transition: transform 250ms cubic-bezier(0, 0, 0.12, 1) 0s;
    will-change: transform;
  }
`;

export const FighterClass = styled(WarriorClass)`
  background-image: url("https://i.esdrop.com/d/f/eJqYA2AGQd/br0X6UQOqe.jpg");
  @media ${breakPoints.small} {
    background-image: url("https://i.esdrop.com/d/f/eJqYA2AGQd/yR5s8hual9.jpg");
    grid-row-start: 2;
  }
`;

export const MageClass = styled(WarriorClass)`
  background-image: url("https://i.esdrop.com/d/f/eJqYA2AGQd/0IfFrrVH3J.jpg");
  @media ${breakPoints.small} {
    background-image: url("https://i.esdrop.com/d/f/eJqYA2AGQd/jtX0t44yKC.jpg");
  }
`;

export const GunnerClass = styled(WarriorClass)`
  background-image: url("https://i.esdrop.com/d/f/eJqYA2AGQd/mSCb4nfuLh.jpg");
  @media ${breakPoints.small} {
    background-image: url("https://i.esdrop.com/d/f/eJqYA2AGQd/9KKVxC1jcl.jpg");
  }
`;

export const AssassinClass = styled(WarriorClass)`
  background-image: url("https://i.esdrop.com/d/f/eJqYA2AGQd/ptttM1lWTR.jpg");
  @media ${breakPoints.small} {
    background-image: url("https://i.esdrop.com/d/f/eJqYA2AGQd/QUqnOTP8pV.jpg");
  }
`;

export const ClassDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-row-start: 2;
  @media ${breakPoints.small} {
    grid-row-start: 1;
    grid-column-start: 1;
  }
`;

export const FighterDetailWrapper = styled(ClassDetailWrapper)`
  @media ${breakPoints.small} {
    grid-row-start: 2;
  }
`;

export const MageDetailWrapper = styled(ClassDetailWrapper)`
  @media ${breakPoints.small} {
    grid-row-start: 3;
  }
`;

export const GunnerDetailWrapper = styled(ClassDetailWrapper)`
  @media ${breakPoints.small} {
    grid-row-start: 4;
  }
`;

export const AssassinDetailWrapper = styled(ClassDetailWrapper)`
  @media ${breakPoints.small} {
    grid-row-start: 5;
  }
`;

export const ClassName = styled.h2`
  font-family: "headerFont";
  color: #ffffffe0;
`;

export const ClassIcon = styled.img`
  position: relative;
  width: 50px;
  height: 50px;
  fill: white;
  filter: invert(100%) sepia(0%) saturate(7494%) hue-rotate(19deg) brightness(102%) contrast(104%);
  grid-row-start: 2;
  -webkit-box-pack: start;
  justify-content: flex-start;
  grid-column-start: 1;
  padding-bottom: 10px;
  :hover {
    fill: red;
  }
`;
