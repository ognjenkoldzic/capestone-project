import styled from "styled-components";
import { Link } from "react-router-dom";

function SingleCollectionPainting({ singleObject, onHandleClick }) {
  return (
    <div>
      <article key={singleObject.id}>
        <Link to={singleObject.id}>
          <CollectionElements
            src={singleObject.image}
            alt="Kein Bild"
            onClick={() => onHandleClick(singleObject)}
          />
        </Link>
      </article>
    </div>
  );
}

export default SingleCollectionPainting;

const CollectionElements = styled.img`
  width: 85vw;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
`;
