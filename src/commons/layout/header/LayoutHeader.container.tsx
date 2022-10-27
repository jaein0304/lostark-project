import { useEffect, useState } from "react";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const [windowSize, setWindowSize] = useState(false);

  // 윈도우 사이즈가 991보다(태블릿사이즈) 작으면 윈도우사이즈 true
  const handleResize = () => {
    if (window.innerWidth <= 991) setWindowSize(true);
    else setWindowSize(false);
  };

  useEffect(() => {
    if (window.innerWidth <= 991) setWindowSize(true);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]); // 윈도우 사이즈가 변할 때 rerender

  return <LayoutHeaderUI windowSize={windowSize} />;
}
