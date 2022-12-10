import React from "react";
import "../../styles/NavBar.css";
import { Icon } from "@iconify/react";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
function SideBarMenu() {
	const [isShown, setIsShown] = React.useState(false);
	const [dropDown, setDropDown] = React.useState(false);

	const handleClick = (e) => {
		setIsShown((current) => !current);
	};

	const handleOpen = (e) => {
		setDropDown((current) => !current);
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
					<div className="drop-open-menu">
						<KeyboardArrowRightRoundedIcon />
						<h3 onClick={handleOpen}>About</h3>
					</div>
					{dropDown && (
						<>
							<div className="options-menu">
								<Icon icon="vscode-icons:file-type-html" color="gray" />
								<p>index.html</p>
							</div>
							<div className="options-menu">
								<Icon icon="vscode-icons:file-type-css" color="gray" />
								<p>experience.css</p>
							</div>
							<div className="options-menu">
								<Icon icon="vscode-icons:file-type-js-official" color="gray" />
								<p>skills.js</p>
							</div>
							<div className="options-menu">
								<Icon
									icon="vscode-icons:file-type-typescript-official"
									color="gray"
								/>
								<p>projects.ts</p>
							</div>
						</>
					)}
				</div>
			)}
		</div>
	);
}

export default SideBarMenu;
