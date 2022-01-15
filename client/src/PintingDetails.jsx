import { useParams } from "react-router-dom";

function PaintingDetails({ clickedObject, onAddToFavourites, favPaintings }) {
  let { id } = useParams();

  const finishingYear =
    clickedObject[0].objectBeginDate !== clickedObject[0].objectEndDate
      ? `- ${clickedObject[0].objectEndDate}`
      : "";

  return (
    <div>
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
      <article key={clickedObject[0].id}>
        <img src={clickedObject[0].image} alt="Kein Bild" />
        <h3></h3>
        <h4>{clickedObject[0].artistName}</h4>
        <h4>
          Production Year{"("}s{")"}: {clickedObject[0].objectBeginDate}{" "}
          {finishingYear} | {clickedObject[0].medium} | {id}
        </h4>
        <h4></h4>
      </article>
    </div>
  );
}

export default PaintingDetails;
