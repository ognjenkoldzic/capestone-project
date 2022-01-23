import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { saveToLocal, loadFromLocal } from "../../lib/localStorage";
import NoteForm from "./NoteForm";
import Note from "./Note";

function NotesList({ favPaint, onUpdateFavPaint }) {
  //   const localStorageFavNotes = loadFromLocal("_favNotes");

  const [notes, setNotes] = useState([]);
  //localStorageFavNotes ||
  //   const saveNotesToLocal = (key, itemsToSet) =>
  //     localStorage.setItem(key, JSON.stringify(itemsToSet));

  //   useEffect(() => {
  //     saveNotesToLocal("_favNotes", notes);
  //   }, [notes]);

  // useEffect(()=>{

  //     function addNotesToFavCard(note){
  //         if(favPaint[0].notes.some((favNote)=> favNote.id === note.id))
  //         {
  //             const notesToKeep = favPaint[0].notes.filter((favNote)=> favNote.id !== note.id )
  //         }
  //     }

  // },[notes])

  //   useEffect(() => {
  //     favPaint[0].notes.push(notes);
  //   }, [notes]);

  useEffect(() => {
    favPaint[0].notes = notes;
  }, [notes]);

  function addNote(note) {
    if (!note.text || /^\s*$/.test(note.text)) {
      return;
    }

    const newNotes = [note, ...notes]; //welche Reihenfolge?
    onUpdateFavPaint(favPaint, newNotes);
    //setNotes(newNotes);
  }
  //   console.log(favPaint[0].notes);
  //   console.log(notes, "hey");
  function updateNote(noteId, newValue) {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setNotes((prev) =>
      prev.map((item) => (item.id === noteId ? newValue : item))
    );
  }

  function removeNote(id) {
    const removeArr = [...notes].filter((note) => note.id !== id); //favPaint[0].notes , removeArr, onUpdateFavPaint

    setNotes(removeArr);
  }

  //   function createNotes(newNote) {
  //     setNotes([...notes, newNote]);
  //   }

  return (
    <div>
      <Note
        notes={favPaint[0].notes}
        onRemoveNote={removeNote}
        onUpdateNote={updateNote}
      />
      <NoteForm onSubmit={addNote} />
    </div>
  );
}
export default NotesList;
