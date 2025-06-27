// src/app/home/Footer.js
import Link from "next/link";
import "./styles/footer.scss";

export default function Footer() {
	return (
		<footer className="site__footer">
			<p>© {new Date().getFullYear()} Mazen Alswar. All rights reserved.</p>

			{/* #top anchor: add id="top" to your main wrapper or body */}
			<Link href="#top" className="backToTop">
				↑ Back to top
			</Link>
		</footer>
	);
}
