import React from "react";
import "../styles/components/home.scss";
import CaseStudySection from "./CaseStudySection";
import SkillsSection from "./SkillsSection";
import HeroSection from "./HeroSection";
import Head from "next/head";

function HomePage() {
	return (
		<>
			<Head>
				<title>Mazen Alswar - Growth & WebOps Engineer</title>
				<meta
					name="description"
					content="Full-stack JavaScript & Growth engineer who ships high-performance Next.js sites and data-driven funnels."
				/>
				<link rel="canonical" href="https://mazenswar.dev/" />

				{/* Open Graph */}
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Mazen Alswar - Growth & WebOps Engineer"
				/>
				<meta
					property="og:description"
					content="Full-stack JavaScript & Growth engineer who ships high-performance Next.js sites and data-driven funnels."
				/>
				<meta property="og:url" content="https://mazenswar.dev/" />
				<meta property="og:image" content="https://mazenswar.dev/og-card.png" />

				{/* Twitter Card */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Mazen Alswar - Growth & WebOps Engineer"
				/>
				<meta
					name="twitter:description"
					content="Full-stack JavaScript & Growth engineer who ships high-performance Next.js sites and data-driven funnels."
				/>
				<meta
					name="twitter:image"
					content="https://mazenswar.dev/og-card.png"
				/>
			</Head>

			<main id="home__page">
				<HeroSection />
				<CaseStudySection />
				<SkillsSection />
			</main>
		</>
	);
}

export default HomePage;
