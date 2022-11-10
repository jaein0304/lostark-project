import * as S from "./MyPage.styles";
import MyPageTab from "./myPageTab/MyPageTab.container";

export default function MyPageUI() {
  return (
    <S.Wrapper>
      <S.InfoWrapper>
        <S.Info>
          <S.Row>
            <S.Profile src="https://i.esdrop.com/d/f/eJqYA2AGQd/fsZ8eanTJx.png" />
            <S.Col>
              <S.Name>편히잠드소서리스</S.Name>
              <S.ChangePW>비밀번호 변경</S.ChangePW>
            </S.Col>
            <S.PointWrapper>
              <S.Crystal />
              <S.Point>5000</S.Point>
              <S.ChargeBtn>충전</S.ChargeBtn>
            </S.PointWrapper>
          </S.Row>
        </S.Info>
      </S.InfoWrapper>
      <MyPageTab />
    </S.Wrapper>
  );
}
