import { useContext } from "react";
import Controls from "./components/Controls";
import NoteCard from "./components/NoteCard";
import { NoteContext } from "./context/NoteContext";
const NotesPage = () => {
  const { notes, setNotes } = useContext(NoteContext);
  return (
    <div>
      {notes.map((note) => (
        <NoteCard note={note} key={note.$id} setNotes={setNotes} />
      ))}
      <Controls />
    </div>
  );
};

export default NotesPage;
