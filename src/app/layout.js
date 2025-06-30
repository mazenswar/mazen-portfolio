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
	title: "Mazen Alswar - Growth & WebOps Engineer",
	description:
		"Full-stack JavaScript & Growth engineer who ships high-performance Next.js sites and data-driven funnels.",
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
