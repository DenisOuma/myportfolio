import React, { Fragment } from "react";
import "./App.css";
import FooterBottom from "./components/assets/FooterBottom";
import NavBar from "./components/assets/NavBar";
import SideBarMenu from "./components/assets/SideBarMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aboute from "./components/UI/Aboute";

function App() {
	return (
		<div>
			<Router>
				<>
					<div className="App">
						<NavBar />
						<div className="pages-sidebar" style={{ display: "flex" }}>
							<SideBarMenu />
							<Routes>
								<Route exact path="/myportfolio/" element={<Aboute />} />
							</Routes>
						</div>
						<FooterBottom />
					</div>
				</>
			</Router>
		</div>
	);
}

export default App;
