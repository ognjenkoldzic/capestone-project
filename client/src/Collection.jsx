import { Link } from "react-router-dom";

function Collection({ collection, onHandleClick }) {
  return (
    <div>
      {collection.map((object) => (
        <article key={object.id}>
          <Link to={object.id}>
            <img
              src={object.image}
              alt="Kein Bild"
              height="300 px"
              onClick={() => onHandleClick(object)}
            />
          </Link>
        </article>
      ))}
    </div>
  );
}

export default Collection;
