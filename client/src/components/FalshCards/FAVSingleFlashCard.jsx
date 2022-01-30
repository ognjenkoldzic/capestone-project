import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import "./TempFlashCard.css";

function FAVSingleFlashCard({ favPainting }) {
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
    favPainting.image, //
  ]);
  useEffect(() => {
    window.addEventListener("resize", setMaxHeight);
    return () => window.removeEventListener("resize", setMaxHeight);
  }, []);

  return (
    <CardStyled height={height} flip={flip} onClick={() => setFlip(!flip)}>
      <CardFront flip={flip} ref={frontEl}>
        <p>Who paintend this Painting? Can you remember your notes?</p>
        <img src={favPainting.image} alt="No Image" />
      </CardFront>
      <CardBack flip={flip} ref={backEl}>
        {favPainting.artistName}
        <div>
          {favPainting.notes &&
            favPainting.notes.map((note) => {
              return <div key={note.id}>{note.text}</div>;
            })}
        </div>
      </CardBack>
    </CardStyled>
  );
}

export default FAVSingleFlashCard;

const CardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  position: absolute;
  padding: 1rem;
  backface-visibility: hidden;
  transform: rotateY(0deg);
  div {
  }
`;
const CardBack = styled.div`
  position: absolute;
  padding: 1rem;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;
