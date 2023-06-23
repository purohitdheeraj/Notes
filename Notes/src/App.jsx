import "./App.css";
import { Sidebar, Editor } from "./components";

function App() {
	return (
		<>
			<main className="main-wrapper">
				<Sidebar />
				<Editor />
			</main>
		</>
	);
}

export default App;
