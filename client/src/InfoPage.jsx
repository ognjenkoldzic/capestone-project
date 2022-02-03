import styled from "styled-components";
import profileImg from "./IconsImage/profileImg.jpg";

function InfoPage() {
  return (
    <article>
      <Headline>
        The Highlights of European Paintings at The Metropolitan Museum of Art
      </Headline>
      <MetImage src={profileImg} alt="profileImg" height="300 px" />

      <InfoText>
        The Met's celebrated European Paintings collection encompasses more than
        2,500 works of art from the thirteenth through the early twentieth
        century. You can browse the highlights of the European Paintings by
        clicking on the collection icon. By clicking on the paintings themselves
        you can check out all the details of the artwork and add it to your
        favorites. Furthermore you can play some memory with some of the
        paintings and you can learn your favorites by heart by transforming them
        into flashcards. In the same section (" Learn" ) you can generate an art
        quiz with different questions and answers about art topics. By clicking
        on the search symbol you can look for a specific painting filtered by
        artist or title. Have fun!
      </InfoText>
    </article>
  );
}

export default InfoPage;

const MetImage = styled.img`
  border-radius: 50%;
  border: 2px solid var(--secondary);
`;
const Headline = styled.h1`
  color: var(--primary);
`;
const InfoText = styled.p`
  text-align: left;
  margin-left: 10px;
`;
