"use client";
import React from "react";
import "./styles/hero__section.scss";
import Link from "next/link";
import Image from "next/image";

const logo = { src: "/images/logo/logo.webp" };
const logoWhite = { src: "/images/logo/logo-white.webp" };

function HeroSection() {
	return (
		<section className="hero__section">
			<div className="content">
				<div className="logo-wrapper">
					<Image
						className="logo-light"
						priority
						src={logo.src}
						alt="Mazen Alswar logo"
						width={200}
						height={200}
					/>
					<Image
						className="logo-dark"
						priority
						src={logoWhite.src}
						alt="Mazen Alswar logo"
						width={200}
						height={200}
					/>
				</div>
				<h1>Hi, I{"'"}m Mazen - Web Developer &amp; Designer</h1>
				<p>
					I build fast, beautiful and accessible websites for businesses and
					help them grow online.
				</p>
				<p>
					I{"'"}m a web developer and digital marketer based in Edison, NJ. I
					love helping small businesses develop a meaningful web presence that
					helps them thrive and reach new heights.
				</p>
				<p>
					I studied public relations for my BA and did a master's in media
					studies this helped me develop my writing and analytical skills, which
					helped me in my role as a diplomat serving the Kingdom of Bahrain. I
					later started to gravitate towards tech and was really interested in
					the idea of building websites which led me to to join a coding
					bootcamp and learn web development. I then spent years embarking on a
					self-learning journey in which I honed and expanded my skills. These
					skills enabled me to create websites for businesses and passion
					projects some of which I still maintain.
				</p>
				<p>
					I love the idea of helping build something from scratch and
					translating abstract ideas and visions into tangible usable
					experiences.
				</p>
				<Link
					data-no-prefetch
					href="/mazen-resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="btn primary"
					onClick={() =>
						window?.gtag?.("event", "download_resume", {
							event_category: "engagement",
							value: 1,
						})
					}
				>
					Résumé
				</Link>
			</div>
		</section>
	);
}

export default HeroSection;
