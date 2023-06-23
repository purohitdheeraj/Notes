/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Sidebar(props) {
	const {
		notes,
		addNewNote,
		currentNoteId,
		selectCurrentNote,
	} = props;

	const notesEl = notes.map((note) => {
		const isCurrent = currentNoteId === note.id;

		return (
			<h2
				className={isCurrent ? "current-note" : ""}
				key={note.id}
				onClick={() => selectCurrentNote(note.id)}
			>
				{note.title}
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
