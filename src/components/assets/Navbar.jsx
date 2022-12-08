import React from "react";
import { Icon } from "@iconify/react";
function Navbar() {
	return (
		<div className="nav-bar-section">
			<div className="nav-logo">
				<Icon icon="vscode-icons:file-type-vscode" />
			</div>
			<div className="nav-options">
				<div className="nav-option">About</div>
				<div className="nav-option">Experience</div>
				<div className="nav-option">Skills</div>
				<div className="nav-option">Projects</div>
				<div className="nav-option">Contact</div>
				<div className="nav-option">Hobbies</div>
				<div className="nav-option">Resume</div>
			</div>
			<div className="nav-bar-close-options">
				<div className="close-option"></div>
				<div className="close-option"></div>
				<div className="close-option"></div>
			</div>
		</div>
	);
}

export default Navbar;
