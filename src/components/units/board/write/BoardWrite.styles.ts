import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: darkviolet;
`;
export const SearchWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: wheat;
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

export const BestBoard = styled.div`
  width: 100%;
  height: 150px;
  background-color: aliceblue;
  padding: 15px;
  font-weight: 500;
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
`;
export const MainTitle = styled.div`
  width: 65%;
`;
export const MainWriter = styled.div`
  width: 15%;
`;
export const MainDate = styled.div`
  width: 15%;
`;

export const MainBody = styled(MainHead)`
  background-color: white;
  color: black;
`;

export const BodyTitle = styled.button`
  width: 65%;
  text-align: center;
  cursor: pointer;
  background-color: white;
  border: none;

  :hover {
    text-decoration: underline;
    text-underline-position: under;
  }
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const WriteButton = styled.button`
  width: 130px;
  height: 40px;
  margin: 10px 0;
  border: none;
  font-size: 16px;
  font-weight: 500;
  background-color: #2b2b2b;
  color: white;
  text-shadow: black 0 0 6px;
  border-radius: 5px;
`;
