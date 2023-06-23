import { useState } from "react";
import "./App.css";
import { Sidebar } from "./components";
import { v4 as uuidv4 } from "uuid";

function App() {
	const [notes, setNotes] = useState([]);
	const [currentNoteId, setCurrentNoteId] = useState(notes[0] && notes[0].id || "");
	const [note, setNote] = useState("");

	function addNewNote() {
		setNotes((prevNotes) => {
			return [
				...prevNotes,
				{
					id: uuidv4(),
					title: `Note ${prevNotes.length + 1}`,
					note: "",
				},
			];
		});
	}

  function selectCurrentNote(id){
    setCurrentNoteId(id)
  }

	return (
		<>
			<header>
				<h2>Notes</h2>
			</header>
			{notes.length > 0 ? (
				<main className="main-wrapper">
					<Sidebar
						notes={notes}
						addNewNote={addNewNote}
						currentNoteId={currentNoteId}
            selectCurrentNote={selectCurrentNote}
					/>
					<article className="editor">
						Editor
						<div className="note">
							<input
								type="text"
								value={note}
								onChange={(e) => setNote(e.target.value)}
							/>
						</div>
					</article>
				</main>
			) : (
				<section className="empty-notes">
					<p>No Note was found</p>
					<button onClick={addNewNote}>Add a note</button>
				</section>
			)}
		</>
	);
}

export default App;
