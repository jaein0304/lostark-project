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
        <S.SelectFighter>
          <S.FighterClass />
        </S.SelectFighter>
      </Link>
      <S.FighterDetailWrapper>
        <S.ClassIcon src="/img/classIcon/ClassIcon_Fighter.svg" />
        <S.ClassName>FIGHTER</S.ClassName>
      </S.FighterDetailWrapper>

      <Link href="/classes/classDetail/mage">
        <S.SelectMage>
          <S.MageClass />
        </S.SelectMage>
      </Link>
      <S.MageDetailWrapper>
        <S.ClassIcon src="/img/classIcon/ClassIcon_Mage.svg" />
        <S.ClassName>MAGE</S.ClassName>
      </S.MageDetailWrapper>

      <Link href="/classes/classDetail/gunner">
        <S.SelectGunner>
          <S.GunnerClass />
        </S.SelectGunner>
      </Link>
      <S.GunnerDetailWrapper>
        <S.ClassIcon src="/img/classIcon/ClassIcon_Gunner.svg" />
        <S.ClassName>GUNNER</S.ClassName>
      </S.GunnerDetailWrapper>

      <Link href="/classes/classDetail/assassin">
        <S.SelectAssassin>
          <S.AssassinClass />
        </S.SelectAssassin>
      </Link>
      <S.AssassinDetailWrapper>
        <S.ClassIcon src="/img/classIcon/ClassIcon_Assassin.svg" />
        <S.ClassName>ASSASSIN</S.ClassName>
      </S.AssassinDetailWrapper>
    </S.Wrapper>
  );
}
