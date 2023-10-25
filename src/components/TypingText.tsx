import React, { useState, useEffect } from "react";

interface Props {
  children: string;
  id?: string;
  element?: keyof JSX.IntrinsicElements;
  speed?: number;
}

const TypingText: React.FC<Props> = ({ children, id, element, speed = 70 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [blinkingCursor, setBlinkingCursor] = useState(true);
  const speedCursor = 400;
  const Element = element as keyof JSX.IntrinsicElements;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayedText((prevText) => prevText + children[currentIndex]);

      if (currentIndex === children.length - 1) {
        clearInterval(intervalId);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, speed + Math.random() * 100);

    const cursorIntervalId = setInterval(() => {
      setBlinkingCursor((prevCursor) => !prevCursor);
    }, speedCursor);

    return () => {
      clearInterval(intervalId);
      clearInterval(cursorIntervalId);
    };
  }, [children, currentIndex]);

  return (
    <Element id={id}>
      {displayedText}
      {blinkingCursor && "|"}
    </Element>
  );
};

export default TypingText;
