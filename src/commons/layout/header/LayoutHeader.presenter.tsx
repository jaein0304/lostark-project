import Link from "next/link";
import { HeaderName, LogoWrapper, LostLogo, Wrapper } from "./LayoutHeader.styles";
import { ILayoutHeaderProps } from "./LayoutHeader.types";
export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  return (
    <Wrapper>
      <Link href="/">
        <LogoWrapper>
          <LostLogo src="https://d3irh93dd5ckql.cloudfront.net/statics/2022-10-18/images/LostArkLogo.png"></LostLogo>
        </LogoWrapper>
      </Link>

      <Link href="/classes">
        <a>
          <HeaderName>CLASSES</HeaderName>
        </a>
      </Link>

      <Link href="/product">
        <a>
          <HeaderName>PRODUCT</HeaderName>
        </a>
      </Link>

      <Link href="/community">
        <a>
          <HeaderName>COMMUNITY</HeaderName>
        </a>
      </Link>

      <Link href="/classes">
        <a>
          <HeaderName>TACTICS</HeaderName>
        </a>
      </Link>
    </Wrapper>
  );
}
