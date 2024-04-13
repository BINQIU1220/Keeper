import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab, setRef } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea({ notes, setNotes }) {
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  const [isClicked, setIsClicked] = useState(false);

  function HandleClick() {
    setIsClicked(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setNewNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    setNewNote({ title: "", content: "" });
  }

  return (
    <div>
      <form className="create-note">
        {isClicked ? (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={newNote.title}
            required
          />
        ) : null}

        <textarea
          onClick={HandleClick}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? "3" : "1"}
          value={newNote.content}
          required
        />
        <Zoom in={isClicked}>
          <Fab onClick={handleSubmit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
