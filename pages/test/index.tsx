import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";

const TOTAL_SLIDES = 2;

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<any>(null);

  const RightButton = () => {
    if (currentSlide >= TOTAL_SLIDES) setCurrentSlide(0);

    setCurrentSlide(currentSlide + 1);
  };

  const LeftButton = () => {
    if (currentSlide === 0) setCurrentSlide(TOTAL_SLIDES);
    setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Container>
      <SliderContainer ref={slideRef}>
        <img src="https://i.esdrop.com/d/f/eJqYA2AGQd/pOS5USMeze.png" />
        <img src="https://i.esdrop.com/d/f/eJqYA2AGQd/EHebE7pXY3.jpg" />
        <img src="https://i.esdrop.com/d/f/eJqYA2AGQd/O4upHK1edJ.gif" />
      </SliderContainer>
      <Center>
        <Button onClick={LeftButton}>Prev</Button>
        <Button onClick={RightButton}>Next</Button>
      </Center>
    </Container>
  );
}
const Container = styled.div`
  width: 500px;
  margin: auto;
  height: 1000px;
  overflow: hidden;
`;
const Button = styled.button`
  width: 100px;
  height: 100px;
  border: 1px solid gainsboro;
`;
const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex;
`;

const Center = styled.div`
  text-align: center;
`;
