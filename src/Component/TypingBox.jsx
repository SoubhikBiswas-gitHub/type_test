import { Paper } from "@mui/material";
import React, { createRef, useEffect, useRef, useState } from "react";

function TypingBox({ words }) {
  //variable

  //state hooks
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharecterIndex, setCurrentCharecterIndex] = useState(0);

  //hooks
  const textInputRef = useRef(null);
  const wordSpanRef = Array(words.length)
    .fill(0)
    .map((ref) => createRef());

  useEffect(() => {
    focusInput();
    wordSpanRef[0].current.querySelectorAll("span")[0].className =
      "Charecter currentCharLeftCursor";
  }, []);

  //function
  const focusInput = () => {
    textInputRef.current.focus();
  };

  const handlerKeyUp = (e) => {};

  const handlerKeyDown = (e) => {
    let key = e.key;

    //current word refference
    let allSpans =
      wordSpanRef[currentWordIndex].current.querySelectorAll("span");

    // //space click --------------------------> next word
    if (e.keyCode === 32) {
      if (allSpans.length <= currentCharecterIndex) {
        //click on ==> end of word
        allSpans[currentCharecterIndex - 1].className = allSpans[
          currentCharecterIndex - 1
        ].className.replace("currentCharRightCursor", "");
      } else {
        //click on ==> mid of word
        allSpans[currentCharecterIndex].className = allSpans[currentCharecterIndex - 1].className.replace("currentCharLeftCursor", "");
      }
      wordSpanRef[currentWordIndex + 1].current.querySelectorAll("span")[0].className = "Charecter currentCharLeftCursor";
      setCurrentWordIndex(currentWordIndex + 1);
      setCurrentCharecterIndex(0);
      return;
    }

    // backspace -------------------> delete charecter but limited to same charecter
    if (e.keyCode === 8) {
      if (currentCharecterIndex !== 0) {
      //   // delete extra charecter
        if(currentCharecterIndex===allSpans.length){
          if(allSpans[currentCharecterIndex-1].className.includes("extraLetter")){
            allSpans[currentCharecterIndex-1].remove();
            allSpans[currentCharecterIndex-2].className+=" currentCharRightCursor"
          }else{
            allSpans[currentCharecterIndex-1].className='Charecter currentCharLeftCursor'
          }
          setCurrentCharecterIndex(currentCharecterIndex-1);
          return;
        }


        wordSpanRef[currentWordIndex].current.querySelectorAll("span")[
          currentCharecterIndex
        ].className = "Charecter";
        wordSpanRef[currentWordIndex].current.querySelectorAll("span")[
          currentCharecterIndex - 1
        ].className = "Charecter currentCharLeftCursor";
        setCurrentCharecterIndex(currentCharecterIndex - 1);
      }
      return;
    }

    //if user click tab/alt like key(except backspace/spacebar) then it will won't add to current word
    if (e.key.length !== 1) {
      return;
    }

    //if user not click space after a word then it will add countinue a new character in same word with red color and right cursor
    if (currentCharecterIndex === allSpans.length) {
      let newSpan = document.createElement("span");
      newSpan.innerText = e.key;
      newSpan.className = "Charecter incorrectChar currentCharRightCursor extraLetter";
      allSpans[currentCharecterIndex - 1].className = allSpans[
        currentCharecterIndex - 1
      ].className.replace("currentCharRightCursor", "");
      wordSpanRef[currentWordIndex].current.append(newSpan);
      setCurrentCharecterIndex(currentCharecterIndex + 1);
      return;
    }

    // correct charecter ----> green color and incorrect charecter ---------> red color ====>setting
    let currentCharecter =
      wordSpanRef[currentWordIndex].current.querySelectorAll("span")[
        currentCharecterIndex
      ].innerText;
    if (key === currentCharecter) {
      wordSpanRef[currentWordIndex].current.querySelectorAll("span")[
        currentCharecterIndex
      ].className = "Charecter correctChar";
    } else {
      wordSpanRef[currentWordIndex].current.querySelectorAll("span")[
        currentCharecterIndex
      ].className = "Charecter incorrectChar";
    }

    // Cursor position setting ===========>
    if (
      currentCharecterIndex + 1 ===
      wordSpanRef[currentWordIndex].current.querySelectorAll("span").length
    ) {
      wordSpanRef[currentWordIndex].current.querySelectorAll("span")[
        currentCharecterIndex
      ].className += " currentCharRightCursor";
    } else {
      wordSpanRef[currentWordIndex].current.querySelectorAll("span")[
        currentCharecterIndex + 1
      ].className = "Charecter currentCharLeftCursor";
    }

    setCurrentCharecterIndex(currentCharecterIndex + 1);
  };

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "90%",
          margin: "30px",
          padding: "10px",
        }}
      >
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
      </Paper>
    </>
  );
}

export default TypingBox;
