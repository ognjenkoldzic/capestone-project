import styled from "styled-components";
import profileImg from "./IconsImage/profileImg.jpg";

function InfoPage() {
  return (
    <article>
      <MetImage src={profileImg} alt="profileImg" height="300 px" />
      <Headline>
        The Highlights of European Paintings at The Metropolitan Museum of Art
      </Headline>
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
