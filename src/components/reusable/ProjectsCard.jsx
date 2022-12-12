import React from "react";

function ProjectsCard() {
	return (
		<div className="project-card">
			<div className="image-card">
				<img
					src="https://www.rajsavaliya.com/_next/image?url=%2Fayethumb.jpg&w=640&q=75"
					alt=""
				/>
			</div>
			<div className="card-description">
				<div className="icon-logo">
					<img
						src="https://avatars.githubusercontent.com/u/53114809?v=4"
						alt=""
					/>
				</div>
				<div className="title-name">
					<h2>Code Keeper</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
				</div>
			</div>
		</div>
	);
}

export default ProjectsCard;
