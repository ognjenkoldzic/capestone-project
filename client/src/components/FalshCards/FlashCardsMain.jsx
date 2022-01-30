import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import FlashCardsList from "./FlashCardsList";
import "./TempFlashCard.css";
import { v4 as uuidv4 } from "uuid";
import FAVFlashCardsList from "./FAVFlashCardList";
//{  "src":"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14344-001.jpg",}

function FlashCardsMain({ favPaintings }) {
  const [flashCards, setFlashCards] = useState([]);
  // const categoryEl = useRef(); //
  // const [categories, setCategories] = useState([]);
  const amountEl = useRef();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetch("https://opentdb.com/api_category.php");
  //     const json = await data.json();
  //     const categoriesData = json;
  //     setCategories(categoriesData.trivia_categories);
  //   };

  //   fetchData().catch(console.error);
  // }, []);

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
    <section>
      <FAVFlashCardsList favPaintings={favPaintings} />
      <form className="header" onSubmit={handleFlashCardsSubmit}>
        {/* <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}>
            {categories.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {" "}
                  {category.name}
                </option>
              );
            })}
          </select>
        </div> */}
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
      </form>
      <FlashCardListContainer>
        <FlashCardsList flashCards={flashCards} />
      </FlashCardListContainer>
    </section>
  );
}

export default FlashCardsMain;
const FlashCardListContainer = styled.div`
  /* display: flex;
  justify-content: center; */
`;
