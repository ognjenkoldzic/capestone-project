import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function NoteForm({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.value : "");
  const inputRef = useRef(null); //focus in input field

  useEffect(() => {
    inputRef.current.focus();
  });

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
          <button className="AddNotesBtn">Add Notes</button>
        </>
      )}
    </form>
  );
}

export default NoteForm;
