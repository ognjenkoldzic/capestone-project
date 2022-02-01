import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { saveToLocal, loadFromLocal } from "../../lib/localStorage";
import NoteForm from "./NoteForm";
import Note from "./Note";

function NotesList({ favPaint, onUpdateFavPaint }) {
  const [notes, setNotes] = useState(favPaint.notes);

  function addNote(note) {
    if (!note.text || /^\s*$/.test(note.text)) {
      return;
    }

    const newNotes = [...notes, note]; //welche Reihenfolge?
    setNotes(newNotes);
    onUpdateFavPaint(favPaint, newNotes);
  }

  function updateNote(noteId, newValue) {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setNotes((prev) =>
      prev.map((item) => (item.id === noteId ? newValue : item))
    );
    onUpdateFavPaint(favPaint, notes);
  }

  function removeNote(id) {
    const removeArr = [...notes].filter((note) => note.id !== id); //favPaint[0].notes , removeArr, onUpdateFavPaint

    setNotes(removeArr);
    onUpdateFavPaint(favPaint, removeArr);
  }

  return (
    <div>
      <NoteForm onSubmit={addNote} />
      <Note
        notes={favPaint.notes}
        onRemoveNote={removeNote}
        onUpdateNote={updateNote}
      />
    </div>
  );
}
export default NotesList;
