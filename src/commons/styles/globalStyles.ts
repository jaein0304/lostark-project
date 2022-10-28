import { css } from "@emotion/react";
import { breakPoints } from "./media";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  header {
    font-family: "headerFont";
  }

  body {
    font-family: "Noto Sans KR", sans-serif;
  }

  header,
  body {
    padding: 0 40px;
    background-color: black;
    @media ${breakPoints.small} {
      padding: 0 15px;
      align-items: center;
    }
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
`;
