import Image from "next/image";
import React from "react";
import calmDesktop from "./assets/calm-desktop.png";
import aqswarDesktop from "./assets/aqswar-desktop.png";
import Link from "next/link";
import "./styles/case_studies_section.scss";
function CaseStudySection() {
	return (
		<section className="case__study__section">
			<div className="content">
				{/* ///////////////////////////////// */}

				<div className="case__studies__container">
					<div className="case__study__card calm">
						<h3>Case Study #1</h3>
						<h3>
							<Link href="https://calmtherapy.center" target="_blank">
								CALM Therapy
							</Link>
						</h3>

						{/* thumbnail – replace src with your real image path */}
						<Image
							src={calmDesktop.src}
							alt="Screenshot of CALM Therapy website"
							width={500}
							height={250}
						/>

						<p>
							<strong>Role:</strong> Co-Founder &amp; Growth / WebOps Lead (Apr
							→ Jun 2024 rebuild)
						</p>
						<p>
							CALM Therapy is a private practice that I co-founded. I own
							everything outside the therapy room (design, code, analytics, and
							ops).
						</p>

						<p>
							<strong>Timeline & rebuild:</strong> I shipped CALM Therapy{"'"}s
							first marketing site in April-June 2024; Lighthouse Performance
							and SEO were stuck in the low-70s. One year later, from April to
							June 2025, I led a complete rebuild on the latest Next.js, added
							structured data, automated image conversion to WebP, and deferred
							analytics scripts. Mobile Lighthouse now averages 96-99,
							Accessibility 93, Best Practices 100, SEO 100, with every Core Web
							Vital solidly in the “Good” band.
						</p>

						<p>
							<strong>Performance &amp; SEO:</strong> converted all images to
							WebP, added build-time compression, and set up a cron-driven
							service-worker cache for Medium blog content. Mobile Lighthouse
							now averages 96-99, Accessibility 93, Best Practices 100, SEO 100,
							and every Core Web Vital is “Good” (previously Performance and SEO
							were stuck in the mid-60s).
						</p>

						<p>
							<strong>Experimentation:</strong> launched a policy-compliant
							Google Ads pilot to validate paid acquisition; first leads were
							unqualified, so I{"'"}m iterating on keywords and landing-page
							copy.
						</p>

						<p>
							<strong>Stack:</strong> Next.js · AWS Amplify · Google Tag Manager
							· GA4 · Lighthouse CI · Medium RSS/REST cache script
						</p>
					</div>
					<div className="case__study__card">
						<h3>Case Study #2</h3>
						<h3>
							<Link href="https://aqswar.com" target="_blank">
								AQSWAR Archive
							</Link>
						</h3>

						{/* thumbnail – replace src with your real image path */}
						<Image
							src={aqswarDesktop.src}
							alt="Screenshot of the AQSWAR literary archive"
							width={420}
							height={300}
						/>

						<p>
							<strong>Role:</strong> Solo Developer &amp; Digital Archivist (Jun
							→ Sep 2023 build; v2 in progress 2025)
						</p>

						<p>
							AQSWAR is digital archive project for the works of Bahraini
							journalist Aqeel Swar containing more than 4,000 articles, scripts
							and photographs from two decades of Bahraini journalism and art.
							At the outset, every file sat in unstructured S3 folders with
							inconsistent names and zero metadata.
						</p>

						<p>
							<strong>Initial build (2023):</strong> normalised every filename
							to
							<code> YYYY-MM-DD-title.ext </code>, wrote a Node CLI that walks
							S3, extracts dates and categories and seeds DynamoDB through AWS
							Amplify{"'"}s GraphQL API (AppSync). I then built a vanilla React
							front-end that lets readers filter by year, publisher or medium
							and renders high-resolution scans on demand.
						</p>

						<p>
							<strong>v2 roadmap (2025):</strong> upgrading to a fully
							searchable text archive: batch-OCR with Google Vision, human QA
							workflow and an instant-search UI so visitors can find articles by
							phrase, topic or person. Original images will stay available as
							reference.
						</p>

						<p>
							<strong>Stack:</strong> React · AWS Amplify · AppSync GraphQL ·
							DynamoDB · S3 · Node.js CLI scripts · (planned) Google Vision OCR
							&amp; full-text search
						</p>
					</div>
				</div>
				{/* ///////////////////////////////// */}
			</div>
		</section>
	);
}

export default CaseStudySection;
