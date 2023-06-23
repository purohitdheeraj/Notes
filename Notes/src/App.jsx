import "./App.css";
import { Sidebar, Editor } from "./components";

function App() {
  
	return (
		<>
			<header>
				<h2>Notes</h2>
			</header>
			<main className="main-wrapper">
				<Sidebar />
				<Editor />
			</main>
		</>
	);
}

export default App;
