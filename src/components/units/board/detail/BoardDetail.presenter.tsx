import * as S from "./BoardDetail.styles";
import { FiHeart } from "react-icons/fi";
import BlackButton from "../../../commons/buttons/BlackButton";
export default function BoardDetailUI() {
  return (
    <S.Wrapper>
      <S.Title>제목들어갈자리</S.Title>
      <S.TitleWrapper>
        <S.Writer>작성자 |</S.Writer>
        <S.CreatedAt>2022.00.00</S.CreatedAt>
      </S.TitleWrapper>
      <S.ImgWrapper>
        이미지들어갈자리
        <S.Images />
      </S.ImgWrapper>
      <S.Contents>
        얼음이 이상의 이상의 동산에는 피다. 피가 할지라도 그것을 얼음과 그러므로 이상은 싶이
        위하여서. 얼마나 이상, 힘차게 생의 인생에 영락과 두기 어디 우리 힘있다. 청춘의 만물은 이상
        꾸며 가치를 듣는다. 속에서 있음으로써 용기가 산야에 보내는 얼마나 있으랴? 싸인 가치를
        위하여, 심장은 보이는 오직 소금이라 미인을 아름다우냐? 가치를 이것을 바로 트고, 예가 이상
        것이다. 넣는 이상, 천지는 새 귀는 가장 바이며, 열락의 것이다. 몸이 만물은 목숨을 미묘한
        공자는 교향악이다. 품었기 청춘의 크고 방지하는 안고, 바로 그림자는 투명하되 끓는 봄바람이다.
        우는 청춘은 시들어 가진 곳이 능히 두손을 옷을 사막이다. 황금시대를 무엇을 뼈 발휘하기 남는
        가장 많이 끓는다. 우리 굳세게 힘차게 인간의 황금시대를 관현악이며, 청춘에서만 열락의
        사막이다. 앞이 수 무엇을 청춘을 것이다. 같으며, 고행을 수 오아이스도 있음으로써 속에서
        것이다. 얼마나 풀이 같으며, 곧 충분히 무엇을 옷을 말이다. 때에, 거선의 우리 끝까지 이상은
        그들을 피다. 심장은 영원히 눈이 내는 것이다. 오직 위하여서 지혜는 그들을 운다. 싹이 별과
        열락의 철환하였는가? 그들의 맺어, 공자는 예수는 같지 인도하겠다는 기쁘며, 봄바람이다. 얼음에
        그들의 지혜는 봄바람이다. 커다란 사람은 우리 인생을 위하여서 얼음에 기쁘며, 방지하는
        방황하여도, 사막이다. 우리의 너의 바로 것이다. 살 것은 그러므로 청춘에서만 열락의 이것은
        스며들어 끓는다. 봄바람을 설레는 튼튼하며, 청춘을 살았으며, 있으랴? 위하여, 평화스러운 곧 뭇
        힘있다. 곳으로 같이, 우리 곧 날카로우나 길지 더운지라 사람은 같지 쓸쓸하랴? 그것은 못할
        보내는 인간의 길지 이것이야말로 말이다.
      </S.Contents>
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
          <BlackButton title="목록" type={"button"} />
          <BlackButton title="수정" type={"button"} />
          <BlackButton title="삭제" type={"button"} />
        </S.ButtonWrapper>
      </S.FlexEnd>
      <hr />
    </S.Wrapper>
  );
}
