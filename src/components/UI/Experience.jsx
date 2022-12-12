import React from "react";
import MohiAfri from "../reusable/MohiAfri";

function Experience() {
	return (
		<div className="experience-container">
			<div className="work-experience">
				<h1>Work</h1>
				<h2>Industry Experience</h2>
				<div className="thread-section">
					<div className="experienc-1">
						<div className="mohi">
							<div className="responsibility">
								<MohiAfri />
							</div>
							<div
								className="img-icon"
								style={{
									height: "60px",
									width: "60px",
									backgroundColor: "red",
									borderRadius: "50%",
									border: "3px solid #fff",
								}}
							>
								<img
									src="https://cdn2.hubspot.net/hubfs/4458293/Imported_Blog_Media/MOHI_Icon_small.jpg"
									alt="MOHI"
								/>
							</div>
						</div>
					</div>
					<div className="empty-div"></div>
					<div className="experience-2"></div>
				</div>
			</div>
		</div>
	);
}

export default Experience;
