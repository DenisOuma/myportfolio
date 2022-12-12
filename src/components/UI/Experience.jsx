import React from "react";
import FiverCom from "../reusable/FiverCom";
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
					<div className="experience-2">
						<div className="mohi">
							<div
								className="img-icon"
								style={{
									height: "60px",
									width: "60px",

									borderRadius: "50%",
									border: "3px solid #fff",
								}}
							>
								<img
									src="data:image/png;base64,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"
									alt="MOHI"
								/>
							</div>
							<div className="responsibility">
								<FiverCom />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Experience;
