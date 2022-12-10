import React from "react";
import "../../styles/NavBar.css";
import { Icon } from "@iconify/react";

function SideBarMenu() {
	const [isShown, setIsShown] = React.useState(false);

	const handleClick = (e) => {
		setIsShown((current) => !current);
	};
	return (
		<div className="tagle-open">
			<div className="side-bar-meny">
				<div className="hover-effect">
					<Icon
						onClick={handleClick}
						className="icon-side-bar"
						icon="fluent-mdl2:copy"
						color="white"
					/>
				</div>
				<div className="position-bottom hover-effect">
					<Icon
						className="icon-side-bar"
						icon="iconoir:profile-circled"
						color="gray"
					/>
				</div>
			</div>
			{isShown && (
				<div className="navigation-menue">
					<h2>EXPLORER</h2>
				</div>
			)}
		</div>
	);
}

export default SideBarMenu;
