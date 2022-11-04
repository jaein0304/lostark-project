import BlackButton, { Button } from "../../../commons/buttons/BlackButton";
import WhiteButton from "../../../commons/buttons/WhiteButton";
import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.TitleWrapper>
          <S.Title type="text" placeholder="제목을 입력해주세요." onChange={props.onChangeTitle} />
          <S.Error>{props.titleError}</S.Error>
        </S.TitleWrapper>
        <S.Row>
          <S.Column>
            <S.Writer
              type="text"
              placeholder="이름을 입력해주세요."
              onChange={props.onChangeWriter}
            />
            <S.Error>{props.writerError}</S.Error>
          </S.Column>
          <S.Column>
            <S.Password
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangePassword}
            />
            <S.Error>{props.passwordError}</S.Error>
          </S.Column>
        </S.Row>
        <S.ContentsWrapper>
          <S.Contents placeholder="내용을 입력해주세요." onChange={props.onChangeContents} />
        </S.ContentsWrapper>
        <S.ContentsError>{props.contentsError}</S.ContentsError>
        <S.YoutubeWrapper>
          <S.Youtube
            type="text"
            placeholder="유튜브 링크를 넣어주세요."
            onChange={props.onChangeYoutubeUrl}
          />
        </S.YoutubeWrapper>
        <S.ImgTitle>[사진 첨부]</S.ImgTitle>
        <S.ImageWrapper>
          {/* {props.fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))} */}
        </S.ImageWrapper>
      </S.MainWrapper>
      <S.ButtonWrapper>
        <Button title="확인" type={"button"} onClick={props.onClickSubmit}>
          확인
        </Button>
        <S.Margin />
        <WhiteButton title="취소" type={"button"} onClick={props.onClickCancel} />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
