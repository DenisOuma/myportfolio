import React from "react";
import { data } from "../../utilities/projectsData";
function Project() {
	const projectCards = data.map((card, i) => (
		<a href={card.liveLink} key={card.id}>
			<div className="project-card w-500">
				<div className="image-card">
					<img src={card.img} alt="" className="w-full h-full" />
				</div>
				<div className="card-description">
					<div className="icon-logo">
						<img
							src="https://avatars.githubusercontent.com/u/53114809?v=4"
							alt=""
						/>
					</div>
					<div className="title-name">
						<h2>{card.name}</h2>
						<p>{card.description}</p>
					</div>
				</div>
			</div>
		</a>
	));
	return (
		<div className="skills-component">
			<h1>Projects</h1>
			<p>College and Side Projects for practice.</p>
			<div className="grid grid-cols-3 gap-2  ">{projectCards}</div>
		</div>
	);
}

export default Project;
