import React from "react";
import "./styles/skills__section.scss";

function SkillsSection() {
	return (
		<section className="skills__section">
			<div className="content">
				<h3>Skills</h3>
				<ul className="skills__strip">
					<li className="skill pill">Next.js</li>
					<li className="skill pill">React</li>
					<li className="skill pill">JavaScript (ES 6+)</li>
					<li className="skill pill">AWS Amplify &amp; S3</li>
					<li className="skill pill">GraphQL (AppSync)</li>
					<li className="skill pill">REST APIs</li>
					<li className="skill pill">Google Tag Manager</li>
					<li className="skill pill">GA4</li>
					<li className="skill pill">SEO</li>
					<li className="skill pill">Ruby on Rails (prev.)</li>
				</ul>
			</div>
		</section>
	);
}

export default SkillsSection;
