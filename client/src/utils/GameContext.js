import { createContext } from "react";


const GameContext = createContext({
  testData: [
    {
      title: "",
      console: "",
      price: 0,
      year: 0,
      image: ""
    }
  ],
  userCart: [""],
  sellerData: [""],
});

export default GameContext;
