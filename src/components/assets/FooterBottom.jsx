import React from "react";
import "../../styles/NavBar.css";
import { Icon } from "@iconify/react";

function FooterBottom() {
	return (
		<div className="bottom-navbar">
			<div className="left-info">
				<div className="info">
					<Icon
						style={{ height: "20px", width: "20px" }}
						icon="ph:git-branch-light"
						color="white"
					/>
				</div>
				<div className="info">Made in</div>
				<div className="info">React</div>
				<div className="info">Material-Ui</div>
				<div className="info">Tailwind</div>
			</div>
			<div className="right-info"></div>
		</div>
	);
}

export default FooterBottom;
