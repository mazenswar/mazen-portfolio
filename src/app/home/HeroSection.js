"use client";
import React, { useState, useEffect } from "react";
import "./styles/hero__section.scss";
import Link from "next/link";
import Image from "next/image";
import logoWhite from "./assets/logo-white.webp";
import logo from "./assets/logo.webp";

function useTheme() {
	const [isDark, setIsDark] = useState(
		typeof document !== "undefined"
			? document.documentElement.dataset.theme === "dark"
			: false
	);

	useEffect(() => {
		const html = document.documentElement;
		const observer = new MutationObserver(() => {
			setIsDark(html.dataset.theme === "dark");
		});
		observer.observe(html, {
			attributes: true,
			attributeFilter: ["data-theme"],
		});
		return () => observer.disconnect();
	}, []);

	return isDark;
}

function HeroSection() {
	const isDark = useTheme();
	const currentLogo = isDark ? logoWhite.src : logo.src;

	return (
		<section className="hero__section">
			<div className="content">
				<Image
					priority
					src={currentLogo}
					alt="logo - spreadlove"
					width={200}
					height={200}
				/>
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
				<Link
					data-no-prefetch
					href="/resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="btn primary"
				>
					Résumé
				</Link>
			</div>
		</section>
	);
}

export default HeroSection;
