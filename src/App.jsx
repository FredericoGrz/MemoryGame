import _ from "lodash";
import { Card } from "./components/Card";
import { Cards } from "./components/Cards";

import banana from "./assets/banana.svg";
import apple from "./assets/apple.svg";
import pineapple from "./assets/pineapple.svg";
import watermelon from "./assets/watermelon.svg";
import grape from "./assets/grape.svg";
import orange from "./assets/orange.svg";
import strawberry from "./assets/strawberry.svg";
import { useEffect, useState } from "react";
/**
 * The main component of the game.
 * @returns {JSX.Element} The rendered component.
 */
function App() {
  // State variables
  const [clickedCards, setClickedCards] = useState([]); // Stores the indices of the clicked cards
  const [shuffledCards, setShuffledCards] = useState([]); // Stores the shuffled cards
  const [correctCards, setCorrectCards] = useState([]); // Stores the indices of the correctly matched cards

  // Mapping of fruit names to their respective images
  const fruitsMap = {
    banana,
    apple,
    pineapple,
    watermelon,
    grape,
    orange,
    strawberry,
  };

  // Array of fruit names, each repeated twice
  const cards = [
    "banana",
    "banana",
    "apple",
    "apple",
    "pineapple",
    "pineapple",
    "watermelon",
    "watermelon",
    "grape",
    "grape",
    "orange",
    "orange",
    "strawberry",
    "strawberry",
  ];

  /**
   * Handles the click event of a card.
   * @param {number} index - The index of the clicked card.
   */
  function handleCardClick(index) {
    const isCardAlreadyClicked = clickedCards.includes(index);
    if (isCardAlreadyClicked) return;
    else if (clickedCards.length < 2)
      setClickedCards((prev) => [...prev, index]);
  }

  // Shuffles the cards when the component mounts
  useEffect(() => {
    setShuffledCards(_.shuffle(cards));
  }, []);

  // Checks if two clicked cards match and updates the state accordingly
  useEffect(() => {
    if (clickedCards.length === 2) {
      if (
        fruitsMap[shuffledCards[clickedCards[0]]] ===
        fruitsMap[shuffledCards[clickedCards[1]]]
      ) {
        setCorrectCards((prev) => [...prev, clickedCards[0], clickedCards[1]]);
        setClickedCards([]);
      } else {
        setTimeout(() => {
          setClickedCards([]);
        }, 800);
      }
    }
  }, [clickedCards]);

  // Resets the game when all cards are matched
  useEffect(() => {
    if (
      correctCards.length !== 0 &&
      correctCards.length === shuffledCards.length
    ) {
      alert("Congratulation, you won!!");
      setShuffledCards(_.shuffle(cards));
      setCorrectCards([]);
      setClickedCards([]);
    }
  }, [correctCards]);

  // Renders the game UI
  return (
    <div className="w-full min-h-screen flex flex-col gap-10 py-4 justify-center lg:justify-evenly items-center bg-zinc-100">
      <h1 className="text-4xl md:text-5xl lg:text-7xl text-red-400 text-center font-bold">
        Matching Game
      </h1>
      <Cards>
        {shuffledCards.map((card, index) => (
          <Card
            key={index}
            img={fruitsMap[card]}
            isVisible={
              clickedCards.includes(index) || correctCards.includes(index)
            }
            onClick={() => handleCardClick(index)}
          />
        ))}
      </Cards>
    </div>
  );
}

export default App;
