import React from "react";
import "./styles/hero__section.scss";
function HeroSection() {
	return (
		<section className="hero__section">
			<div className="content">
				<h1>Hi, I{"'"}m Mazen — Growth &amp; WebOps Engineer</h1>
				<p>
					I bridge code and analytics so marketing teams know exactly what
					converts.
				</p>
				<p>
					I{"'"}m a Growth & WebOps engineer based in Edison, NJ. I built and
					optimised the CALM Therapy site (Next.js + AWS Amplify) and wired
					GA4/GTM to track bookings, landing our first five private-pay clients.
					I also run AQSWAR, a 4,000-item archive for Bahraini journalist Aqeel
					Swar. Former coding-bootcamp coach who thrives in fast-learning,
					cross-disciplinary teams.
				</p>
				<a href="/resume.pdf" className="btn primary">
					Download résumé
				</a>
			</div>
		</section>
	);
}

export default HeroSection;
