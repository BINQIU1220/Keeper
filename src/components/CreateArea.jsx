import { useState } from "react";

function CreateArea({ notes, setNotes }) {
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  function handleChange(e) {
    const { name, value } = e.target;

    setNewNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });

    console.log(newNote);
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
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={newNote.title}
          required
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
          required
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
