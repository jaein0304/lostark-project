import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutFooter from "./footer";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNav from "./navigation/LayoutNav.container";

const BodyWrapper = styled.main`
  display: flex;
  flex-direction: column;
  background-color: black;
  /* min-height: 50vh; */
`;

const Body = styled.div`
  width: 100%;
  /* @media (min-width: 1080px) {
    max-width: 1360px;
  } */
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <LayoutHeader />
      <BodyWrapper>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
      <LayoutNav />
    </>
  );
}
