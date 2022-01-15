import styled from "styled-components";
import memoryBack from "../IconsImage/MemoryCardCover.png";

function SingleMemoryCard({ card, onHandleChoice, flipped, disabled }) {
  const handleMemoryClick = () => {
    if (!disabled) {
      onHandleChoice(card);
    }
  };

  return (
    <Card className="card">
      <div>
        <CardImgFront
          className="front"
          src={card.src}
          alt="card front"
          flipped={flipped}
        />
        <CardImgBack
          className="back"
          src={memoryBack}
          alt="card back"
          onClick={handleMemoryClick}
          flipped={flipped}
        />
      </div>
    </Card>
  );
}
export default SingleMemoryCard;

const Card = styled.div`
  position: relative;
`;
const ImageContainer = styled.div``;

const CardImgFront = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  border: 2px solid #ffffff;
  border-radius: 6px;
  position: absolute;

  transform: ${(props) => (props.flipped ? "rotateY(0deg)" : "rotateY(90deg)")};
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;
`;

const CardImgBack = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  border: 2px solid #ffffff;
  border-radius: 6px;
  transform: ${(props) => (props.flipped ? "rotateY(90deg)" : "")};
  transition: all ease-in 0.2s;
  transition-delay: ${(props) => (props.flipped ? "0.1s" : "0.2s")};
`;
