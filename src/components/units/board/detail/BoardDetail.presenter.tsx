import * as S from "./BoardDetail.styles";
import { FiHeart } from "react-icons/fi";
import BlackButton from "../../../commons/buttons/BlackButton";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import { getDate } from "../../../../commons/libraries/utils.js";
export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Wrapper>
      <S.Title>{props.data?.fetchBoard?.title}</S.Title>
      <S.TitleWrapper>
        <S.Writer>작성자: {props.data?.fetchBoard?.writer} |</S.Writer>
        <S.CreatedAt>{getDate(props.data?.fetchBoard?.createdAt)}</S.CreatedAt>
      </S.TitleWrapper>
      <S.ImgWrapper>
        이미지들어갈자리
        <S.Images />
      </S.ImgWrapper>
      <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
      <S.LikeButtonWrapper>
        <S.LikeButton>
          <FiHeart
            style={{
              width: "23px",
              height: "23px",
              color: "#8809F6",
            }}
          />
          <S.LikeCount>1</S.LikeCount>
        </S.LikeButton>
      </S.LikeButtonWrapper>
      <S.FlexEnd>
        <S.ButtonWrapper>
          <BlackButton title="목록" type={"button"} onClick={props.onClickMoveToBoardList} />
          <BlackButton title="수정" type={"button"} onClick={props.onClickMoveToBoardEdit} />
          <BlackButton title="삭제" type={"button"} onClick={props.onClickBoardDelete} />
        </S.ButtonWrapper>
      </S.FlexEnd>
      <hr />
    </S.Wrapper>
  );
}
