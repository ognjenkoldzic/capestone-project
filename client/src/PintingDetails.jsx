import { useParams } from "react-router-dom";
import styled from "styled-components";

function PaintingDetails({ clickedObject, onAddToFavourites, favPaintings }) {
  let { id } = useParams();

  const finishingYear =
    clickedObject[0].objectBeginDate !== clickedObject[0].objectEndDate
      ? `- ${clickedObject[0].objectEndDate}`
      : "";

  return (
    <Container className="container">
      <Card className="card" key={clickedObject[0].id}>
        <h1>
          {clickedObject[0].title}{" "}
          <span onClick={() => onAddToFavourites(clickedObject)}>
            {favPaintings.some(
              (favPaint) => favPaint[0].id === clickedObject[0].id
            ) ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36px"
                viewBox="0 0 24 24"
                width="36px"
                fill="#ffffff"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36px"
                viewBox="0 0 24 24"
                width="36px"
                fill="#ffffff"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
              </svg>
            )}
          </span>
        </h1>
        <DetailedImg src={clickedObject[0].image} alt="Kein Bild" />
        <DetailedData>
          {clickedObject[0].objectBeginDate} {finishingYear} |{" "}
          {clickedObject[0].medium} | {id}
        </DetailedData>
        <CardBody className="card-body">
          {/* <Tag className="tag">TagToDefine</Tag> */}

          <User className="user">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Van_Gogh_Self-Portrait_with_Straw_Hat_1887-Metropolitan.jpg"
              alt="No Pic"
            />
            <div className="user-info">
              <span>{clickedObject[0].artistName}</span>
            </div>
          </User>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            expedita a perferendis corporis minus porro saepe, ad in. Officia
            eligendi illum inventore nobis autem labore molestias facilis odit
            commodi sint.
          </p>
        </CardBody>
      </Card>
    </Container>
  );
}

export default PaintingDetails;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const Card = styled.section`
  margin: 10px;
  background-color: #505050;
  border-radius: 10px;
  box-shadow: 0 2px 20px var(--primary);
  overflow: hidden;
  width: 90vw;

  svg {
    margin-bottom: -0.8rem;
  }
`;

const DetailedImg = styled.img`
  width: 85vw;
  object-fit: cover;
`;
const DetailedData = styled.p`
  margin: 0;
  font-size: 0.8rem;
  text-align: left;
  padding: 0 0 0 1rem;
`;

const CardBody = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 1rem 1rem 1rem;
  min-height: 250px;
  h4 {
    margin: 0.5rem;
    font-size: 1rem;
  }
  p {
    font-size: 13px;
    margin-top: 0;
  }
`;
const Tag = styled.span`
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
`;
const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  text-transform: uppercase;
  margin: 0.5rem 0 1.5rem;
  border-bottom: solid 1px 100%;
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;