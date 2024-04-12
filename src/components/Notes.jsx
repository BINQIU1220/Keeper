function Notes(props) {
  function handleDelete(id) {
    props.setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index != id;
      });
    });
  }

  return (
    <div>
      {props.notes.map((note, index) => {
        return (
          <div className="note" key={index}>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              DELETE
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Notes;

/* return props.title === "" ? null : (
  <div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
  </div>
); */
