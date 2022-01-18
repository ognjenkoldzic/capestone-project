import { useState, useEffect } from "react";
import "./App.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import SingleCollectionPainting from "./SingleCollectionPainting";
import PaintingDetails from "./PintingDetails";
import FavouritesRendered from "./FavouritesRendered";
import LandingPage from "./LandingPage";
import InfoPage from "./InfoPage";
import NavBar from "./NavBar";
import HeaderBar from "./HeaderBar";
import MemoryPlay from "./components/MemoryPlay";
import { saveToLocal, loadFromLocal } from "./lib/localStorage";
import SearchBar from "./components/SearchBar";

function App() {
  const localStorageFavPaintings = loadFromLocal("_favPaintings");

  const [objects, setObjects] = useState([]);
  const [selectedPainting, setSelectedPainting] = useState([]);
  const [favPaintings, setFavPaintings] = useState(
    localStorageFavPaintings || []
  );
  const [selectedFavPainting, setSelectedFavPainting] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("./data.json");
      const json = await data.json();
      const objectsData = json;
      setObjects(objectsData);
    };

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    saveToLocal("_favPaintings", favPaintings);
  }, [favPaintings]);

  function handleClick(object) {
    const singlePainting = objects.filter(
      (selected) => selected.id === object.id
    );
    setSelectedPainting(singlePainting);
  }
  function addToFavourites(detailedObject) {
    if (
      favPaintings.some((favPaint) => favPaint[0].id === detailedObject[0].id)
    ) {
      const favToKeep = favPaintings.filter(
        (favPaint) => favPaint[0].id !== detailedObject[0].id
      );
      setFavPaintings(favToKeep);
    } else {
      setFavPaintings([...favPaintings, detailedObject]);
    }
  }
  function handleFavClick(clickedFav) {
    const favPaintingToShow = favPaintings.filter(
      (selected) => selected.id === clickedFav.id
    );
    setSelectedFavPainting(favPaintingToShow);
  }

  return (
    <div className="App">
      <Header>
        <HeaderBar />
      </Header>
      <Maincontainer>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route
            path="/collection"
            element={[
              <SearchBar collection={objects} onHandleClick={handleClick} />,
              objects.map((singleObject) => (
                <SingleCollectionPainting
                  singleObject={singleObject}
                  onHandleClick={handleClick}
                />
              )),
            ]}
          />
          <Route
            path="/collection/:id"
            element={
              <PaintingDetails
                clickedObject={selectedPainting}
                onAddToFavourites={addToFavourites}
                favPaintings={favPaintings}
              />
            }
          />
          <Route
            path="/favourites"
            element={
              <FavouritesRendered
                favPaintings={favPaintings}
                onHandleFavClick={handleFavClick}
              />
            }
          />
          <Route
            path="/favourites/:id"
            element={
              <PaintingDetails
                clickedObject={selectedFavPainting}
                onAddToFavourites={addToFavourites}
              />
            }
          />
          <Route path="/play" element={<MemoryPlay />} />
        </Routes>
      </Maincontainer>
      <footer>
        <NavBar />
      </footer>
    </div>
  );
}

export default App;

const Maincontainer = styled.section`
  margin-top: 3rem;
  margin-bottom: 5rem;
`;
const Header = styled.header`
  background-color: #8f8e8e;
`;
