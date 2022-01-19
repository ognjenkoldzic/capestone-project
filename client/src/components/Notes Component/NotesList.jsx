import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import NoteForm from "./NoteForm";
import Note from "./Note";

function NotesList() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    if (!note.text || /^\s*$/.test(note.text)) {
      return;
    }

    const newNotes = [note, ...notes]; //welche Reihenfolge?
    setNotes(newNotes);
    //console.log(note,...notes);
  }
  function updateNote(noteId, newValue) {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setNotes((prev) =>
      prev.map((item) => (item.id === noteId ? newValue : item))
    );
  }

  function removeNote(id) {
    const removeArr = [...notes].filter((note) => note.id !== id);

    setNotes(removeArr);
  }

  //   function createNotes(newNote) {
  //     setNotes([...notes, newNote]);
  //   }

  return (
    <div>
      <NoteForm onSubmit={addNote} />
      <Note notes={notes} onRemoveNote={removeNote} onUpdateNote={updateNote} />
    </div>
  );
}
export default NotesList;
