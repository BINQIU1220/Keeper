import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import CreateArea from "./components/CreateArea";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="App">
      <Header />
      <CreateArea notes={notes} setNotes={setNotes} />
      <Notes notes={notes} setNotes={setNotes} />
      <Footer />
    </div>
  );
}

export default App;
