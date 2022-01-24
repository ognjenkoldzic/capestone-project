import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function NoteForm({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.value : "");
  const inputRef = useRef(null); //focus in input field

  //   useEffect(() => {
  //     inputRef.current.focus();
  //   });

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({
      id: uuidv4(),
      text: input,
    });
    setInput(""); //Eingabe nach Submit leeren
  }

  return (
    <form className="NoteForm" onSubmit={handleSubmit}>
      {edit ? (
        <>
          <label htmlFor="note"></label>
          <input
            className="NoteInputEdit"
            type="text"
            id="note"
            name="note"
            placeholder="Update Your Notes..."
            value={input}
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="EditNotesBtn">Update Notes</button>
        </>
      ) : (
        <>
          <label htmlFor="note"></label>
          <input
            className="NoteInput"
            type="text"
            id="note"
            name="note"
            placeholder="Your notes here..."
            value={input}
            onChange={handleChange}
            ref={inputRef}
          />
          <NewTodoFormButton className="AddNotesBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="30px"
              viewBox="0 0 24 24"
              width="30px"
              fill="#ffffff"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <g>
                  <path d="M9,4v1.38c-0.83-0.33-1.72-0.5-2.61-0.5c-1.79,0-3.58,0.68-4.95,2.05l3.33,3.33h1.11v1.11c0.86,0.86,1.98,1.31,3.11,1.36 V15H6v3c0,1.1,0.9,2,2,2h10c1.66,0,3-1.34,3-3V4H9z M7.89,10.41V8.26H5.61L4.57,7.22C5.14,7,5.76,6.88,6.39,6.88 c1.34,0,2.59,0.52,3.54,1.46l1.41,1.41l-0.2,0.2c-0.51,0.51-1.19,0.8-1.92,0.8C8.75,10.75,8.29,10.63,7.89,10.41z M19,17 c0,0.55-0.45,1-1,1s-1-0.45-1-1v-2h-6v-2.59c0.57-0.23,1.1-0.57,1.56-1.03l0.2-0.2L15.59,14H17v-1.41l-6-5.97V6h8V17z" />
                </g>
              </g>
            </svg>
          </NewTodoFormButton>
        </>
      )}
    </form>
  );
}

export default NoteForm;

const NewTodoFormButton = styled.button`
  padding: 0.3rem 0.3rem;
  border: none;
  background: #505050;
  color: var(--secondary);
  font-weight: bold;
  border-radius: 30%;
  margin-left: 5px;
  cursor: pointer;

  svg {
    color: var(--secondary);
    font-weight: bold;

    cursor: pointer;
  }
`;
