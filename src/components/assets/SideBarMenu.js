import React, { useState, useEffect } from "react";
// import React, { useRef } from 'react';
import "../../styles/NavBar.css";
import { Icon } from "@iconify/react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

function SideBarMenu() {
	const [isShown, setIsShown] = React.useState(false);
	const [about, setAbout] = React.useState(true);
	const [project, setProject] = React.useState(true);
	const [contact, setContact] = React.useState(true);
	const [hobbies, setHobbies] = React.useState(true);
	const [isVisible, setIsVisible] = useState(true);
	const [intervalId, setIntervalId] = useState(null);

	useEffect(() => {
		const id = setInterval(() => {
			setIsVisible(isVisible);
		}, 1000); // toggle every 1000ms (1 second)

		setIntervalId(id);

		return () => clearInterval(id);
	}, [isVisible]);

	const handleStopClick = () => {
		clearInterval(intervalId);
		setIsVisible(false);
	};
	const handleClick = (e) => {
		setIsShown((current) => !current);
	};

	const handleAbout = (e) => {
		setAbout((current) => !current);
	};
	const handleProject = (e) => {
		setProject((current) => !current);
	};
	const handleContact = (e) => {
		setContact((current) => !current);
	};
	const handleHobbies = (e) => {
		setHobbies((current) => !current);
	};
	return (
		<div className="tagle-open">
			<div className="side-bar-meny">
				{isVisible ? (
					<div className="start-here">
						<div className="callout top">
							<div className="empty-btn">
								<h1>👈 Start Here 👀</h1>
								<IconButton
									aria-label="delete"
									size="small"
									onClick={handleStopClick}
								>
									<CloseRoundedIcon style={{ color: "#fff" }} />
								</IconButton>
							</div>
							<p>
								To begin working on my vscode portfolio, click the document icon
								to see more menu options(click close icon).
							</p>
						</div>
					</div>
				) : (
					""
				)}
				<div className="hover-effect" onClick={handleClick}>
					<Icon
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
					<div className="drop-open-menu" onClick={handleAbout}>
						{about ? <ExpandMoreRoundedIcon /> : <ChevronRightRoundedIcon />}
						<h3>
							<Icon icon="vscode-icons:folder-type-src" height="20" />
							<span>About</span>
						</h3>
					</div>
					{about && (
						<>
							<Link to="/myportfolio/" className="icon-name">
								<div className="options-menu">
									<Icon icon="vscode-icons:file-type-html" color="gray" />
									<p>index.html</p>
								</div>
							</Link>
							<Link to="/myportfolio/experience" className="icon-name">
								<div className="options-menu">
									<Icon icon="vscode-icons:file-type-css" color="gray" />
									<p>experience.css</p>
								</div>
							</Link>
							<Link to="/myportfolio/skills" className="icon-name">
								<div className="options-menu">
									<Icon
										icon="vscode-icons:file-type-js-official"
										color="gray"
									/>
									<p>skills.js</p>
								</div>
							</Link>
							<Link to="/myportfolio/projects" className="icon-name">
								<div className="options-menu">
									<Icon
										icon="vscode-icons:file-type-typescript-official"
										color="gray"
									/>
									<p>projects.ts</p>
								</div>
							</Link>
						</>
					)}
					<div className="drop-open-menu" onClick={handleProject}>
						{project ? <ExpandMoreRoundedIcon /> : <ChevronRightRoundedIcon />}

						<h3>
							<Icon icon="vscode-icons:folder-type-component" height="20" />
							<span>Projects</span>
						</h3>
					</div>
					{project && (
						<>
							<div className="options-menu">
								<Icon icon="vscode-icons:file-type-reactjs" color="gray" />
								<p>quickMart.js</p>
							</div>
							<div className="options-menu">
								<Icon icon="logos:nodejs-icon" color="gray" />
								<p>duka.js</p>
							</div>
							<div className="options-menu">
								<Icon icon="vscode-icons:file-type-ruby" color="gray" />
								<p>contact_keeper.rb</p>
							</div>
							<div className="options-menu">
								<Icon icon="vscode-icons:file-type-reactjs" color="gray" />
								<p>Expense.jsx</p>
							</div>
						</>
					)}
					<div className="drop-open-menu" onClick={handleContact}>
						{contact ? <ExpandMoreRoundedIcon /> : <ChevronRightRoundedIcon />}
						<h3>
							<Icon icon="vscode-icons:folder-type-style" height="20" />
							<span>Contact</span>
						</h3>
					</div>
					{contact && (
						<>
							<Link to="/myportfolio/contact/" className="icon-name">
								<div className="options-menu">
									<Icon icon="logos:google-gmail" color="gray" width="14" />
									<p>Email.txt</p>
								</div>
							</Link>
						</>
					)}
					<div className="drop-open-menu" onClick={handleHobbies}>
						{hobbies ? <ExpandMoreRoundedIcon /> : <ChevronRightRoundedIcon />}
						<h3>
							<Icon icon="vscode-icons:folder-type-images" height="20" />
							<span>Misc</span>
						</h3>
					</div>
					{hobbies && (
						<>
							<Link to="/myportfolio/hobbies" className="icon-name">
								<div className="options-menu">
									<Icon icon="vscode-icons:file-type-python" color="gray" />
									<p>Hobbies.py</p>
								</div>
							</Link>
							<div className="options-menu">
								<Icon icon="vscode-icons:file-type-css" color="gray" />
								<p>Blogs.css</p>
							</div>
							<div className="options-menu">
								<Icon icon="vscode-icons:file-type-js-official" color="gray" />
								<p>Learning.js</p>
							</div>
							<div className="options-menu">
								<Icon
									icon="vscode-icons:file-type-typescript-official"
									color="gray"
								/>
								<p>Gaming.ts</p>
							</div>
						</>
					)}
				</div>
			)}
		</div>
	);
}

export default SideBarMenu;
