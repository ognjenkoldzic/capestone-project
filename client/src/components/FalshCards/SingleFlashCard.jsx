import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import "./TempFlashCard.css";

function SingleFlashCard({ flashCard }) {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState("initail");

  const frontEl = useRef();
  const backEl = useRef();

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height;
    const backHeight = backEl.current.getBoundingClientRect().height;
    setHeight(Math.max(frontHeight, backHeight, 100));
  }

  useEffect(setMaxHeight, [
    flashCard.question,
    flashCard.answer,
    flashCard.options,
  ]);
  useEffect(() => {
    window.addEventListener("resize", setMaxHeight);
    return () => window.removeEventListener("resize", setMaxHeight);
  }, []);

  return (
    <CardStyled height={height} flip={flip} onClick={() => setFlip(!flip)}>
      <CardFront flip={flip} ref={frontEl}>
        <h3>Question:</h3>
        <span>{flashCard.question}</span>
        <ol>
          {flashCard.options.map((option) => {
            return <li key={option}>{option}</li>;
          })}
        </ol>
      </CardFront>
      <CardBack flip={flip} ref={backEl}>
        <h3>Answer:</h3>
        <span>{flashCard.answer}</span>
      </CardBack>
    </CardStyled>
  );
}

export default SingleFlashCard;

const CardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  border-radius: 0.25rem;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0, 0.3);
  background-color: #505050;
  height: ${(props) => props.height}px;
  /* width: 90vw; */
  cursor: pointer;
  transform-style: preserve-3d;
  transform: ${(props) => (props.flip ? "rotateY(180deg)" : "0")};
`;

const CardFront = styled.div`
  text-align: left;
  position: absolute;
  padding: 1rem;
  backface-visibility: hidden;
  transform: rotateY(0deg);
  h3 {
    margin: 0.5rem;
    text-align: center;
  }
  ol {
    text-align: left;
    margin: 0.2rem;
    padding-left: 38%;
  }
`;
const CardBack = styled.div`
  position: absolute;
  padding: 1rem;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;
