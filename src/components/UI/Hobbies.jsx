import React from "react";
import { Icon } from "@iconify/react";
function Hobbies() {
	const hobbies = [
		{ id: 0, hobbyIcon: "twemoji:video-game", hobbyTitle: "Gaming" },
		{
			id: 1,
			hobbyIcon: "eos-icons:machine-learning-outlined",
			hobbyTitle: "Learning",
		},
		{
			id: 3,
			hobbyIcon: "logos:blogger",
			hobbyTitle: "Blogging",
		},
		{
			id: 3,
			hobbyIcon: "noto:woman-swimming-medium-skin-tone",
			hobbyTitle: "Swimming",
		},
		{
			id: 2,
			hobbyIcon: "noto:rocket",
			hobbyTitle: "Startup",
		},
	];
	return (
		<div className="hobbies-container">
			<div className="inner-conatiner">
				<h1>Hobbies</h1>
				<p>What I do During my Spare Time:</p>
				<div className="hobby-lists">
					{hobbies.map((hobbie) => (
						<div className="hobbie">
							<div className="blog-img" key={hobbie.id}>
								<Icon
									icon={hobbie.hobbyIcon}
									width="70"
									height="70"
									color="black"
								/>
							</div>
							<h2>{hobbie.hobbyTitle}</h2>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Hobbies;
