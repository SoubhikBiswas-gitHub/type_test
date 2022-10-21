import { createContext, useContext, useState } from "react";

const GameMoodContext = createContext();

export const GameMoodContextProvider = ({ children }) => {
  const [gameTime, setGameTime] = useState(15);
  const values = {
    gameTime,
    setGameTime,
  };
  return (
    <GameMoodContext.Provider value={values}>
      {children}
    </GameMoodContext.Provider>
  );
};

export const useGameMode = () => useContext(GameMoodContext);
