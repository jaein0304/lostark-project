import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutFooter from "./footer";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNav from "./navigation/LayoutNav.container";

const BLACK_BODY = [
  "/classes/",
  "/classes/selectClass/",
  "/classes/classDetail/warrior/",
  "/classes/classDetail/fighter/",
  "/classes/classDetail/mage/",
  "/classes/classDetail/gunner/",
  "/classes/classDetail/assassin/",
];

const NO_MAX_WIDTH = ["/myPage"];

const BodyWrapper = styled.main`
  display: flex;
  flex-direction: column;
  /* background-color: black; */
  align-items: center;
  /* min-height: 50vh; */
`;

const Body = styled.div`
  width: 100%;
  /* padding: 0 40px; */
  background-color: black;
`;

const WhiteBody = styled(Body)`
  max-width: 1200px;
  background-color: white;
`;

const NoMaxWidth = styled.div`
  width: 100vw;
  background-color: transparent;
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenBlackBody = BLACK_BODY.includes(router.asPath);
  const isVisible = NO_MAX_WIDTH.includes(router.asPath);
  console.log(router);
  return (
    <>
      <LayoutHeader />
      <BodyWrapper>
        {/* 만약에 클래스가 아니라면, Body를 max-width: 1200px, back-color white로 */}
        {isHiddenBlackBody ? (
          <Body>{props.children}</Body>
        ) : (
          <>
            {/* nowaxwidth면 whitebody가 아니라 nomaxwidth */}
            {isVisible ? (
              <NoMaxWidth>{props.children}</NoMaxWidth>
            ) : (
              <WhiteBody>{props.children}</WhiteBody>
            )}
          </>
        )}
      </BodyWrapper>
      <LayoutFooter />
      <LayoutNav />
    </>
  );
}
