import styled from "styled-components";
import SingleFlashCard from "./SingleFlashCard";
import "./TempFlashCard.css";

function FlashCardsList({ flashCards }) {
  return (
    <TempGrid className="card-grid">
      {flashCards.map((flashCard) => {
        return <SingleFlashCard flashCard={flashCard} key={flashCard.id} />;
      })}
    </TempGrid>
  );
}

export default FlashCardsList;

const TempGrid = styled.div`
  display: grid;
  align-items: center;
  margin: 1rem;

  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;
