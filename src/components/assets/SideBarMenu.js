import React from "react";
import "../../styles/NavBar.css";
import { Icon } from "@iconify/react";

function SideBarMenu() {
	return (
		<div className="side-bar-meny">
			<div className="hover-effect">
				<Icon className="icon-side-bar" icon="fluent-mdl2:copy" color="white" />
			</div>
		</div>
	);
}

export default SideBarMenu;
