import { useState, useEffect } from "react";
import "./App.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import PaintingDetails from "./PintingDetails";
import LandingPage from "./LandingPage";
import InfoPage from "./InfoPage";
import NavBar from "./NavBar";
import HeaderBar from "./HeaderBar";
import MemoryPlay from "./components/MemoryPlay";
import { saveToLocal, loadFromLocal } from "./lib/localStorage";
import SearchBarCollection from "./components/SearchBar";
import SingleFavPainting from "./SingleFavPainting";
import SingleCollectionPainting from "./SingleCollectionPainting";
import FlashCardsMain from "./components/FalshCards/FlashCardsMain";

function App() {
  const localStorageFavPaintings = loadFromLocal("_favPaintings");

  const [objects, setObjects] = useState([]);
  const [selectedPainting, setSelectedPainting] = useState([]);
  const [favPaintings, setFavPaintings] = useState(
    localStorageFavPaintings || []
  );
  const [selectedFavPainting, setSelectedFavPainting] = useState([]);
  console.log(favPaintings);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/data.json");
      const json = await data.json();
      const objectsData = json;
      setObjects(objectsData);
    };
    //"./data.json"

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    saveToLocal("_favPaintings", favPaintings);
  }, [favPaintings]);

  // console.log(objects.map((object) => object.artistName));

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
  function updateFavPaint(favPaint, incomingNotes) {
    const updatedFavPaint = [{ ...favPaint[0], notes: incomingNotes }];
    const indexOfFavPaintToUpdate = favPaintings.findIndex(
      (painting) => painting[0].id === favPaint[0].id
    );
    const firstPartFavPaintings = favPaintings.slice(
      0,
      indexOfFavPaintToUpdate
    );
    const secondPartFavPaintings = favPaintings.slice(
      indexOfFavPaintToUpdate + 1
    );
    const updatedFavPaintings = [
      ...firstPartFavPaintings,
      updatedFavPaint,
      ...secondPartFavPaintings,
    ];
    setFavPaintings(updatedFavPaintings);
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
            path="/search"
            element={
              <SearchBarCollection
                objects={objects}
                onHandleClick={handleClick}
                placeholder="Search by Artist, Title, Year..."
              />
            }
          />
          <Route
            path="/search/:id"
            element={
              <PaintingDetails
                clickedObject={selectedPainting}
                onAddToFavourites={addToFavourites}
                favPaintings={favPaintings}
              />
            }
          />
          <Route
            path="/collection"
            element={objects
              .sort((a, b) => 0.5 - Math.random())
              .map((singleObject) => (
                <SingleCollectionPainting
                  singleObject={singleObject}
                  onHandleClick={handleClick}
                />
              ))}
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
            element={favPaintings.map((favPaint) => (
              <SingleFavPainting
                favPaint={favPaint}
                onAddToFavourites={addToFavourites}
                onHandleFavClick={handleFavClick}
                favPaintings={favPaintings}
                onUpdateFavPaint={updateFavPaint}
              />
            ))}
          />
          <Route
            path="/favourites/:id"
            element={
              <PaintingDetails
                clickedObject={selectedFavPainting}
                onAddToFavourites={addToFavourites}
                favPaintings={favPaintings}
              />
            }
          />
          <Route path="/play" element={<MemoryPlay />} />

          <Route path="/learn" element={<FlashCardsMain />} />
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
  margin-top: 4rem;
  margin-bottom: 5rem;
`;
const Header = styled.header`
  background-color: #8f8e8e;
`;
