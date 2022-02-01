import styled from "styled-components";
import { useState, useEffect } from "react";
import SingleMemoryCard from "./SingleMemoryCard";

//sort(() => Math.random() - 0.5)
const cardImages = [
  {
    src: "https://images.metmuseum.org/CRDImages/ep/web-large/DP-14344-001.jpg",
    matched: false,
  },
  {
    src: "https://images.metmuseum.org/CRDImages/ep/web-large/DT49.jpg",
    matched: false,
  },
  {
    src: "https://images.metmuseum.org/CRDImages/ep/web-large/DP-19709-001.jpg",
    matched: false,
  },
  {
    src: "https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg",
    matched: false,
  },
  {
    src: "https://images.metmuseum.org/CRDImages/ep/web-large/DP-19451-001.jpg",
    matched: false,
  },
  {
    src: "https://images.metmuseum.org/CRDImages/ep/web-large/DP318843.jpg",
    matched: false,
  },
  {
    src: "https://images.metmuseum.org/CRDImages/ep/web-large/DP226145.jpg",
    matched: false,
  },
  {
    src: "https://images.metmuseum.org/CRDImages/ep/web-large/DT5.jpg",
    matched: false,
  },
  {
    src: "https://images.metmuseum.org/CRDImages/ep/web-large/DP-1019-01.jpg",
    matched: false,
  },
  {
    src: "https://images.metmuseum.org/CRDImages/ep/web-large/DP278472.jpg",
    matched: false,
  },
];
//{ onShuffleCards, cards, turns }

function MemoryPlay() {
  const [cards, setCards] = useState();
  const [turns, setTurns] = useState();
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] //duplicate Cards
      .sort(() => Math.random() - 0.5) //besser nachvollziehen
      .map((card) => ({ ...card, memoryId: Math.random() })); //applying random Ids as proprty

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare 2 selected cards

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choice and increase turn

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1); //prev-> using the previous state
    setDisabled(false);
  };
  useEffect(() => {
    shuffleCards();
  }, []);
  return (
    <div>
      <h1>The Met Memory</h1>
      <MemoryBtn onClick={shuffleCards}>New Game</MemoryBtn>
      <p>Turns: {turns}</p>
      <CardGrid className="card-grid">
        {cards &&
          cards.map((card) => (
            <SingleMemoryCard
              key={card.memoryId}
              card={card}
              onHandleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
      </CardGrid>
    </div>
  );
}

export default MemoryPlay;

const CardGrid = styled.div`
  margin: 40px 6px 0px 6px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

const MemoryBtn = styled.button`
  background-color: rgba(51, 51, 51, 0.8);
  color: white;
  padding: 0.5em 0.5em;
  border-radius: 50px;
  border: none;
  cursor: pointer;
`;
