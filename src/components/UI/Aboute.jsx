import React from "react";
import gif from "./video_new.gif";
import { Icon } from "@iconify/react";
import { Typewriter } from "react-simple-typewriter";

function Aboute() {
	// const handleType = (count: number) => {
	// 	// access word count number
	// 	console.log(count)}
	//   }

	//   const handleDone = () => {
	// 	console.log(`Done after 5 loops!`)
	//   }
	const social = [
		{
			id: 1,
			link: "https://www.linkedin.com/in/denisouma/",
			icon: "logos:linkedin-icon",
		},
		{
			link: "https://github.com/DenisOuma",
			icon: "logos:github-icon",
		},
		{
			id: 2,
			link: "https://twitter.com/Noddyboi1",
			icon: "fa:twitter-square",
		},
	];

	return (
		<div className="about-container">
			<div className="container-info">
				<div className="description-left">
					<h1>Hi all, I'm Denis Ouma</h1>
					<Typewriter
						words={[
							"| Product Builder |",
							"{ Frontend Engineer }",
							"{ Backend Engineer }",
							"{ Developer }",
						]}
						loop={100}
						cursor
						cursorStyle="_"
						cursorSize="30px"
						typeSpeed={70}
						deleteSpeed={50}
						delaySpeed={2000}
						className="auto-type"
					/>
					<p>
						I'm passionate Front-End engineer with comprehensive skills in
						NodeJS and React, Ruby on Rails. Proficient in Javascript and
						Python/Flask. Also a fast and dedicated learner with a growth
						mindset, constantly looking to develop new skills and expand
						technical knowledge.
					</p>

					<div className="links-socila">
						{social.map((link) => (
							<div className="socila-media" key={link.id}>
								<a href={link.link} className="icon-name">
									<Icon icon={link.icon} height="40px" color="#1a8cd8" />
								</a>
							</div>
						))}
					</div>
				</div>
				<div className="description-right">
					<img src={gif} alt="wfsdf" />
				</div>
			</div>
		</div>
	);
}

export default Aboute;
