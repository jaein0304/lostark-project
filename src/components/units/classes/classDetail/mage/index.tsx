import useWindowSizeStyle from "../../../../../commons/hooks/useWindowSizeStyle";
import * as S from "../../../../commons/classes/background";

export default function Mage() {
  useWindowSizeStyle();

  return (
    <S.Wrapper>
      <S.Mage>
        <S.CharWrapper>
          <S.CharIcon src="/img/classDetail/Bard.svg" />
          <S.Name>BARD</S.Name>
          <S.UnderImg src="https://i.esdrop.com/d/f/eJqYA2AGQd/FWml1tJktK.png" />
          {useWindowSizeStyle().windowSize ? (
            <S.Class>MAGE</S.Class>
          ) : (
            <S.Class>"이 아름다운 선율은 피바다가 될 전장의 전주곡이에요."</S.Class>
          )}
          <S.UnderLine />
          <S.CharDetail>
            바드는 성스러운 하프를 이용하여 적을 공격하거나 아군을 서포트하는 원거리 서포트형
            클래스입니다. 날카로운 음율로 적을 공격하기도 하고, 아름다운 운율로 아군을 치유하며,
            파티에서는 선봉보다는 후방에서 아군을 돕거나 각종 버프를 이용해 아군을 지원하는 역할을
            수행할 수 있습니다. 공격력은 다소 낮은 편이지만 아군을 지원하는 능력이 매우 뛰어나기
            때문에 파티에서 꼭 필요로 하는 클래스 입니다.
          </S.CharDetail>
        </S.CharWrapper>
      </S.Mage>
      <S.VideoWrapper>
        <S.Name>bard attacks</S.Name>
        <br />
        <S.Video
          url={"https://www.youtube.com/watch?v=SgpU3C_GdjY&t=3s"}
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
