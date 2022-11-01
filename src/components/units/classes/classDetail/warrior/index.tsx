import useWindowSizeStyle from "../../../../../commons/hooks/useWindowSizeStyle";
import * as S from "../../../../commons/classes/background";

export default function Warrior() {
  useWindowSizeStyle();

  return (
    <S.Wrapper>
      <S.Character>
        <S.CharWrapper>
          <S.CharIcon src="/img/classDetail/Warlord.svg" />
          <S.Name>WARLORD</S.Name>
          <S.UnderImg src="https://i.esdrop.com/d/f/eJqYA2AGQd/FWml1tJktK.png" />
          {useWindowSizeStyle().windowSize ? (
            <S.Class>WARRIOR</S.Class>
          ) : (
            <S.Class>"다시는 동료를 잃지 않겠다."</S.Class>
          )}
          <S.UnderLine />
          <S.CharDetail>
            워로드는 높은 방어력과 생존력을 기반으로 전장의 선봉에서 아군을 지휘하고 보호하는 근접
            클래스입니다. 거대한 방패를 이용한 다양한 방어기술은 강력한 적들의 공격을 피해 없이
            막아낼 수 있으며, 건랜스를 이용한 창격 기술과 포격 기술은 단순하지만 강력한 힘을
            발휘합니다. 또한, 적들의 시선을 끌고 파티원을 보호할 수 있는 기술을 가진 워로드는 파티의
            든든한 버팀목이자 전투의 리더입니다.
          </S.CharDetail>
        </S.CharWrapper>
      </S.Character>
      <S.VideoWrapper>
        <S.Name>warlord attacks</S.Name>
        <br />
        <S.Video
          url={"https://www.youtube.com/watch?v=zMHewpt6DuM"}
          width="100%"
          height="100%"
          playing={true}
          muted={true}
          controls={true}
          loop={true}
        />
      </S.VideoWrapper>
    </S.Wrapper>
  );
}
