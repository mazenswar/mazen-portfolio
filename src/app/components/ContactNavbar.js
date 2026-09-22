import Link from "next/link";
import Image from "next/image";
import React from "react";
const linkedInImage = "/images/icons/LinkedIn.png";
const emailImg = "/images/icons/Email.png";

import "./styles/contact__navbar.scss";

function ContactNavbar() {
	return (
		<nav className="contact__navbar" aria-label="Contact links">
			<div className="content">
				<div className="buttons">
					<Link
						href="mailto:workwithmazen@proton.me"
						aria-label="Email Mazen"
					>
						<Image src={emailImg} alt="" width={20} height={20} />
					</Link>

					<Link
						href="https://www.linkedin.com/in/mazen-alswar/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Mazen's LinkedIn profile (opens in a new tab)"
					>
						<Image
							src={linkedInImage}
							alt=""
							width={20}
							height={20}
						/>
					</Link>

					<Link
						href="https://binswar.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Binswar LLC website (opens in a new tab)"
					>
						<svg
							viewBox="0 0 24 24"
							width="20"
							height="20"
							fill="none"
							stroke="#fff"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							aria-hidden="true"
							focusable="false"
						>
							<rect x="2" y="7" width="20" height="14" rx="2" />
							<path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
							<line x1="2" y1="13" x2="22" y2="13" />
						</svg>
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default ContactNavbar;
