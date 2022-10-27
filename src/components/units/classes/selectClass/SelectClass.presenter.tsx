import Link from "next/link";
import * as S from "./SelectClass.styles";

export default function SelectClassUI() {
  return (
    <S.Wrapper>
      <Link href="/classes/classDetail/warrior">
        <S.SelectClass>
          <S.WarriorClass />
        </S.SelectClass>
      </Link>
      <S.ClassDetailWrapper>
        <S.ClassIcon src="/img/classIcon/ClassIcon_Warrior.svg" />
        <S.ClassName>WARRIOR</S.ClassName>
      </S.ClassDetailWrapper>

      <Link href="/classes/classDetail/fighter">
        <S.SelectClass>
          <S.FighterClass />
        </S.SelectClass>
      </Link>
      <S.ClassDetailWrapper>
        <S.ClassIcon src="/img/classIcon/ClassIcon_Fighter.svg" />
        <S.ClassName>FIGHTER</S.ClassName>
      </S.ClassDetailWrapper>

      <Link href="/classes/classDetail/mage">
        <S.SelectClass>
          <S.MageClass />
        </S.SelectClass>
      </Link>
      <S.ClassDetailWrapper>
        <S.ClassIcon src="/img/classIcon/ClassIcon_Mage.svg" />
        <S.ClassName>MAGE</S.ClassName>
      </S.ClassDetailWrapper>

      <Link href="/classes/classDetail/gunner">
        <S.SelectClass>
          <S.GunnerClass />
        </S.SelectClass>
      </Link>
      <S.ClassDetailWrapper>
        <S.ClassIcon src="/img/classIcon/ClassIcon_Gunner.svg" />
        <S.ClassName>GUNNER</S.ClassName>
      </S.ClassDetailWrapper>

      <Link href="/classes/classDetail/assassin">
        <S.SelectClass>
          <S.AssassinClass />
        </S.SelectClass>
      </Link>
      <S.ClassDetailWrapper>
        <S.ClassIcon src="/img/classIcon/ClassIcon_Assassin.svg" />
        <S.ClassName>ASSASSIN</S.ClassName>
      </S.ClassDetailWrapper>
    </S.Wrapper>
  );
}
