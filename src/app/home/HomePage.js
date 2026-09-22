import React from "react";
import "../styles/components/home.scss";
import CaseStudySection from "./CaseStudySection";
import SkillsSection from "./SkillsSection";
import HeroSection from "./HeroSection";
import CtaSection from "./CtaSection";

function HomePage() {
	return (
		<main id="home__page">
			<HeroSection />
			<CaseStudySection />
			<SkillsSection />
			<CtaSection />
		</main>
	);
}

export default HomePage;
