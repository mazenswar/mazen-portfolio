"use client";

import Image from "next/image";
import "./styles/site_logo.scss";

const logo = { src: "/images/logo/logo.webp" };
const logoWhite = { src: "/images/logo/logo-white.webp" };

function SiteLogo() {
	return (
		<button
			type="button"
			className="site__logo"
			aria-label="Back to top"
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
		>
			<Image
				className="logo-light"
				priority
				src={logo.src}
				alt="Mazen Alswar logo"
				width={80}
				height={80}
			/>
			<Image
				className="logo-dark"
				priority
				src={logoWhite.src}
				alt="Mazen Alswar logo"
				width={80}
				height={80}
			/>
		</button>
	);
}

export default SiteLogo;
