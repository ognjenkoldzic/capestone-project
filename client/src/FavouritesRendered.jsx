import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import styled from "styled-components";

function FavouritesRendered({ favPaintings, onHandleFavClick }) {
  return (
    <div>
      {favPaintings.map((favPaint) => (
        <FavCard key={favPaint[0].id}>
          <Link to={favPaint[0].id}>
            <FavImg
              src={favPaint[0].image}
              alt="Kein Bild"
              onClick={() => onHandleFavClick(favPaint)}
            />
          </Link>
          <div>
            <h3>
              {favPaint[0].title} <span>❌</span>
            </h3>
            <h4>{favPaint[0].artistName}</h4>
            <h4>
              Production Year{"("}s{")"}: {favPaint[0].objectBeginDate}{" "}
              {favPaint[0].objectBeginDate !== favPaint[0].objectEndDate
                ? `- ${favPaint[0].objectEndDate}`
                : ""}{" "}
              | {favPaint[0].medium} | MASSe
            </h4>
            <form action="">
              <label htmlFor="notes">
                Notes:
                <input type="text" name="notes" />{" "}
              </label>
              <button>Save Notes</button>
            </form>
          </div>
        </FavCard>
      ))}
    </div>
  );
}

export default FavouritesRendered;

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
