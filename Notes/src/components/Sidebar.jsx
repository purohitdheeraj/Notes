/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Sidebar(props) {
	const {
		notes,
		addNewNote,
		getCurrentNote,
		setCurrentNoteId,
	} = props;

	const notesEl = notes.map((note, index) => {
		return (
			<h2
				className={
					getCurrentNote.id === note.id
						? "current-note"
						: ""
				}
				key={note.id}
				onClick={() => setCurrentNoteId(note.id)}
			>
				Note {index + 1}
			</h2>
		);
	});

	return (
		<aside className="sidebar">
			<button onClick={addNewNote}>New Note</button>
			{notesEl}
		</aside>
	);
}

export default Sidebar;
