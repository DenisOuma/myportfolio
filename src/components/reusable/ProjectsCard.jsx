import React from "react";
function ProjectsCard(props) {
	return (
		<div className="project-card w-500">
			<div className="image-card">
				<img src={props.img} alt="" className="w-full h-full" />
			</div>
			<div className="card-description">
				<div className="icon-logo">
					<img
						src="https://avatars.githubusercontent.com/u/53114809?v=4"
						alt=""
					/>
				</div>
				<div className="title-name">
					<h2>{props.name}</h2>
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	);
}

export default ProjectsCard;
