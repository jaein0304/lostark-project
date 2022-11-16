import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState, MouseEvent } from "react";
import * as S from "./LayoutNav.styles";

export default function Navigation() {
  const bottomMenus = [
    { name: "CLASSES", page: "/classes" },
    { name: "PRODUCT", page: "/product" },
    { name: "COMMUNITY", page: "/boards" },
    { name: "TACTICS", page: "/tactics" },
  ];
  const menuIcons = [
    "https://i.esdrop.com/d/f/eJqYA2AGQd/uawJat21sz.svg",
    "https://i.esdrop.com/d/f/eJqYA2AGQd/ayFwvNMqNc.png",
    "https://i.esdrop.com/d/f/eJqYA2AGQd/H4agJWrd7T.png",
    "https://i.esdrop.com/d/f/eJqYA2AGQd/XgS69Gym5s.png",
  ];
  const router = useRouter();
  const [currentMenu, setCurrentMenu] = useState("");

  const onClickMenu = (event: MouseEvent) => {
    setCurrentMenu(currentMenu);
    router.push((event.target as HTMLButtonElement).id);
  };

  return (
    <S.Wrapper>
      {bottomMenus.map((el, index) => {
        return (
          <div key={el.page}>
            <S.Menu id={el.page} onClick={onClickMenu}>
              <S.MenuIcon src={menuIcons[index]} id={el.page} />
              <S.MenuName
                id={el.page}
                onClick={onClickMenu}
                isActive={router.asPath.includes(el.page)}
              >
                {el.name}
              </S.MenuName>
            </S.Menu>
          </div>
        );
      })}
    </S.Wrapper>
  );
}
