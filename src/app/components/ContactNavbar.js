import Link from "next/link";
import Image from "next/image";
import React from "react";
import githubImg from "./assets/GitHub.png";
import linkedInImage from "./assets/LinkedIn.png";
import emailImg from "./assets/Email.png";

import "./styles/contact__navbar.scss";

function ContactNavbar() {
	return (
		<nav className="contact__navbar">
			<div className="content">
				<div className="buttons">
					<Link href="mailto:workwithmazen@proton.me">
						<Image src={emailImg} alt="Email icon" width={20} height={20} />
					</Link>

					<Link
						href="https://www.linkedin.com/in/mazen-alswar/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src={linkedInImage}
							alt="LinkedIn icon"
							width={20}
							height={20}
						/>
					</Link>

					<Link
						href="https://github.com/mazenswar"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image src={githubImg} alt="GitHub icon" width={20} height={20} />
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default ContactNavbar;
