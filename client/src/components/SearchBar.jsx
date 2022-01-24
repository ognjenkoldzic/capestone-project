import styled from "styled-components";
import SingleCollectionPainting from "../SingleCollectionPainting";
import { useState, useEffect } from "react";
import Dropdown from "./Dropdown/Dropdown";

function SearchBarCollection({ objects, onHandleClick, placeholder }) {
  const [searchWord, setSearchWord] = useState("");
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(null);
  }, []); //????

  return (
    <div className="search">
      <div style={{ width: 300 }}>
        <Dropdown
          options={objects}
          prompt="Select or type Title..."
          value={value}
          id="id"
          label="title"
          onChange={(val) => setValue(val)}
          onHandleClick={onHandleClick}
        />
      </div>
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
      {/* searchWord && */}
      {searchWord && (
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
    </div>
  );
}

export default SearchBarCollection;

const SearchInput = styled.div`
  display: flex;
  justify-content: center;
  input {
    background-color: var(--primary);
    border-radius: 0.5rem;
  }
  svg {
  }
`;
