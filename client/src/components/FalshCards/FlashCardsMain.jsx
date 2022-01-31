import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import FlashCardsList from "./FlashCardsList";
import "./TempFlashCard.css";
import { v4 as uuidv4 } from "uuid";
import FAVFlashCardsList from "./FAVFlashCardList";

function FlashCardsMain({ favPaintings }) {
  const [btnClickedFlash, setBtnClickedFlash] = useState("btnLearnYourFavs");
  const [flashCards, setFlashCards] = useState([]);
  const amountEl = useRef();

  function decodeString(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  function handleFlashCardsSubmit(event) {
    event.preventDefault();
    const fetchData = async () => {
      const data = await fetch(
        `https://opentdb.com/api.php?amount=${amountEl.current.value}&category=25`
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
            id: uuidv4(), //`${index}-${Date.now()}`,
            question: decodeString(questionItem.question),
            answer: answer,
            options: options.sort(() => Math.random() - 0.5),
          };
        }
      );
      setFlashCards(singleQuestion);
    };
    fetchData().catch(console.error);
  }

  return (
    <LearnContainer>
      <ToggleBtnPair>
        <BtnLearnYourFavs
          type="button"
          onClick={() => setBtnClickedFlash("btnLearnYourFavs")}
          btnClickedFlash={btnClickedFlash}
        >
          Flash Favs
        </BtnLearnYourFavs>

        <BtnQuiz
          type="button"
          onClick={() => setBtnClickedFlash("btnQuiz")}
          btnClickedFlash={btnClickedFlash}
        >
          Art Quiz
        </BtnQuiz>
      </ToggleBtnPair>

      {btnClickedFlash === "btnLearnYourFavs" && favPaintings && (
        <FAVFlashCardsList favPaintings={favPaintings} />
      )}

      {btnClickedFlash === "btnQuiz" && (
        <div>
          <HeaderFlashCardForm
            className="header"
            onSubmit={handleFlashCardsSubmit}
          >
            <div className="form-group">
              <label htmlFor="amount">Number Of Questions</label>
              <input
                type="number"
                id="amount"
                min="1"
                max="29"
                step="1"
                defaultValue={10}
                ref={amountEl}
              />
            </div>
            <div className="from-group">
              <button className="btn">Generate</button>
            </div>
          </HeaderFlashCardForm>
          <FlashCardListContainer>
            <FlashCardsList flashCards={flashCards} />
          </FlashCardListContainer>
        </div>
      )}
    </LearnContainer>
  );
}

export default FlashCardsMain;

const LearnContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ToggleBtnPair = styled.div`
  display: flex;
  margin-bottom: 1rem;

  button {
    border: none;
    cursor: pointer;
    height: 2rem;
    font-size: 0.9rem;
    padding: 5px;
    width: 6rem;
  }
`;
const BtnLearnYourFavs = styled.button`
  border-radius: 50px 0px 0px 50px;
  color: ${(props) =>
    props.btnClickedFlash === "btnLearnYourFavs"
      ? "#EC012A"
      : "rgba(51, 51, 51, 0.8)"};
  background-color: ${(props) =>
    props.btnClickedFlash === "btnLearnYourFavs" ? "#505050" : "#ffffff"};
`;
const BtnQuiz = styled.button`
  border-radius: 0 50px 50px 0;
  color: ${(props) =>
    props.btnClickedFlash === "btnQuiz" ? "#EC012A" : "rgba(51, 51, 51, 0.8)"};
  background-color: ${(props) =>
    props.btnClickedFlash === "btnQuiz" ? "#505050" : "#ffffff"};
`;
const HeaderFlashCardForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: white;
  padding: 0 1.5rem;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
  margin: 1rem;
`;

const FlashCardListContainer = styled.div`
  /* display: flex;
  justify-content: center; */
`;
