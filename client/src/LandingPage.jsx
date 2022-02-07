import styled from "styled-components";
import logo from "./IconsImage/METLogo.png";

function LandingPage() {
  return (
    <section>
      <img src={logo} alt="Logo" height="300 px" />
      <Title>The Metropolitan Museum of Art</Title>
      <h1>
        Prepare your visit at the largest art museum in the Western Hemisphere{" "}
      </h1>
    </section>
  );
}

export default LandingPage;
const Title = styled.h2`
  color: var(--secondary);
`;
