import { Geist, Geist_Mono } from "next/font/google";
import "./styles/style.scss";
import ContactNavbar from "./components/ContactNavbar";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Mazen Alswar – Growth & WebOps Engineer",
	description:
		"Full-stack JavaScript & Growth engineer who ships high-performance Next.js sites and data-driven funnels.",
	openGraph: {
		type: "website",
		url: "https://mazenswar.dev/",
		title: "Mazen Alswar – Growth & WebOps Engineer",
		description:
			"Full-stack JavaScript & Growth engineer who ships high-performance Next.js sites and data-driven funnels.",
		images: [
			{
				url: "https://mazenswar.dev/og-card-v1.png",
				width: 1200,
				height: 630,
				alt: "Mazen Alswar – Growth & WebOps Engineer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		images: ["https://mazenswar.dev/og-card-v1.png"],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<ThemeToggle />
				<ContactNavbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
