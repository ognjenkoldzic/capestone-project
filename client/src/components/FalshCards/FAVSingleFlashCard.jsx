import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import "./TempFlashCard.css";

function FAVSingleFlashCard({ favPainting }) {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState("inital");

  const frontEl = useRef();
  const backEl = useRef();

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height;
    const backHeight = backEl.current.getBoundingClientRect().height;
    setHeight(Math.max(frontHeight, backHeight, 100));
  }
  //favPainting.image;
  useEffect(setMaxHeight, [favPainting.image]);
  useEffect(() => {
    window.addEventListener("resize", setMaxHeight);
    return () => window.removeEventListener("resize", setMaxHeight);
  }, []);

  //
  //
  //
  return (
    <CardStyled height={height} flip={flip} onClick={() => setFlip(!flip)}>
      <CardFront ref={frontEl} flip={flip}>
        <p>Who paintend this Painting? Can you remember your notes?</p>
        <img height={height} src={favPainting.image} alt="No Image" />
      </CardFront>
      <CardBack ref={backEl} flip={flip}>
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
//console.log(height);
export default FAVSingleFlashCard;

const CardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 0.25rem;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0, 0.3);
  background-color: #505050;
  height: ${(props) => (props.height ? props.height : 500)}px;
  width: 70vw;
  cursor: pointer;
  transform-style: preserve-3d;
  transform: ${(props) => (props.flip ? "rotateY(180deg)" : "0")};
`;
//${(props) => props.height}px;
//height: 110vw;

const CardFront = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 1rem;
  backface-visibility: hidden;
  transform: rotateY(0deg);
  div {
  }
  img {
    height: 50vw;
    position: relative;
  }
`;
const CardBack = styled.div`
  position: absolute;
  padding: 1rem;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;
const StyledIMG = styled.img``;
// /* ${(props) => props.height}px;    */
