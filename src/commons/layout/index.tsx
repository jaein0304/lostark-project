import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutHeader from "./header/LayoutHeader.container";

const Body = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <Body>{props.children}</Body>
    </>
  );
}
