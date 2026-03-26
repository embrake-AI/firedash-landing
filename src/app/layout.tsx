import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SystemStatusLink } from "@/components/system-status-link";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		default: "Fire | Structure for Fast-Moving Teams",
		template: "%s | Fire",
	},
	description: "An AI SRE that structures every incident and guides your team to resolution — so any engineer can respond with confidence.",
	openGraph: {
		title: "Fire | Structure for Fast-Moving Teams",
		description: "An AI SRE that structures every incident and guides your team to resolution — so any engineer can respond with confidence.",
		type: "website",
	},
	icons: {
		icon: "/favicon.svg",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<div className="fc-fixed-rails" aria-hidden />
				<SiteHeader />
				<main>{children}</main>
				<footer className="fc-footer">
					<div className="fc-shell fc-footer-inner">
						<p>© {new Date().getFullYear()} Fire. All rights reserved.</p>
						<div className="fc-footer-status">
							<SystemStatusLink />
						</div>
						<nav className="fc-footer-links" aria-label="Legal">
							<Link href="/privacy">Privacy Policy</Link>
							<Link href="/terms-and-conditions">Terms & Conditions</Link>
						</nav>
					</div>
				</footer>
			</body>
		</html>
	);
}
