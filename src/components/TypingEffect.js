import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // After typing completes, stop blinking after 1 second
      setTimeout(() => setShowCursor(false), 1000);
    }
  }, [currentIndex, text, speed]);

  // Cursor Blinking Effect (only while typing)
  useEffect(() => {
    if (currentIndex < text.length) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [currentIndex, text]);

  return (
    <h1 className="font-mono text-lg">
      {displayedText}
      {showCursor && <span className="text-blue-500">|</span>}
    </h1>
  );
};

export default TypingEffect;
