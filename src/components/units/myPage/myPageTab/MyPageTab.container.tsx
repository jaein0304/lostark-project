import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { Current, Page, Wrapper } from "./MyPageTab.styles";

const MY_PAGE_NAV = [
  { name: "찜목록", page: "/myPage" },
  { name: "결제목록", page: "/myPage/1" },
  { name: "구매목록", page: "/myPage/#2" },
  { name: "판매목록", page: "/myPage/#3" },
  { name: "내가쓴글", page: "/myPage/#4" },
];

export default function MyPageTab() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState("");

  const onClickPage = (event: MouseEvent<HTMLButtonElement>) => {
    const currentPage = (event.target as HTMLButtonElement).id;
    setCurrentPage(currentPage);
    router.push((event.target as HTMLButtonElement).id);
  };

  useEffect(() => {
    console.log(router.asPath);
  }, [currentPage]);

  return (
    <Wrapper>
      {MY_PAGE_NAV.map((el) => {
        return (
          <Page key={el.page}>
            <Current id={el.page} onClick={onClickPage} isActive={router.asPath.includes(el.page)}>
              {el.name}
            </Current>
          </Page>
        );
      })}
    </Wrapper>
  );
}
