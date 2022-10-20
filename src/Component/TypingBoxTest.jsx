import React from 'react'

function TypingBoxTest() {
  return (
    <div>TypingBoxTest</div>
  )
}

export default TypingBoxTest

  //   if(e.key.length!==1){
  //     return;
  // }

  // if(currentCharecterIndex===allSpans.length){
  //     let newSpan = document.createElement('span'); // -> <span></span>
  //     newSpan.innerText = e.key;
  //     newSpan.className = 'Charecter incorrectChar currentCharRightCursor extra';
  //     // setExtraChar(extraChar+1);
  //     allSpans[currentCharecterIndex-1].className = allSpans[currentCharecterIndex-1].className.replace("currentCharRightCursor","");

  //     wordSpanRef[currentWordIndex].current.append(newSpan);
  //     setCurrentCharecterIndex(currentCharecterIndex+1);
  //     return;
  // }