import React, { createContext } from "react";


const GameContext = createContext({
  testData: [""],
  userCart: [""],
});

export default GameContext;
