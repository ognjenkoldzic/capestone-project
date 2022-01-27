import styled from "styled-components";
import { useState, useEffect } from "react";
import FlashCardsList from "./FlashCardsList";
import "./TempFlashCard.css";
import { v4 as uuidv4 } from "uuid";
//{  "src":"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14344-001.jpg",}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "Who painted this Painting?",
    answer: "TEST",
    options: ["not really needed", "not really needed22"],
  },
  {
    id: 2,
    question: "Who painted this Painting? ",
    answer: "TEST2",
    options: ["not really needed2", "not really needed22"],
  },
  {
    id: 3,
    question: "Who painted this Painting?",
    answer: "TEST3",
    options: ["not really needed3", "not really needed22"],
  },
];

function FlashCardsMain() {
  const [flashCards, setFlashCards] = useState(SAMPLE_FLASHCARDS);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://opentdb.com/api.php?amount=10&category=25"
      );
      const json = await data.json();
      const questionsData = json;
      const singleQuestion = questionsData.results.map(
        (questionItem, index) => {
          const answer = decodeString(questionItem.correct_answer);
          const options = [
            ...questionItem.incorrect_answers.map((a) => decodeString(a)),
            answer,
          ];

          return {
            id: `${index}-${Date.now()}`, //uuidv4() eventluell
            question: decodeString(questionItem.question),
            answer: answer,
            options: options.sort(() => Math.random() - 0.5),
          };
        }
      );
      setFlashCards(singleQuestion);
    };

    fetchData().catch(console.error);
  }, []);

  function decodeString(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  return (
    <FlashCardListContainer>
      <FlashCardsList flashCards={flashCards} />
    </FlashCardListContainer>
  );
}

export default FlashCardsMain;
const FlashCardListContainer = styled.div`
  /* display: flex;
  justify-content: center; */
`;
