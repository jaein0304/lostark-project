import styled from "@emotion/styled";
import ReactPlayer from "react-player";

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
`;

export const CharWrapper = styled.div`
  width: 500px;
  height: 800px;
  padding: 100px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CharIcon = styled.img`
  width: 70px;
  height: 70px;
  filter: invert(100%) sepia(0%) saturate(7494%) hue-rotate(19deg) brightness(102%) contrast(104%);
`;

export const Name = styled.h1`
  font-family: "vendomeFont";
`;

export const CharDetail = styled.h4`
  /* margin: 0 0 80px; */
  color: #b2aea5;
  font-size: 18px;
  line-height: 2;
`;

export const VideoWrapper = styled.div`
  padding: 56px 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Video = styled(ReactPlayer)``;
