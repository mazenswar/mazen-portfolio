import Script from "next/script";
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
	openGraph: {
		type: "website",
		url: "https://mazenswar.dev/",
		title: "Mazen Alswar - Growth & WebOps Engineer",
		description:
			"Full-stack JavaScript & Growth engineer who ships high-performance Next.js sites and data-driven funnels.",
		images: [
			{
				url: "https://mazenswar.dev/og-card-v2.png",
				width: 1200,
				height: 630,
				alt: "Mazen Alswar - Growth & WebOps Engineer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		images: ["https://mazenswar.dev/og-card-v2.png"],
	},
	icons: {
		icon: [
			{ url: "/icons/favicon.svg", type: "image/svg+xml" },
			{ url: "/icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
			{ url: "/icons/favicon.ico" },
		],
		apple: "/icons/apple-touch-icon.png",
		other: [{ rel: "manifest", url: "/icons/site.webmanifest" }],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<ThemeToggle />
				<ContactNavbar />
				{children}
				{/* Google Analytics 4 */}
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-41RMVT6BC5"
					strategy="afterInteractive"
				/>
				<Script id="ga4-init" strategy="afterInteractive">
					{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-41RMVT6BC5', { anonymize_ip: true });
    `}
				</Script>
				<Footer />
			</body>
		</html>
	);
}
