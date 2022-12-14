import React from "react";
import gif from "./video_new.gif";
import img from "../../images/96__match_success_rate-removebg.png";
import { Icon } from "@iconify/react";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
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
					<h1>Hi, I'm Denis Ouma</h1>
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
						Motivated and dependable full-stack developer with comprehensive
						skills in Node JS and React. Proficient in Ruby and Ruby on Rails.
						Also a fast and dedicated learner with a growth mindset, constantly
						looking to develop new skills and expand technical knowledge.
					</p>

					<div className="links-socila">
						{social.map((link) => (
							<div className="socila-media" key={link.id}>
								<a href={link.link} className="icon-name">
									<Icon
										icon={link.icon}
										height="30px"
										color="#1a8cd8"
										style={{ borderRadius: "50px" }}
									/>
								</a>
							</div>
						))}
					</div>
					<div className="resume-link">
						<a href="https://drive.google.com/file/d/18NGPZjw1hXDfObJv30vGpuigR1uK_c4B/view">
							<Button
								color="success"
								className="resume-btn"
								startIcon={<ArticleOutlinedIcon />}
							>
								Resume
							</Button>
						</a>
					</div>
				</div>
				<div className="description-right">
					<img src={gif} alt="wfsdf" />
				</div>
			</div>
			<img src={img} alt="" />
		</div>
	);
}

export default Aboute;
