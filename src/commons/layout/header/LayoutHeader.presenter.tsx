import Link from "next/link";
import * as S from "./LayoutHeader.styles";
import { ILayoutHeaderProps } from "./LayoutHeader.types";
import { AiOutlineUser } from "react-icons/ai";
export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  return (
    <S.Wrapper>
      <Link href="/">
        <S.LogoWrapper>
          {props.windowSize ? (
            <S.LostLogo src="https://i.esdrop.com/d/f/eJqYA2AGQd/8ww0s2GoOr.png"></S.LostLogo>
          ) : (
            <S.LostLogo src="https://i.esdrop.com/d/f/eJqYA2AGQd/jVEs7fkkxy.png"></S.LostLogo>
          )}
        </S.LogoWrapper>
      </Link>

      <S.ContentsWrapper>
        <Link href="/classes/selectClass">
          <a>
            <S.HeaderName>CLASSES</S.HeaderName>
          </a>
        </Link>

        <Link href="/product">
          <a>
            <S.HeaderName>PRODUCT</S.HeaderName>
          </a>
        </Link>

        <Link href="/boards/">
          <a>
            <S.HeaderName>COMMUNITY</S.HeaderName>
          </a>
        </Link>

        <Link href="/classes">
          <a>
            <S.HeaderName>TACTICS</S.HeaderName>
          </a>
        </Link>
      </S.ContentsWrapper>
      {props.accessToken ? (
        <Link href="/myPage">
          <div
            style={{
              lineHeight: "10px",
            }}
          >
            <a style={{ color: "white", padding: "10px" }}>
              <AiOutlineUser size="24" />
              {/* <S.HeaderName>LOGIN</S.HeaderName> */}
            </a>
          </div>
        </Link>
      ) : (
        <Link href="/login">
          <a>
            <S.HeaderName>LOGIN</S.HeaderName>
          </a>
        </Link>
      )}
      {/* <Link href="/login">
        <a>
          <S.HeaderName>LOGIN</S.HeaderName>
        </a>
      </Link> */}
      <Link href="https://lostark.game.onstove.com/Main">
        <a>
          <S.HeaderName>GAME START</S.HeaderName>
        </a>
      </Link>
    </S.Wrapper>
  );
}
