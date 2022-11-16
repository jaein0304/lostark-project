import useWindowSizeStyle from "../../../../../commons/hooks/useWindowSizeStyle";
import * as S from "../../../../commons/classes/background";

export default function Assassin() {
  useWindowSizeStyle();

  return (
    <S.Wrapper>
      <S.Assassin>
        <S.CharWrapper>
          <S.CharIcon src="/img/classDetail/Blade.svg" />
          <S.Name>BLADE</S.Name>
          <S.UnderImg src="https://i.esdrop.com/d/f/eJqYA2AGQd/FWml1tJktK.png" />
          {useWindowSizeStyle().windowSize ? (
            <S.Class>ASSASSIN</S.Class>
          ) : (
            <S.Class>"내재된 악마성을 절제하며, 혼돈의 검을 휘두르는 자"</S.Class>
          )}
          <S.UnderLine />
          <S.CharDetail>
            블레이드는 쌍검과 장검, 총 세개의 검을 사용하는 암살자입니다. 항상 차분한 이성을
            유지하며, 날렵한 쌍검과 묵직한 장검에 혼돈의 힘을 담아 빠르고 절도 있게 적들을
            공격합니다. 특히, 쌍검과 장검을 활용한 연계 공격은 숨쉴 틈 없는 공격을 난사해 적을
            제압합니다.
          </S.CharDetail>
        </S.CharWrapper>
      </S.Assassin>
      <S.VideoWrapper>
        <S.Name>blade attacks</S.Name>
        <br />
        <S.Video
          url={"https://www.youtube.com/watch?v=AnAMIuh6wqo"}
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
