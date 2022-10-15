import React, { createRef, useEffect, useRef, useState } from "react";

function TypingBox({ words }) {
  //variable

  //state hooks
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharecterIndex, setCurrentCharecterIndex] = useState(0);

  //hooks
  const textInputRef = useRef(null);
  const wordSpanRef = Array(words.length).fill(0).map((ref) => createRef());
  console.log(wordSpanRef)

  useEffect(() => {
    focusInput();
  }, []);

  //function
  const focusInput = () => {
    textInputRef.current.focus();
  };

  const handlerKeyUp = (e) => {};

  const handlerKeyDown = (e) => {
    let key = e.key;
    let currentCharecter =wordSpanRef[currentWordIndex].current.querySelectorAll("span")[currentCharecterIndex].innerText;
    console.log(wordSpanRef[currentWordIndex].current.querySelectorAll("span")[currentCharecterIndex])

    // //space click -> next word
    if (e.keyCode === 32) {
      console.log(currentWordIndex);
      setCurrentWordIndex(currentWordIndex + 1);
      setCurrentCharecterIndex(0);
      console.log(currentWordIndex);
      return;
    }

     

    // backspace -> delete charecter but limited to same charecter
    // if (e.keyCode === 8) {
    //   if (currentCharecterIndex !== 0) {
    //     wordSpanRef[currentWordIndex].current.querySelectorAll("span")[
    //       currentCharecterIndex - 1
    //     ].className = "char";
    //     console.log("backspace");
    //     setCurrentCharecterIndex(currentCharecterIndex - 1);
    //   }
    //   return;
    // }

    if (key === currentCharecter) {
      wordSpanRef[currentWordIndex].current.querySelectorAll("span")[
        currentCharecterIndex
      ].className = "correctChar";
    } else {
      wordSpanRef[currentWordIndex].current.querySelectorAll("span")[
        currentCharecterIndex
      ].className = "incorrectChar";
    }
    setCurrentCharecterIndex(currentCharecterIndex + 1);
  };

  return (
    <>
      <div className="type-box" onClick={focusInput}>
        <div className="words">
          {words.map((word, pIndx) => (
            <span key={pIndx} className="word" ref={wordSpanRef[pIndx]}>
              {word.split("").map((letter, cIndx) => (
                <span key={cIndx} className="Charecter">
                  {letter}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <input
        type="text"
        className="hidden-input"
        onKeyDown={(e) => handlerKeyDown(e)}
        onKeyUp={(e) => handlerKeyUp(e)}
        ref={textInputRef}
      />
    </>
  );
}

export default TypingBox;
