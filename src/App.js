import React, { Fragment } from "react";
import "./App.css";
import FooterBottom from "./components/assets/FooterBottom";
import NavBar from "./components/assets/NavBar";
import SideBarMenu from "./components/assets/SideBarMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aboute from "./components/UI/Aboute";
import Experience from "./components/UI/Experience";
import Skills from "./components/UI/Skills";
import Project from "./components/UI/Project";
import Email from "./components/UI/Email";

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
								<Route
									exact
									path="/myportfolio/experience"
									element={<Experience />}
								/>
								<Route exact path="/myportfolio/skills" element={<Skills />} />
								<Route
									exact
									path="/myportfolio/projects"
									element={<Project />}
								/>
								<Route exact path="/myportfolio/contact" element={<Email />} />
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
