import { Paper } from "@mui/material";
import React, { createRef, useEffect, useMemo, useRef, useState } from "react";
import { useGameMode } from "../Context/GameMood";
import Uppermenu from "./Uppermenu";
import Notification from "./Notification";
import Stats from "./Stats";
var randomWords = require("random-words");

function TypingBox() {
  //variable
  // var totalCharacterCount=
  //state hooks
  const [totalCharacterCount, setTotalCharacterCount] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharecterIndex, setCurrentCharecterIndex] = useState(0);
  const [countDown, setCountDown] = useState(15);
  const [testStart, setTestStart] = useState(false);
  const [testOver, setTestOver] = useState(false);
  const [capsLocked, setcapsLocked] = useState(false);
  const [correctChar, setCorrectChar] = useState(0);
  const [incorrectChar, setInCorrectChar] = useState(0);
  const [missedChar, setMissedChar] = useState(0);
  const [extraChar, setExtraChar] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [graphData, setGraphData] = useState([]);
  // const[words,setWords] = useState([]);
  const [intervalId, setIntervalId] = useState(null);
  const [wordsArray, setwordsArray] = useState(() => {
    return randomWords(50);
  });

  const words = useMemo(() => {
    return wordsArray;
  }, [wordsArray]);

  const wordSpanRef = useMemo(() => {
    return Array(words.length)
      .fill(0)
      .map((ref) => createRef());
  }, [words]);

  const { gameTime } = useGameMode();
  const textInputRef = useRef(null);

  // const wordSpanRef =

  //function

  const resetGame = () => {
    setCurrentWordIndex(0);
    setCurrentCharecterIndex(0);
    setCountDown(gameTime);
    setTestStart(false);
    setTestOver(false);
    setCorrectChar(0);
    setInCorrectChar(0);
    setCorrectWords(0);
    setExtraChar(0);
    setMissedChar(0);
    setGraphData([]);
    // words=randomWords(50);
    let random = randomWords(50);
    setwordsArray(random);
    clearInterval(intervalId);
    focusInput();
    textInputRef.current.value = "";
  };

  const focusInput = () => {
    textInputRef.current.focus();
  };

  const startTimer = () => {
    const intervalId = setInterval(timer, 1000);
    setIntervalId(intervalId);
    function timer() {
      setCountDown((prevCountDown) => {
        setCorrectChar((correctChar) => {
          setGraphData((data) => {
            console.log(data, "---");
            return [...data,[gameTime - prevCountDown,Math.round(correctChar / 5 / ((gameTime - prevCountDown + 1) / 60))]];
          });
          return correctChar;
        });

        if (prevCountDown === 1) {
          clearInterval(intervalId);
          setCountDown(0);
          setTestOver(true);
        } else {
          return prevCountDown - 1;
        }
      });
    }
  };

  const calculateWPM = () => {
    return Math.round(correctChar / 5 / (gameTime / 60));
    // return Math.round((correctChar/5)/((graphData[graphData.length-1][0]+1)/60));
  };

  const calculateAccuracy = () => {
    return Math.round((correctWords / currentWordIndex) * 100);
  };

  const handlerKeyDown = (e) => {
    if (!testStart) {
      startTimer();
      setTestStart(true);
    }

    let key = e.key;

    setcapsLocked(e.getModifierState("CapsLock"));
    //current word refference
    let allSpans =
      wordSpanRef[currentWordIndex].current.querySelectorAll("span");

    // //space click --------------------------> next word
    if (e.keyCode === 32) {
      const correctChar =
        wordSpanRef[currentWordIndex].current.querySelectorAll(".correctChar");
      const incorrectChar =
        wordSpanRef[currentWordIndex].current.querySelectorAll(
          ".incorrectChar"
        );
      setMissedChar(
        missedChar +
          (allSpans.length - incorrectChar.length - correctChar.length)
      );
      if (correctChar.length === allSpans.length) {
        setCorrectWords(correctWords + 1);
      }

      if (allSpans.length <= currentCharecterIndex) {
        //click on ==> end of word
        allSpans[currentCharecterIndex - 1].className = allSpans[
          currentCharecterIndex - 1
        ].className.replace("currentCharRightCursor", "");
      } else {
        //click on ==> mid of word
        allSpans[currentCharecterIndex].className = allSpans[
          currentCharecterIndex - 1
        ].className.replace("currentCharLeftCursor", "");
      }
      wordSpanRef[currentWordIndex + 1].current.querySelectorAll(
        "span"
      )[0].className = "Charecter currentCharLeftCursor";
      setCurrentWordIndex(currentWordIndex + 1);
      setCurrentCharecterIndex(0);
      return;
    }

    // backspace -------------------> delete charecter but limited to same charecter
    if (e.keyCode === 8) {
      if (currentCharecterIndex !== 0) {
        //   // delete extra charecter
        if (currentCharecterIndex === allSpans.length) {
          if (
            allSpans[currentCharecterIndex - 1].className.includes(
              "extraLetter"
            )
          ) {
            allSpans[currentCharecterIndex - 1].remove();
            allSpans[currentCharecterIndex - 2].className +=
              " currentCharRightCursor";
          } else {
            allSpans[currentCharecterIndex - 1].className =
              "Charecter currentCharLeftCursor";
          }
          setCurrentCharecterIndex(currentCharecterIndex - 1);
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
      setExtraChar(extraChar + 1);
      let newSpan = document.createElement("span");
      newSpan.innerText = e.key;
      newSpan.className =
        "Charecter incorrectChar currentCharRightCursor extraLetter";
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
      setCorrectChar(correctChar + 1);
      wordSpanRef[currentWordIndex].current.querySelectorAll("span")[
        currentCharecterIndex
      ].className = "Charecter correctChar";
    } else {
      setInCorrectChar(incorrectChar + 1);
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
  const handlerKeyUp = (e) => {};

  useEffect(() => {
    // let random = randomWords(50);
    // setwordsArray(random);
    focusInput();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    resetGame();
  }, [gameTime]);

  useEffect(() => {
    wordSpanRef.map((node) => {
      Array.from(node.current.childNodes).map((span) => {
        span.className = "Charecter";
      });
    });
    if (wordSpanRef[0]) {
      wordSpanRef[0].current.querySelectorAll("span")[0].className =
        "Charecter currentCharLeftCursor";
    }
  }, [wordSpanRef]);

  // console.log("--------------------------------------------------------------------------------------")
  return (
    <>
      <Notification open={capsLocked} notificationType="Caps Locked" />
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "80%",
          margin: "10px auto",
          padding: "10px 20px",
          
        }}
      >
        <Uppermenu countDown={countDown} />

        {!testOver ? (
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
        ) : (
          <div className="stats-box">
            <Stats
              graphData={graphData}
              wpm={calculateWPM()}
              accuracy={calculateAccuracy()}
              correctChars={correctChar}
              incorrectChars={incorrectChar}
              extraChars={extraChar}
              missedChars={missedChar}
            />
          </div>
        )}

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
