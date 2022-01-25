import styled from "styled-components";
import SingleCollectionPainting from "../SingleCollectionPainting";
import { useState, useEffect } from "react";
import Dropdown from "./Dropdown/Dropdown";

function SearchBarCollection({ objects, onHandleClick, placeholder }) {
  const [searchWord, setSearchWord] = useState("");
  const [value, setValue] = useState(null);
  const [btnClicked, setBtnClicked] = useState(false);

  useEffect(() => {
    setValue(null);
  }, []); //????
  console.log(btnClicked);
  return (
    <SearchWrapper className="search">
      <ToggleBtnPair>
        <BtnTextSearch
          type="button"
          onClick={() => setBtnClicked("btnTextSearch")}
          btnClicked={btnClicked}
          // className={isBtnActive ? "inactive" : "active"}
        >
          Text Search
        </BtnTextSearch>

        <BtnFilterTitle
          type="button"
          onClick={() => setBtnClicked("btnFilterTitle")}
          btnClicked={btnClicked}
          //className={!isBtnActive ? "inactive" : "active"}
        >
          Title
        </BtnFilterTitle>
        <BtnFilterArtist
          type="button"
          onClick={() => setBtnClicked("btnFilterArtist")}
          btnClicked={btnClicked}
          //className={!isBtnActive ? "inactive" : "active"}
        >
          Artist
        </BtnFilterArtist>
      </ToggleBtnPair>
      {btnClicked === "btnFilterTitle" && (
        <DropdownWrapper>
          <Dropdown
            options={objects}
            prompt="Select or type Title..."
            value={value}
            id="id"
            label="title"
            onChange={(val) => setValue(val)}
            onHandleClick={onHandleClick}
          />
        </DropdownWrapper>
      )}
      {btnClicked === "btnFilterArtist" && (
        <DropdownWrapper>
          <Dropdown
            options={objects}
            prompt="Select or type artist..."
            value={value}
            id="id"
            label="artistName"
            onChange={(val) => setValue(val)}
            onHandleClick={onHandleClick}
          />
        </DropdownWrapper>
      )}
      {btnClicked === "btnTextSearch" && (
        <SearchInput className="searchInput">
          <input
            type="search"
            name="search"
            id="search"
            placeholder={placeholder}
            value={searchWord}
            onChange={(event) => setSearchWord(event.target.value)}
          />
          <div className="searchIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#ffffff"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </div>
        </SearchInput>
      )}

      {searchWord && btnClicked === "btnTextSearch" && (
        <div className="dataResults">
          {objects
            .filter(
              (item) =>
                item.artistName
                  .toLowerCase()
                  .includes(searchWord.toLowerCase()) ||
                item.title.toLowerCase().includes(searchWord.toLowerCase()) ||
                item.objectBeginDate
                  .toLowerCase()
                  .startsWith(searchWord.toLowerCase()) ||
                item.objectEndDate
                  .toLowerCase()
                  .startsWith(searchWord.toLowerCase())
            )
            .map((singleObject) => (
              <div key={singleObject.id}>
                <SingleCollectionPainting
                  singleObject={singleObject}
                  onHandleClick={onHandleClick}
                />
              </div>
            ))}
        </div>
      )}
    </SearchWrapper>
  );
}

export default SearchBarCollection;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ToggleBtnPair = styled.div`
  display: flex;
  margin-bottom: 1rem;

  button {
    border: none;
    cursor: pointer;
    height: 2rem;
    font-size: 0.9rem;
    padding: 5px;
    width: 6rem;
  }
`;
const BtnFilterTitle = styled.button`
  border-radius: 0 0px 0px 0;
  color: ${(props) =>
    props.btnClicked === "btnFilterTitle"
      ? "#EC012A"
      : "rgba(51, 51, 51, 0.8)"};
  background-color: ${(props) =>
    props.btnClicked === "btnFilterTitle" ? "#505050" : "#ffffff"};
`;
const BtnTextSearch = styled.button`
  border-radius: 50px 0 0 50px;
  color: ${(props) =>
    props.btnClicked === "btnTextSearch" ? "#EC012A" : "rgba(51, 51, 51, 0.8)"};
  background-color: ${(props) =>
    props.btnClicked === "btnTextSearch" ? "#505050" : "#ffffff"};
`;
const BtnFilterArtist = styled.button`
  border-radius: 0px 50px 50px 0px;
  color: ${(props) =>
    props.btnClicked === "btnFilterArtist"
      ? "#EC012A"
      : "rgba(51, 51, 51, 0.8)"};
  background-color: ${(props) =>
    props.btnClicked === "btnFilterArtist" ? "#505050" : "#ffffff"};
`;
const DropdownWrapper = styled.div`
  width: 80vw;
`;
const SearchInput = styled.div`
  display: flex;
  justify-content: center;

  input {
    background-color: var(--primary);
    border-radius: 0.5rem;
    width: 78vw;
    height: 42px;
  }
  svg {
  }
`;
