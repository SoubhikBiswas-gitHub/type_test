import "./App.css";
import TypingBox from "./Component/TypingBox";
import { GlobalStyle } from "./Styled_Component/global";
var randomWords = require('random-words');

function App() {

  const words=randomWords(50);

  return (
    <div className="canvas">
      <GlobalStyle />
      <h1>Typing Website</h1>
      <TypingBox words={words} />
      <h1>Footer</h1>
    </div>
  );
}

export default App;
