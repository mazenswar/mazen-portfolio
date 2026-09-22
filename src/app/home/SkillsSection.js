import React from "react";
import "./styles/skills__section.scss";

const skills = [
	"Next.js",
	"React",
	"JavaScript ES6+",
	"Node.js",
	"Tailwind CSS",
	"Sanity CMS",
	"Vercel",
	"AWS S3",
	"Google Tag Manager",
	"GA4",
	"SEO",
	"AEO",
	"Web Performance Optimization",
	"Local SEO",
	"REST APIs",
];

function SkillsSection() {
	return (
		<section className="skills__section">
			<div className="content">
				<h3>Skills</h3>
				<ul className="skills__grid">
					{skills.map((skill) => (
						<li className="skill__tile" key={skill}>
							{skill}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default SkillsSection;
