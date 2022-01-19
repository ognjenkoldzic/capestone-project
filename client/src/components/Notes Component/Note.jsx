import { useState } from "react";
import NoteForm from "./NoteForm";

function Note({ notes, onRemoveNote, onUpdateNote }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  function submitUpdate(value) {
    onUpdateNote(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  }
  if (edit.id) {
    return <NoteForm edit={edit} onSubmit={submitUpdate} />;
  }

  const notesToRender = notes.map((note, index) => (
    <div>
      <div key={note.id}>{note.text}</div>
      <div className="icons">
        <span className="DeleteIcon" onClick={() => onRemoveNote(note.id)}>
          ❌
        </span>
        <span
          className="EditIcon"
          onClick={() => setEdit({ id: note.id, value: note.text })}
        >
          ❓
        </span>
      </div>
    </div>
  ));
  return <div>{notesToRender}</div>;
}

export default Note;
