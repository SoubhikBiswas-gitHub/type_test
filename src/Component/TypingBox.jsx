import React from "react";

function TypingBox({ words }) {
  console.log(words);

  return (
    <div className="type-box">
      <div className="words">
        {words.map((word, pIndx) => (
          <span key={pIndx} className="word">
            {word.split("").map((letter, cIndx) => (
              <span key={cIndx} className="Charecter">
                {letter}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TypingBox;
