import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled.div`
  max-width: 1200px;
  height: 500px;
  margin: 0 auto;
  overflow: hidden;
`;

const Slide = styled.div<{ currentSlide: number }>`
  display: flex;
  width: 100%;
  transition: ${(props) => (!props.currentSlide ? "" : "all 0.5s ease-in-out")};
  transform: ${(props) => "translateX(-" + props.currentSlide * 1200 + "px)"};
`;

const SlideList = styled.li`
  list-style: none;
`;

// 2560 x 377 px
const Img = styled.img`
  max-width: 1200px;
  height: auto;
`;

const IMG = [
  "https://i.esdrop.com/d/f/eJqYA2AGQd/u3AuisXzDX.jpg",
  "https://i.esdrop.com/d/f/eJqYA2AGQd/IXYdWVSbGn.jpg",
  "https://i.esdrop.com/d/f/eJqYA2AGQd/OByHOENYhE.jpg",
  "https://i.esdrop.com/d/f/eJqYA2AGQd/7v7YxxywUp.jpg",
  "https://i.esdrop.com/d/f/eJqYA2AGQd/iUFMuj2KM5.jpg",
  "https://i.esdrop.com/d/f/eJqYA2AGQd/5KRv89sQ5Q.jpg",
  "https://i.esdrop.com/d/f/eJqYA2AGQd/CsveaQ8osg.jpg",
  "https://i.esdrop.com/d/f/eJqYA2AGQd/UREIIKcl6I.jpg",
];

export default function Carousel() {
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
      {/* <Wrapper> */}
      <Slide ref={slideRef} currentSlide={currentSlide}>
        {IMG.map((el, idx) => (
          <SlideList key={idx}>
            <Img src={el} />
          </SlideList>
        ))}
      </Slide>
      {/* </Wrapper> */}
    </>
  );
}
