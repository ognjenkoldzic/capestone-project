import { useState, useEffect } from "react";
import "./App.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Collection from "./Collection";
import PaintingDetails from "./PintingDetails";
import FavouritesRendered from "./FavouritesRendered";
import LandingPage from "./LandingPage";
import InfoPage from "./InfoPage";
import NavBar from "./NavBar";
import HeaderBar from "./HeaderBar";

function App() {
  const [objects, setObjects] = useState([]);
  const [selectedPainting, setSelectedPainting] = useState([]);
  const [favPaintings, setFavPainitngs] = useState([]);
  const [selectedFavPainting, setSelectedFavPainting] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("./data.json");
      const json = await data.json();
      const objectsData = json;
      //console.log(objectsData);
      setObjects(objectsData);
    };

    fetchData().catch(console.error);
  }, []);

  function handleClick(object) {
    const singlePaining = objects.filter(
      (selected) => selected.id === object.id
    );
    setSelectedPainting(singlePaining);
  }
  function addToFavourites(detailedObject) {
    if (
      favPaintings.some((favPaint) => favPaint[0].id === detailedObject[0].id)
    ) {
      const favToKeep = favPaintings.filter(
        (favPaint) => favPaint[0].id !== detailedObject[0].id
      );
      setFavPainitngs(favToKeep);
    } else {
      setFavPainitngs([...favPaintings, detailedObject]);
    }
  }
  function handleFavClick(clickedFav) {
    const favPaintingToShow = favPaintings.filter(
      (selected) => selected.id === clickedFav.id
    );
    setSelectedFavPainting(favPaintingToShow);
  }
  //
  console.log(selectedPainting);
  // console.log(favPaintings)
  // console.log(selectedFavPainting)
  //{favPaintings.length > 0 &&
  //{selectedPainting.length > 0 &&
  return (
    <div className="App">
      <header>
        <HeaderBar />
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="info" element={<InfoPage />} />
        <Route
          path="collection"
          element={
            <Collection collection={objects} onHandleClick={handleClick} />
          }
        />
        <Route
          path="collection/:id"
          element={
            <PaintingDetails
              clickedObject={selectedPainting}
              onAddToFavourites={addToFavourites}
              favPaintings={favPaintings}
            />
          }
        />
        <Route
          path="favourites"
          element={
            <FavouritesRendered
              favPaintings={favPaintings}
              onHandleFavClick={handleFavClick}
            />
          }
        />
        <Route
          path="favourites/:id"
          element={
            <PaintingDetails
              clickedObject={selectedFavPainting}
              onAddToFavourites={addToFavourites}
            />
          }
        />
      </Routes>

      <footer>
        <NavBar />
      </footer>
    </div>
  );
}

export default App;
