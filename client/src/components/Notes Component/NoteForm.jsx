import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NoteForm({ onSubmit, edit }) {
  const [input, setInput] = useState("");

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
      <label htmlFor="note"></label>
      <input
        className="NoteInput"
        type="text"
        id="note"
        name="note"
        placeholder="Your notes here..."
        value={input}
        onChange={handleChange}
      />
      <button className="AddNotesBtn">Add Notes</button>
    </form>
  );
}

export default NoteForm;
