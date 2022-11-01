import { css } from "@emotion/react";
import { breakPoints } from "./media";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  header {
    font-family: "headerFont";
    background-color: black;
  }

  body {
    font-family: "Noto Sans KR", sans-serif;
    /* background-color: black; */
  }

  header,
  body {
    /*
    @media ${breakPoints.small} {
      padding: 0 0px;
    } */
  }
  // 영어만 적용 가능
  @font-face {
    font-family: "myFont";
    src: url("/fonts/ZonaPro-ExtraLight.otf");
  }

  // 헤더 폰트
  @font-face {
    font-family: "headerFont";
    src: url("/fonts/HeirofLightOTFRegular.otf");
  }

  @font-face {
    font-family: "headerBoldFont";
    src: url("/fonts/HeirofLightOTFBold.otf");
  }

  @font-face {
    font-family: "proximaNova";
    src: url("/fonts/Proxima Nova Font.otf");
  }

  @font-face {
    font-family: "vendomeFont";
    src: url("/fonts/Vendome Regular.ttf");
  }
`;
