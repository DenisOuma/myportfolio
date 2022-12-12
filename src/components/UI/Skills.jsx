import React from "react";
import SkillsLanguage from "../reusable/SkillsLanguage";

function Skills() {
	const programming = [
		{
			prof: "Programming",
			languages: [
				{
					id: 1,
					data: [
						{
							logo: "logos:javascript",
							info: "Javascript",
						},
						{
							logo: "vscode-icons:file-type-ruby",
							info: "Ruby",
						},
						{
							logo: "logos:typescript-icon",
							info: "TypeScript",
						},
					],
				},
			],
		},
	];
	const fullStack = [
		{
			prof: "Full-Stack Development",
			languages: [
				{
					id: 1,
					data: [
						{
							logo: "logos:react",
							info: "React",
						},
						{
							logo: "logos:nodejs-icon",
							info: "Node.js",
						},
						{
							logo: "vscode-icons:file-type-tailwind",
							info: "Tailwind",
						},
						{
							logo: "logos:bootstrap",
							info: "Bootstrap",
						},

						{
							logo: "vscode-icons:file-type-sass",
							info: "SASS",
						},
						{
							logo: "logos:rails",
							info: "Railways",
						},
					],
				},
			],
		},
	];
	const dataBase = [
		{
			prof: "Database",
			languages: [
				{
					id: 1,
					data: [
						{
							logo: "logos:postgresql",
							info: "PostgreSQL",
						},
						{
							logo: "vscode-icons:file-type-sql",
							info: "SQL",
						},
						{
							logo: "logos:mongodb-icon",
							info: "MongoDB",
						},
					],
				},
			],
		},
	];
	const devOps = [
		{
			prof: "DevOps",
			languages: [
				{
					id: 1,
					data: [
						{
							logo: "vscode-icons:file-type-git",
							info: "Git",
						},
						{
							logo: "logos:github-octocat",
							info: "Github",
						},
						{
							logo: "logos:heroku-icon",
							info: "Heroku",
						},
						{
							logo: "vscode-icons:file-type-netlify",
							info: "Netlify",
						},

						{
							logo: "simple-icons:render",
							info: "Render",
						},
						{
							logo: "simple-icons:railway",
							info: "Railway",
						},
					],
				},
			],
		},
	];
	const tools = [
		{
			prof: "Tools",
			languages: [
				{
					id: 1,
					data: [
						{
							logo: "vscode-icons:file-type-vscode",
							info: "Visual Studio Code",
						},
						{
							logo: "logos:postman-icon",
							info: "Postman",
						},
						{
							logo: "logos:pycharm",
							info: "PyCharm",
						},
					],
				},
			],
		},
	];
	return (
		<div className="skills-component">
			<h1>Skills</h1>
			<p>
				Data Structures and Algorithms, Frontend Development, Backend
				Development, Database Management, System Design and Cloud.
			</p>
			{programming.map((lan) => (
				<SkillsLanguage data={lan} />
			))}
			{fullStack.map((lan) => (
				<SkillsLanguage data={lan} />
			))}
			{dataBase.map((lan) => (
				<SkillsLanguage data={lan} />
			))}
			{devOps.map((lan) => (
				<SkillsLanguage data={lan} />
			))}
			{tools.map((lan) => (
				<SkillsLanguage data={lan} />
			))}
		</div>
	);
}

export default Skills;
