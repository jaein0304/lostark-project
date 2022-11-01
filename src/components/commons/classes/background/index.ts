import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px auto;
  width: 100%;
  max-width: 1920px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 230px;
  padding: 0px;
  color: white;
  background-image: url("https://i.esdrop.com/d/f/eJqYA2AGQd/AhZSTBt1Rc.jpg");
`;

export const Character = styled.div`
  width: 100%;
  /* max-width: 1440px; */
  height: 100%;
  height: 800px;
  background-image: url("https://i.esdrop.com/d/f/eJqYA2AGQd/RbyxL49d0s.jpg");
  mask-image: linear-gradient(
    to right,
    transparent,
    black 45px,
    black calc(100% - 75px),
    transparent
  );
  background-image: no-repeat;
  background-position: center;
  background-size: cover;
  @media ${breakPoints.mobile} {
    background-position-x: 70%;
    mask-image: linear-gradient(
      to right,
      transparent,
      black 30px,
      black calc(100% - 30px),
      transparent
    );
  }
`;

export const Fighter = styled(Character)`
  background-image: url("https://i.esdrop.com/d/f/eJqYA2AGQd/YdrAmb47ch.jpg");
`;

export const Mage = styled(Character)`
  background-image: url("https://i.esdrop.com/d/f/eJqYA2AGQd/xDRjd5nHwl.jpg");
`;

export const Gunner = styled(Character)`
  background-image: url("https://i.esdrop.com/d/f/eJqYA2AGQd/sAgpgPSjJ3.jpg");
`;

export const Assassin = styled(Character)`
  opacity: 0.9;
  background-image: url("https://i.esdrop.com/d/f/eJqYA2AGQd/MSolLvyaYZ.jpg");
`;
export const CharWrapper = styled.div`
  width: 500px;
  height: 800px;
  padding: 100px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 100px 0px;
  }
`;

export const CharIcon = styled.img`
  width: 70px;
  height: 70px;
  filter: invert(100%) sepia(0%) saturate(7494%) hue-rotate(19deg) brightness(102%) contrast(104%);
`;

export const Name = styled.h1`
  font-family: "vendomeFont";
  font-size: 2.625rem;
  text-transform: uppercase;
  text-align: center;
  text-shadow: black 0px 0px 4px;
  @media ${breakPoints.mobile} {
    font-weight: 400;
    margin: 0px;
    font-size: min(10vw, 36px);
  }
`;

export const CharDetail = styled.p`
  margin: 0 0 80px;
  color: #b2aea5;
  font-size: 18px;
  line-height: 1.8;
  text-shadow: black 2px 2px 6px;
  @media ${breakPoints.mobile} {
    color: white;
    text-shadow: black 0px 0px 3px;
    width: 90vw;
    margin-top: 20px;
  }
`;

export const UnderImg = styled.img`
  width: 100%;
  margin: 10px 0px;
`;

export const Class = styled.h4`
  font-family: "vendomeFont";
  font-size: 1.25rem;
  font-weight: 400;
  text-shadow: black 0 0 6px;
  line-height: 1.5;
`;

export const UnderLine = styled.hr`
  width: 100%;
  border: 0px;
  height: 2px;
  margin: 10px 0px;
  background: linear-gradient(to right, transparent, rgb(158, 130, 50), transparent);
`;

export const VideoWrapper = styled.div`
  width: 100%;
  height: 800px;
  padding: 40px 0px;
  @media ${breakPoints.mobile} {
    width: 100vw;
    height: 500px;
    margin-bottom: 20px;
  }
`;

export const Video = styled(ReactPlayer)`
  @media ${breakPoints.mobile} {
    width: 100vw;
    height: auto;
  }
`;
