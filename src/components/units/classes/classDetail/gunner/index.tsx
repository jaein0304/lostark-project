import useWindowSizeStyle from "../../../../../commons/hooks/useWindowSizeStyle";
import * as S from "../../../../commons/classes/background";

export default function Gunner() {
  useWindowSizeStyle();

  return (
    <S.Wrapper>
      <S.Gunner>
        <S.CharWrapper>
          <S.CharIcon src="/img/classDetail/DevilHunter.svg" />
          <S.Name>DEVIL HUNTER</S.Name>
          <S.UnderImg src="https://i.esdrop.com/d/f/eJqYA2AGQd/FWml1tJktK.png" />
          {useWindowSizeStyle().windowSize ? (
            <S.Class>GUNNER</S.Class>
          ) : (
            <S.Class>"악마의 울음소리가 궁금하면 날 찾아오라구!"</S.Class>
          )}
          <S.UnderLine />
          <S.CharDetail>
            데빌헌터는 세 가지 총기를 사용하여 빠르게 움직이며 스타일리쉬한 전투를 펼치는 원거리
            클래스 입니다. 대상과의 거리, 혹은 공격하고자 하는 범위에 따라 그에 알맞은 스탠스를
            선택하여 더블 핸드건, 샷건, 라이플로 가장 효과적인 전투를 만들어 낼 수 있습니다.
          </S.CharDetail>
        </S.CharWrapper>
      </S.Gunner>
      <S.VideoWrapper>
        <S.Name>devilhunter attacks</S.Name>
        <br />
        <S.Video
          url={"https://www.youtube.com/watch?v=EesjAG3gpd8"}
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
