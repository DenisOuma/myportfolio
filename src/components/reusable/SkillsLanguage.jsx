import React from "react";
import { Icon } from "@iconify/react";
function SkillsLanguage({ data }) {
	return (
		<div className="skills-data">
			<h3>{data.prof}</h3>
			{data.languages.map((lang) => (
				<div className="language-skill" key={lang.id}>
					{lang.data.map((lang) => (
						<>
							<div className="icon-skill">
								<Icon icon={lang.logo} width="40" height="40" />
							</div>
							<p>{lang.info}</p>
						</>
					))}
				</div>
			))}
		</div>
	);
}

export default SkillsLanguage;
