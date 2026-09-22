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
					I build fast, beautiful websites for businesses and help them grow
					online.
				</p>
				<p>
					I{"'"}m a web developer and designer based in Edison, NJ. I build
					websites using Next.js, and modern CMS tools. My work spans private
					therapy practices, small businesses, and digital archive projects. I
					have a diverse background with experience in communications,
					diplomacy, and digital marketing which influence how I approach every
					project. I love building sites that are easy to use, look great and
					reflect the spirit and vision of their owners
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
