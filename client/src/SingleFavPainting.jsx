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
      <FavCard key={favPaint.id}>
        <Link to={favPaint.id}>
          <FavImg
            src={favPaint.image}
            alt="Kein Bild"
            onClick={() => onHandleFavClick(favPaint)}
          />
        </Link>
        <div>
          <FavTitle>
            {favPaint.title}{" "}
            {/* <span onClick={() => onAddToFavourites(favPaintings)}>
              {favPaintings.some((fav) => fav.id === favPaint.id) ? (
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
            </span> */}
            <span>
              {"("}
              {favPaint.objectBeginDate}{" "}
              {favPaint.objectBeginDate !== favPaint.objectEndDate
                ? `- ${favPaint.objectEndDate}`
                : ""}
              {")"}{" "}
            </span>
          </FavTitle>{" "}
          <p>by {favPaint.artistName}</p>
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
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  background-color: #505050;
  padding: 1.2rem 0 1.2rem 0;
  border-radius: 10px;
`;

const FavImg = styled.img`
  width: 85vw;
`;
const FavTitle = styled.p`
  font-style: italic;
  margin: 0.2rem;
  font-weight: bolder;
  span {
    font-weight: lighter;
  }
`;
