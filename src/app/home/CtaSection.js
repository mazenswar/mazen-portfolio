import Link from "next/link";
import "./styles/cta_section.scss";

function CtaSection() {
	return (
		<section className="cta__section">
			<div className="content">
				<h2>Let&apos;s work together</h2>
				<p>
					Whether you&apos;re looking to hire me directly or want my consultancy
					to design and build your site, I&apos;d love to hear about your
					project.
				</p>

				<div className="cta__paths">
					<div className="cta__path">
						<h3>Hire me</h3>
						<p>Have a role or project in mind? Reach out directly.</p>
						<Link href="mailto:workwithmazen@proton.me" className="btn primary">
							Email me
						</Link>
					</div>

					<div className="cta__path">
						<h3>Work with my business</h3>
						<p>
							Need a website designed and built for your business? Book a free
							consult.
						</p>
						<Link
							href="https://binswar.com"
							target="_blank"
							rel="noopener noreferrer"
							className="btn secondary"
							aria-label="Visit Binswar LLC website (opens in a new tab)"
						>
							Visit Binswar
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CtaSection;
