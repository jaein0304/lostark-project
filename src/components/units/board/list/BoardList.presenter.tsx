import * as S from "./BoardList.styles";
import { BiSearchAlt2 } from "react-icons/bi";
import BlackButton from "../../../commons/buttons/BlackButton";

export default function BoardListUI() {
  return (
    <S.Wrapper>
      <S.CarouselWrapper></S.CarouselWrapper>
      <S.BestBoardWrapper>
        인기게시판
        <S.RowWrapper>
          <S.BestBoard>
            <S.BestBoardTitle>좋아요 많은 게시판 1번</S.BestBoardTitle>
            <S.BestBoardTitle>좋아요 많은 게시판 2번</S.BestBoardTitle>
            <S.BestBoardTitle>좋아요 많은 게시판 3번</S.BestBoardTitle>
          </S.BestBoard>
          <S.BestBoard>
            <S.BestBoardTitle>좋아요 많은 게시판 4번 </S.BestBoardTitle>
            <S.BestBoardTitle>좋아요 많은 게시판 5번</S.BestBoardTitle>
            <S.BestBoardTitle>좋아요 많은 게시판 6번</S.BestBoardTitle>
          </S.BestBoard>
        </S.RowWrapper>
      </S.BestBoardWrapper>
      <BlackButton title="글쓰기" type={"button"} />
      <S.SearchWrapper>
        <S.Search type="text" placeholder="찾으실 제목을 입력해주세요." />
        <S.SearchButton>
          <BiSearchAlt2
            style={{
              width: "20px",
              height: "30px",
            }}
          />
        </S.SearchButton>
      </S.SearchWrapper>
      <S.TableTop />
      <S.MainHead>
        <S.MainNumber>번호</S.MainNumber>
        <S.MainTitle>제목</S.MainTitle>
        <S.MainWriter>작성자</S.MainWriter>
        <S.MainDate>날짜</S.MainDate>
      </S.MainHead>

      {/* map */}
      <S.MainBody>
        <S.MainNumber>aa</S.MainNumber>
        <S.BodyTitle>aa</S.BodyTitle>
        <S.MainWriter>aa</S.MainWriter>
        <S.MainDate>aa</S.MainDate>
      </S.MainBody>
      <S.TableBottom />
      {/* pagination */}
    </S.Wrapper>
  );
}
