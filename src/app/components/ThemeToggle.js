"use client";

import { useEffect, useState } from "react";

function ThemeToggle() {
	const [theme, setTheme] = useState("light");

	// Read initial theme from localStorage or system preference.
	// Runs in an effect (not a lazy useState initializer) so the server-rendered
	// default matches the client's first render, avoiding a hydration mismatch.
	/* eslint-disable react-hooks/set-state-in-effect */
	useEffect(() => {
		const stored = window.localStorage.getItem("preferred-theme");
		if (stored === "dark" || stored === "light") {
			setTheme(stored);
			document.documentElement.dataset.theme = stored;
		} else {
			const systemPrefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;
			const initial = systemPrefersDark ? "dark" : "light";
			setTheme(initial);
			document.documentElement.dataset.theme = initial;
		}
	}, []);
	/* eslint-enable react-hooks/set-state-in-effect */

	// Toggle handler
	const toggleTheme = () => {
		const next = theme === "dark" ? "light" : "dark";
		setTheme(next);
		document.documentElement.dataset.theme = next;
		window.localStorage.setItem("preferred-theme", next);
	};

	return (
		<button
			onClick={toggleTheme}
			aria-label="Toggle color scheme"
			className="theme__toggle"
		>
			{theme === "dark" ? "🌞" : "🌙"}
		</button>
	);
}

export default ThemeToggle;
