import { Link } from "react-router-dom";
import styled from "styled-components";
import NotesList from "./components/Notes Component/NotesList";

function SingleFavPainting({
  favPaint,
  favPaintings,
  onAddToFavourites,
  onHandleFavClick,
  onUpdateFavPaint,
}) {
  return (
    <div>
      <FavCard key={favPaint[0].id}>
        <Link to={favPaint[0].id}>
          <FavImg
            src={favPaint[0].image}
            alt="Kein Bild"
            onClick={() => onHandleFavClick(favPaint)}
          />
        </Link>
        <div>
          <p>
            {favPaint[0].title}{" "}
            <span onClick={() => onAddToFavourites(favPaintings)}>
              {favPaintings.some(
                (favPaint) => favPaint[0].id === favPaintings[0].id
              ) ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14px"
                  viewBox="0 0 24 24"
                  width="14px"
                  fill="#ffffff"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14px"
                  viewBox="0 0 24 24"
                  width="14px"
                  fill="#ffffff"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
                </svg>
              )}
            </span>
            <span>
              {"("}
              {favPaint[0].objectBeginDate}{" "}
              {favPaint[0].objectBeginDate !== favPaint[0].objectEndDate
                ? `- ${favPaint[0].objectEndDate}`
                : ""}
              {")"}{" "}
            </span>
          </p>{" "}
          <p>by {favPaint[0].artistName}</p>
          <NotesList favPaint={favPaint} onUpdateFavPaint={onUpdateFavPaint} />
        </div>
      </FavCard>
    </div>
  );
}

export default SingleFavPainting;

const FavCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const FavImg = styled.img`
  width: 90vw;
`;
