"use client";

import { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";

const ScrollToTopButton = () => {
  const { y: scrollY } = useWindowScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 text-sm right-4 p-3 bg-silver text-neutral-dark rounded-full shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      Till toppen
    </button>
  );
};

export default ScrollToTopButton;
