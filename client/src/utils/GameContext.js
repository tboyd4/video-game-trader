import React, { createContext } from "react";

import Pic1 from "../images/test-img.jpg";
import Pic2 from "../images/dis-pic.jpg";
import Pic3 from "../images/resi-pic.jpg";

const GameContext = createContext({
  testData: [
    {
      title: "Game1",
      released: "2001",
      image: Pic1,
      price: "$15.00",
    },
    {
      title: "Game2",
      released: "2005",
      image: Pic2,
      price: "$45.00",
    },
    {
      title: "Game3",
      released: "2011",
      image: Pic3,
      price: "$16.00",
    },
  ],
  userCart: [
    {
      title: "Game3",
      released: "2011",
      image: Pic3,
      price: "$16.00",
    },
  ],
});

export default GameContext;
