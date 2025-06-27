import React from "react";
import "../styles/components/home.scss";
import CaseStudySection from "./CaseStudySection";
import SkillsSection from "./SkillsSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";

function HomePage() {
	return (
		<main id="home__page">
			<HeroSection />
			<CaseStudySection />
			<SkillsSection />
			<AboutSection />
			<ContactSection />
		</main>
	);
}

export default HomePage;
