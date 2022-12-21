import React from "react";

function Email() {
	return (
		<div className="email-container">
			<div className="outer-email-container">
				<div className="email-card">
					<div className="email-left">
						<h1>Get in touch</h1>
						<h2>Fill in the form to start a conversation</h2>
						<p>
							You can contact me with any questions, suggestions or just to say
							hi. I am always open to new ideas and collaborations. It can be
							anything like collaborating on good projects or startups or
							freelancing or gaming or anything else.
						</p>
					</div>
					<div className="email-right">
						<input type="text" placeholder="Full Name" name="name" />
						<input type="text" placeholder="Email" name="email" />
						<textarea name="" id="" cols="30" rows="10"></textarea>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Email;
