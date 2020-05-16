import { createContext } from "react";


const GameContext = createContext({
  testData: [""],
  userCart: [""],
  sellerData: [""],
});

export default GameContext;
