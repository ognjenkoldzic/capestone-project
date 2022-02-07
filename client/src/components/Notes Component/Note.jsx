import { useState } from "react";
import NoteForm from "./NoteForm";
import styled from "styled-components";

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

  const notesToRender =
    notes &&
    notes.map((note, index) => (
      <div>
        <TextIconContainer key={note.id}>
          <span>{note.text}</span>

          {/* <EditIcon
            className="EditIcon"
            onClick={() => setEdit({ id: note.id, value: note.text })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 0 24 24"
              width="28px"
              fill="#ffffff"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
            </svg>
          </EditIcon> */}
          <DeleteIcon
            className="DeleteIcon"
            onClick={() => onRemoveNote(note.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 0 24 24"
              width="28px"
              fill="#EC012A"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z" />
            </svg>
          </DeleteIcon>
        </TextIconContainer>
        <div className="icons"></div>
      </div>
    ));
  return <div>{notesToRender}</div>;
}

export default Note;

const TextIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`;

const DeleteIcon = styled.span`
  svg {
    padding: 0.2rem 0.2rem;
    border: none;
    background: #8f8e8e;
    color: var(--secondary);
    font-weight: bold;
    border-radius: 30%;
    margin-left: 5px;
    cursor: pointer;
  }
`;
const EditIcon = styled.span`
  svg {
    padding: 0.2rem 0.2rem;
    border: none;
    background: #8f8e8e;
    color: var(--secondary);
    font-weight: bold;
    border-radius: 30%;
    margin-left: 5px;
    cursor: pointer;
  }
`;
