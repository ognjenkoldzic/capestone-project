import styled from "styled-components";
import FAVSingleFlashCard from "./FAVSingleFlashCard";
import "./TempFlashCard.css";

function FAVFlashCardsList({ favPaintings }) {
  return (
    <TempGrid className="card-grid">
      {favPaintings.map((fav) => {
        return <FAVSingleFlashCard key={fav.id} favPainting={fav} />;
      })}
    </TempGrid>
  );
}

export default FAVFlashCardsList;

const TempGrid = styled.div`
  display: grid;
  align-items: center;
  margin: 1rem;

  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;
