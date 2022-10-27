import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Slide,
} from "@mui/material";
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import img from '../Styled_Component/img/redo.png'
import * as React from "react";
// import { Dialog, DialogTitle } from '@material-ui/core';
import { random, set } from 'lodash';
import { createRef, useEffect, useMemo, useRef, useState } from "react";
import { useGameMode } from "../Context/GameMood";
import Uppermenu from "./Uppermenu";
import Notification from "./Notification";
import Stats from "./Stats";
import { useTheme } from "../Context/ThemeContext";
var randomWords = require("random-words");

function TypingBox() {

  const {theme}=useTheme()
  //variable
  // var totalCharacterCount=
  //state hooks
  const {gameTime, gameWords, gameMode} = useGameMode();
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
  const [openNavigation, setOpenNavigation] = useState(false);
  const wordRefferRef= useRef()
  // const[words,setWords] = useState([]);
  const [intervalId, setIntervalId] = useState(null);
  const [wordsArray, setwordsArray] = useState(() => {
    if(gameMode==='words'){
      return randomWords(gameWords);
  }
    return randomWords(45);
  });

  const words = useMemo(() => {
    return wordsArray;
  }, [wordsArray]);

  const wordSpanRef = useMemo(() => {
    return Array(words.length)
      .fill(0)
      .map((ref) => createRef());
  }, [words]);

  // const { gameTime } = useGameMode();
  const textInputRef = useRef(null);

  // const wordSpanRef =

  //function

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  // export default function AlertDialogSlide() {
  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };
  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  const resetWordSpanRef=()=>{
    wordSpanRef.map((node) => {
      Array.from(node.current.childNodes).map((span) => {
        span.className = "Charecter";
      });
    });
    if (wordSpanRef[0]) {
      wordSpanRef[0].current.querySelectorAll("span")[0].className =
        "Charecter currentCharLeftCursor";
    }
  }

  const redoGame = () => {
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
    resetWordSpanRef()
    clearInterval(intervalId);
    textInputRef.current.value = "";
    focusInput();
  };


  const resetGame = () => {
    setCurrentWordIndex(0);
    setCurrentCharecterIndex(0);
    setCountDown(gameTime);
    setTestStart(false);
    setTestOver(false);
    clearInterval(intervalId);
    if(gameMode==='words'){
      let random = randomWords(Number(gameWords));
      setwordsArray(random);
      setCountDown(180);
  }
  else{
      let random = randomWords(50);
      setwordsArray(random);
  }
    setCorrectChar(0);
    setInCorrectChar(0);
    setCorrectWords(0);
    setExtraChar(0);
    setMissedChar(0);
    setGraphData([]);
    // words=randomWords(50);
    // let random = randomWords(45);
    // setwordsArray(random);
    
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
            const startTime = (gameMode==='words')?180:gameTime
            return [...data,[startTime-prevCountDown,Math.round((correctChar/5)/((startTime-prevCountDown+1)/60))]];
            // return [
            //   ...data,
            //   [
            //     gameTime - prevCountDown,
            //     Math.round(
            //       correctChar / 5 / ((gameTime - prevCountDown + 1) / 60)
            //     ),
            //   ],
            // ];
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

  let blurWarningDiv = document.getElementById("focusWarning");
const handleInputFocus=()=>{
  wordRefferRef.current.style.filter= "blur(3px)";
  if(testStart){
    clearInterval(intervalId)
  }
  blurWarningDiv.style.display="block";
  
}

const handleInputInFocus=()=>{
  wordRefferRef.current.style.removeProperty("filter");
  if(testStart){
    startTimer()
  }
  if(blurWarningDiv){
    blurWarningDiv.style.display="none"
  }
}

  const calculateWPM = () => {
    return Math.round(correctChar / 5 / (gameTime / 60));
    // return Math.round((correctChar/5)/((graphData[graphData.length-1][0]+1)/60));
  };

  const calculateAccuracy = () => {
    if(correctWords===0 || currentWordIndex===0){
      return 0;
    }
    return Math.round((correctWords / currentWordIndex) * 100);
  };

  const handleDialogEvent = (e) => {
    
    if(e.keyCode === 13 || e.keyCode===9){
      e.preventDefault();
      setOpenNavigation(false);
      resetGame();
      return;   
  }
  if(e.keyCode===32){
      e.preventDefault();
      setOpenNavigation(false);
      redoGame();
      return;
  }
  e.preventDefault();
  setOpenNavigation(false);
  focusInput();
  startTimer();
  };

  const handleClose = () => {
    setOpenNavigation(false);
  };

  const handlerKeyDown = (e) => {
    if(e.keyCode===9){

      if(testStart){
          clearInterval(intervalId);
      }
      e.preventDefault();
      setOpenNavigation(true);
      return;
  }
  setcapsLocked(e.getModifierState("CapsLock"));
  if (!testStart) {
    startTimer();
    setTestStart(true);
  }

  let allSpans =wordSpanRef[currentWordIndex].current.querySelectorAll("span");

    // if(testOver){
    //   if(e.keyCode === 9){
    //     clearInterval(intervalId)
    //     e.preventDefault();
    //     setOpenNavigation(true);
    //     return;
    //   }
     

    // }else{
    // if (e.keyCode === 9) {
    //   if(!testOver && testStart){
    //     clearInterval(intervalId)
    //   }
    //   e.preventDefault();
    //   setOpenNavigation(true);
    //   return;
    // }

    
    
    let key = e.key;
    
    //current word refference
    
    // //space click --------------------------> next word
    if (e.keyCode === 32) {

      if(currentWordIndex===wordsArray.length-1){
        clearInterval(intervalId);
        setTestOver(true);  
        return;   
    }
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
    if (currentCharecterIndex + 1 ===wordSpanRef[currentWordIndex].current.querySelectorAll("span").length) {
      wordSpanRef[currentWordIndex].current.querySelectorAll("span")[
        currentCharecterIndex
      ].className += " currentCharRightCursor";
    } else {
      wordSpanRef[currentWordIndex].current.querySelectorAll("span")[
        currentCharecterIndex + 1
      ].className = "Charecter currentCharLeftCursor";
    }

    setCurrentCharecterIndex(currentCharecterIndex + 1);
  }
 
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
    resetWordSpanRef()
  }, [wordSpanRef]);

  useEffect(()=>{
    resetGame();
},[gameTime,gameMode,gameWords]);

  // console.log("--------------------------------------------------------------------------------------")
  return (
    <>
      {/* <Notification open={capsLocked} notificationType="Caps Locked" /> */}
      <Notification open={capsLocked}/>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "80%",
          margin: "10px auto",
          padding: "10px 20px",
          backgroundColor:theme.mainbg,
        }}
      >
        {!testOver ? (
          <div className="type-box"  onClick={focusInput} >
            <Uppermenu countDown={countDown} />
                      <div id="focusWarning" style={{width:"100%",display:"none",position:"absolute",top:"50%",left:"0"}}> 
                       
                          <div style={{color:theme.text2,fontSize:"1.5rem",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>Click Here To Start  <img style={{ display:"block",height:"50px"}} src={img} alt="" /></div>
                      </div>
            <div className="words" ref={wordRefferRef}>
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
          style={{opacity:0}}
          onBlur={handleInputFocus}
          onFocus={handleInputInFocus}
          onKeyDown={(e) => handlerKeyDown(e)}
          onKeyUp={(e) => handlerKeyUp(e)}
          ref={textInputRef}
        />
      </Paper>

     
        <Dialog
          open={openNavigation}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          onKeyDown={handleDialogEvent}
          aria-describedby="alert-dialog-slide-description"
          
        >
          <DialogTitle sx={{color:theme.mainbg,backgroundColor:theme.typeBox}}>User Navigation</DialogTitle>
          <DialogContent sx={{backgroundColor: theme.mainbg2}}>
            <DialogContentText id="alert-dialog-slide-description" sx={{margin:"20px",color: theme.text1}}>
              Press <span className="kdb">Space</span> Redo The Game
            </DialogContentText>
            <DialogContentText id="alert-dialog-slide-description" sx={{margin:"20px",color: theme.text1}}>
              Press <span className="kdb">Enter</span>/<span className="kdb">Tab</span> Restart The Game
            </DialogContentText>
            <DialogContentText id="alert-dialog-slide-description" sx={{margin:"20px",color: theme.text1}}>
              Press any <span className="kdb">Esc</span>/
              <span className="kdb">Click</span>/any other <span className="kdb">Key</span> Outside Exit Navigation
            </DialogContentText>
          </DialogContent>
        </Dialog>
     
      
    </>
  );
}

export default TypingBox;
