import * as S from "./BoardWrite.styles";
import { BiSearchAlt2 } from "react-icons/bi";

export default function BoardWriteUI() {
  return (
    <S.Wrapper>
      <S.CarouselWrapper>캐러셀</S.CarouselWrapper>
      <S.BestBoard>인기게시판</S.BestBoard>
      <S.WriteButton>글쓰기</S.WriteButton>
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
