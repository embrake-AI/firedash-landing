import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
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
						<div className="fc-footer-links">
							<Link href="/privacy">Privacy Policy</Link>
							<Link href="/terms-and-conditions">Terms & Conditions</Link>
						</div>
					</div>
				</footer>
			</body>
		</html>
	);
}
