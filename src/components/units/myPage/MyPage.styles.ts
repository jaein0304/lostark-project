import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  flex-wrap: wrap;
  margin: 50px auto;
  max-width: 1200px;
  min-height: 500px;
`;

export const Card = styled.div`
  margin: auto;
  width: 300px;
  height: 400px;
  padding: 10px;
`;

export const Img = styled.img`
  width: 285px;
  height: 285px;
  object-fit: cover;
`;

export const Name = styled.p`
  white-space: nowrap;
  font-size: 16px;
  margin-top: 10px;
`;

export const Price = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
