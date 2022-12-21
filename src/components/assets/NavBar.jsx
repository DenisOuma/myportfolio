import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "../../styles/NavBar.css";
function Navbar() {
	return (
		<div className="prime-container">
			<div className="nav-bar">
				<div className="flex">
					<div className="flex left-sidebar">
						<div className="nav-logo">
							<Icon icon="vscode-icons:file-type-vscode" />
						</div>
						<div className="flex nav-options">
							<div className="nav-option">
								<Link to="/myportfolio/" className="icon-name">
									About
								</Link>
							</div>
							<div className="nav-option">
								<Link to="/myportfolio/experience/" className="icon-name">
									Experience
								</Link>
							</div>
							<div className="nav-option">
								<Link to="/myportfolio/skills" className="icon-name">
									Skills
								</Link>
							</div>
							<div className="nav-option">
								<Link to="/myportfolio/projects/" className="icon-name">
									Projects
								</Link>
							</div>
							<div className="nav-option">
								<Link to="/myportfolio/contact/" className="icon-name">
									Contact
								</Link>
							</div>
							<div className="nav-option">
								<Link to="/myportfolio/skills" className="icon-name">
									Hobbies
								</Link>
							</div>
							<div className="nav-option">
								<Link to="/myportfolio/skills" className="icon-name">
									Resume
								</Link>
							</div>
						</div>
					</div>
					<div className="flex nav-bar-close-options">
						<div
							className="close-option"
							style={{ background: "#F87171" }}
						></div>
						<div
							className="close-option"
							style={{ background: "#FBBF24" }}
						></div>
						<div
							className="close-option"
							style={{ background: "#34D399" }}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
