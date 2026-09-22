import Image from "next/image";
import React from "react";
import Link from "next/link";
import "./styles/case_studies_section.scss";

const projects = [
	{
		className: "",
		link: "https://binswar.com",
		linkLabel: "Binswar",
		image: "/images/projects/binswar.webp",
		alt: "Screenshot of the Binswar LLC website",
		width: 500,
		height: 250,
		role: "Designer & Developer",
		description: (
			<p>
				Binswar is my web development and digital marketing consultancy. I
				designed and built the site to reflect my vision and approach to work:
				modern, clean, and built with intention. It doubles as both a business
				presence and a live example of my design sensibility and development
				standards, from performance to accessibility to SEO.
			</p>
		),
		stack: "Next.js · Vercel",
	},
	{
		className: "",
		link: "https://calmtherapy.center",
		linkLabel: "CALM Therapy",
		image: "/images/projects/calm.webp",
		alt: "Screenshot of CALM Therapy website",
		width: 500,
		height: 250,
		role: "Web Developer & Digital Marketing Consultant",
		description: (
			<p>
				I led the design, development, and growth strategy for CALM Therapy from
				launch through multiple rebuilds. Built on Next.js and deployed on
				Vercel, with continuous performance work bringing mobile Lighthouse
				scores to 96-99 through a full optimization overhaul. I set up GA4 and
				Google Tag Manager for analytics, ran a Google Ads pilot for paid
				acquisition, and implemented structured data, WebP image conversion, and
				Core Web Vitals optimization.
			</p>
		),
		stack: "Next.js · Vercel · Google Tag Manager · GA4 · Lighthouse CI",
	},
	{
		className: "",
		link: "https://aqswar.com",
		linkLabel: "AQSWAR Archive",
		image: "/images/projects/aqswar.webp",
		alt: "Screenshot of the AQSWAR literary archive",
		width: 420,
		height: 300,
		role: "Solo Developer & Designer",
		description: (
			<>
				<p>
					AQSWAR is a digital archive for the works of Bahraini journalist Aqeel
					Swar, containing more than 4,000 articles, scripts, and photographs
					spanning two decades of Bahraini journalism and art. I built the
					archive from scratch, normalizing filenames, structuring metadata, and
					building a filterable React interface that lets readers browse by
					year, publisher, or medium.
				</p>
				<p>
					2027 roadmap: full-text Arabic search powered by Google Cloud Vision
					API OCR. The goal is to make every document in the archive searchable
					by phrase, topic, or person. OCR accuracy on Arabic handwritten and
					printed text remains a challenge, and the implementation is being
					carefully tested before full rollout.
				</p>
			</>
		),
		stack:
			"Next.js · Vercel · Google Tag Manager · GA4 · Lighthouse CI · Amazon S3",
	},
	{
		className: "",
		link: "https://ecolawn.us",
		linkLabel: "Eco Lawn",
		image: "/images/projects/ecolawn.webp",
		alt: "Screenshot of the Eco Lawn website",
		width: 500,
		height: 250,
		role: "Solo Developer",
		description: (
			<p>
				Eco Lawn is a local lawn care business in New Jersey. I built their site
				to establish a professional digital presence optimized for local SEO and
				AEO, with clean on-page structure that helps both search engines and
				potential customers quickly find what they need.
			</p>
		),
		stack: "Next.js · Vercel · GA4",
	},
	{
		className: "",
		link: "https://colorcutoutz.com",
		linkLabel: "Color Cutoutz",
		image: "/images/projects/colorcutoutz.webp",
		alt: "Screenshot of the Color Cutoutz website",
		width: 500,
		height: 250,
		role: "Solo Developer",
		description: (
			<p>
				Color Cutoutz is a hair salon client. I built the site mobile-first,
				since most of their traffic comes from people searching on the go, with
				local SEO and AEO baked in to help new clients find and book with them
				through search.
			</p>
		),
		stack: "Next.js · Vercel · GA4",
	},
];

function CaseStudySection() {
	return (
		<section className="case__study__section">
			<div className="content">
				<div className="section__heading">
					<h2>Selected Work</h2>
					<p className="section__subtitle">
						A few of the projects I&apos;ve designed, built, and grown.
					</p>
				</div>
				<div className="case__studies__container">
					{projects.map((project, index) => (
						<article
							className={`case__study__card ${project.className}`.trim()}
							key={project.link}
						>
							<div className="card__media">
								<Image
									src={project.image}
									alt={project.alt}
									width={project.width}
									height={project.height}
								/>
							</div>

							<div className="card__body">
								<span className="card__index">
									Project {String(index + 1).padStart(2, "0")}
								</span>
								<h3>
									<Link
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`${project.linkLabel} (opens in a new tab)`}
									>
										{project.linkLabel}
									</Link>
								</h3>

								{project.role && <p className="card__role">{project.role}</p>}

								<div className="card__description">{project.description}</div>

								<ul className="card__stack">
									{project.stack.split(" · ").map((tech) => (
										<li key={tech}>{tech}</li>
									))}
								</ul>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default CaseStudySection;
