import BlackButton from "../../../commons/buttons/BlackButton";
import WhiteButton from "../../../commons/buttons/WhiteButton";
import * as S from "./BoardWrite.styles";

export default function BoardWriteUI() {
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.TitleWrapper>
          <S.Title placeholder="제목을 입력해주세요."></S.Title>
        </S.TitleWrapper>
        <S.ContentsWrapper>TOAST UI 들어갈자리</S.ContentsWrapper>
        <S.ImgTitle>[사진 첨부]</S.ImgTitle>
        <S.ImageWrapper>이미지</S.ImageWrapper>
      </S.MainWrapper>
      <S.ButtonWrapper>
        <BlackButton title="확인" type={"button"} />
        <S.Margin />
        <WhiteButton title="취소" type={"button"} />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
