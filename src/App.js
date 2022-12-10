import "./App.css";
import FooterBottom from "./components/assets/FooterBottom";
import NavBar from "./components/assets/NavBar";
import SideBarMenu from "./components/assets/SideBarMenu";

function App() {
	return (
		<div className="App">
			<NavBar />
			<div className="pages-sidebar">
				<SideBarMenu />
			</div>
			<FooterBottom />
		</div>
	);
}

export default App;
