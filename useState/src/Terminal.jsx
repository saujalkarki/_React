import { useState, useEffect } from "react";
import "./terminal.css";

const Terminal = () => {
  const [text, setText] = useState("");
  const [line, setLine] = useState(0);

  const lines = [
    "$ Welcome to my portfolio...",
    "System: Redirecting to home page...",
  ];

  useEffect(() => {
    if (line < lines.length) {
      const currentLine = lines[line];
      let charIndex = 0;

      const interval = setInterval(() => {
        if (charIndex < currentLine.length) {
          setText((prev) => prev + currentLine[charIndex]);
          charIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setText(""); // Clear the line
            setLine((prev) => prev + 1); // Move to the next line
          }, 1000); // Pause before clearing
        }
      }, 100); // Typing speed

      return () => clearInterval(interval);
    }
  }, [line]);

  return (
    <div className="terminal">
      <div className="window-buttons">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Terminal;
