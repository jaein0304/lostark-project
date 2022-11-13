import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled.div`
  width: 1200px;
  height: 500px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`;

const Slide = styled.ul<{ currentSlide: number }>`
  display: flex;
  width: 100%;
  transition: ${(props) => (!props.currentSlide ? "" : "all 0.5s ease-in-out")};
  transform: ${(props) => "translateX(-" + props.currentSlide * 1000 + "px)"};
`;

const SlideList = styled.li`
  list-style: none;
`;

const IMG = [
  "https://cdn-lostark.game.onstove.com/uploadfiles/banner/22eb91620a754f50a5bc45cb06f80d62.jpg",
  "https://i.esdrop.com/d/f/eJqYA2AGQd/pOS5USMeze.png",
  "https://i.esdrop.com/d/f/eJqYA2AGQd/pOS5USMeze.png",
  "https://i.esdrop.com/d/f/eJqYA2AGQd/pOS5USMeze.png",
];

export default function ImgSlider() {
  const TOTAL_SLIDES = IMG.length - 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<any>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === TOTAL_SLIDES ? 0 : prev + 1));
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [currentSlide]);

  return (
    <>
      <Wrapper>
        <Slide ref={slideRef} currentSlide={currentSlide}>
          {IMG.map((el, idx) => (
            <SlideList key={idx}>
              <img src={el} />
            </SlideList>
          ))}
        </Slide>
      </Wrapper>
    </>
  );
}
