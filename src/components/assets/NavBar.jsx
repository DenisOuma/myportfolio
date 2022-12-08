import React from "react";
import { Icon } from "@iconify/react";
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
							<div className="nav-option">About</div>
							<div className="nav-option">Experience</div>
							<div className="nav-option">Skills</div>
							<div className="nav-option">Projects</div>
							<div className="nav-option">Contact</div>
							<div className="nav-option">Hobbies</div>
							<div className="nav-option">Resume</div>
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
