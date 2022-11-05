import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media ${breakPoints.small} {
    margin-bottom: 100px;
    font-size: 12px;
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 300px;
  margin: 20px 0px;
  border-radius: 10px;
  background-color: darkviolet;
  background-image: url("https://www.notion.so/image/https%3A%2F%2Fcdn-lostark.game.onstove.com%2F2022%2Fevent%2F221026_update_kjBAs7Z3%2Fimages%2Fpc%2Fimg_swiper1_1.jpg%3F1f2d1624ea718349411ea14ede6965d3?table=block&id=f0d0a1c5-c3a9-4664-9f6e-5fe4b0d29a9c&spaceId=9a123e11-a840-4244-82d3-0a81c1d75cd1&width=2000&userId=dee01582-c4b2-4792-952a-17b4eb37394c&cache=v2");
`;
export const SearchWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Search = styled.input`
  width: 18rem;
  height: 30px;
`;

export const SearchButton = styled.div`
  width: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BestBoardWrapper = styled.div`
  width: 100%;
  height: 150px;
  padding: 15px;
  box-shadow: 0px 0px 3px gray;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;
export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
  height: 200px;
  justify-content: space-between;
`;

export const BestBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 20px;
`;

export const BestBoardTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin: 5px 0px;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const MainHead = styled.div`
  width: 100%;
  border: 1px solid gray;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  background-color: #2b2b2b;
  height: 60px;
  color: white;
  font-weight: 500;
`;

export const MainNumber = styled.div`
  width: 5%;
  @media ${breakPoints.small} {
    width: 10%;
  }
`;
export const MainTitle = styled.div`
  width: 65%;
`;
export const MainWriter = styled.div`
  width: 15%;
`;
export const MainDate = styled.div`
  width: 15%;
  @media ${breakPoints.small} {
    width: 20%;
  }
`;

export const MainBody = styled(MainHead)`
  background-color: white;
  color: black;
`;

export const BodyTitle = styled.button`
  font-size: 16px;
  display: flex;
  padding-left: 10rem;
  width: 65%;
  cursor: pointer;
  background-color: white;
  border: none;
  text-align: left;
  word-break: break-all;

  :hover {
    text-decoration: underline;
    text-underline-position: under;
  }
  @media ${breakPoints.tablet} {
    padding-left: 5rem;
  }
  @media ${breakPoints.mobile} {
    padding-left: 1rem;
    font-size: 12px;
  }
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
  margin-top: 30px;
`;
