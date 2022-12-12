import React from "react";
import ProjectsCard from "../reusable/ProjectsCard";

function Project() {
	return (
		<div className="skills-component">
			<h1>Projects</h1>
			<p>College and Side Projects for practice.</p>
			<div className=" card-pro">
				<ProjectsCard />
			</div>
		</div>
	);
}

export default Project;
