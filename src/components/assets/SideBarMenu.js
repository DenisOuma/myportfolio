import React from "react";
import "../../styles/NavBar.css";
import { Icon } from "@iconify/react";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { Link } from "react-router-dom";
function SideBarMenu() {
	const [isShown, setIsShown] = React.useState(false);
	const [about, setAbout] = React.useState(false);
	const [project, setProject] = React.useState(false);
	const [contact, setContact] = React.useState(false);
	const [hobbies, setHobbies] = React.useState(false);

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
						<h3 onClick={handleAbout}>About</h3>
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
					<div className="drop-open-menu">
						<KeyboardArrowRightRoundedIcon />
						<h3 onClick={handleProject}>Projects</h3>
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
					<div className="drop-open-menu">
						<KeyboardArrowRightRoundedIcon />
						<h3 onClick={handleContact}>Contact</h3>
					</div>
					{contact && (
						<>
							<div className="options-menu">
								<Icon icon="logos:google-gmail" color="gray" width="14" />
								<p>Email.txt</p>
							</div>
						</>
					)}
					<div className="drop-open-menu">
						<KeyboardArrowRightRoundedIcon />
						<h3 onClick={handleHobbies}>Misc</h3>
					</div>
					{hobbies && (
						<>
							<div className="options-menu">
								<Icon icon="vscode-icons:file-type-python" color="gray" />
								<p>Hobbies.py</p>
							</div>
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
