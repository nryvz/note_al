import { useContext } from "react";
import { db } from "../appwrite/databases";
import { NoteContext } from "../context/NoteContext";
const Color = ({ color }) => {
  const { selectedNote, notes, setNotes } = useContext(NoteContext);
  const changeColor = () => {
    console.log("Selected color:", selectedNote);
    try {
      const currentNoteIndex = notes.findIndex(
        (note) => note.$id === selectedNote.$id
      );

      const updatedNote = {
        ...notes[currentNoteIndex],
        colors: JSON.stringify(color),
      };

      const newNotes = [...notes];
      newNotes[currentNoteIndex] = updatedNote;
      setNotes(newNotes);

      db.notes.update(selectedNote.$id, {
        colors: JSON.stringify(color),
      });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("You must select a note before changing colors");
    }
  };

  return (
    <div
      onClick={changeColor}
      className="color"
      style={{ backgroundColor: color.colorHeader }}
    ></div>
  );
};

export default Color;
