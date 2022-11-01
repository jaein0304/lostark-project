import useWindowSizeStyle from "../../../../../commons/hooks/useWindowSizeStyle";
import * as S from "../../../../commons/classes/background";

export default function Fighter() {
  useWindowSizeStyle();

  return (
    <S.Wrapper>
      <S.Fighter>
        <S.CharWrapper>
          <S.CharIcon src="/img/classDetail/BattleMaster.svg" />
          <S.Name>BATTLE MASTER</S.Name>
          <S.UnderImg src="https://i.esdrop.com/d/f/eJqYA2AGQd/FWml1tJktK.png" />
          {useWindowSizeStyle().windowSize ? (
            <S.Class>FIGHTER</S.Class>
          ) : (
            <S.Class>"체술만으로는 강해질 수 없어"</S.Class>
          )}
          <S.UnderLine />
          <S.CharDetail>
            배틀마스터는 전광석화와 같이 적들을 공격하는 무도가 클래스입니다. 빠른 움직임에 다양한
            체술을 두루 갖추고 있기 때문에 순식간에 적을 타격한 뒤 화려한 공중 콤보를 이어갈 수
            있으며, 강력한 엘리멘탈 스킬들을 활용해 전장의 판도를 뒤집을 수도 있습니다.
          </S.CharDetail>
        </S.CharWrapper>
      </S.Fighter>
      <S.VideoWrapper>
        <S.Name>battlemaster attacks</S.Name>
        <br />
        <S.Video
          url={"https://www.youtube.com/watch?v=I4DZpv82sFw"}
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
