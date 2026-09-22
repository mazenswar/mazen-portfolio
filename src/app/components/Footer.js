// src/app/home/Footer.js
"use client";
import "./styles/footer.scss";

export default function Footer() {
	return (
		<footer className="site__footer">
			<p>© {new Date().getFullYear()} Mazen Alswar. All rights reserved.</p>

			<button
				type="button"
				className="backToTop"
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			>
				↑ Back to top
			</button>
		</footer>
	);
}
