import { useState } from "react";
import "./App.css";
import { Sidebar } from "./components";
import { v4 as uuidv4 } from "uuid";

function App() {
	const [notes, setNotes] = useState([]);
	const [currentNoteId, setCurrentNoteId] = useState("");
	const [note, setNote] = useState("");

	function addNewNote() {
		const newNote = {
			id: uuidv4(),
			body: "let's get started",
		};
		setNotes((prevNotes) => [newNote, ...prevNotes]);
		setCurrentNoteId(newNote.id);
	}

	const getCurrentNote = () => {
		return (
			notes.find((note) => note.id === currentNoteId) ||
			notes[0]
		);
	};

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
						getCurrentNote={getCurrentNote()}
						setCurrentNoteId={setCurrentNoteId}
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
