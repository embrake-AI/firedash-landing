import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SystemStatusLink } from "@/components/system-status-link";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		default: "FireDash | Handle daily fires once Slack stops scaling",
		template: "%s | FireDash",
	},
	description: "The missing layer between Slack and incident tools. Fire handles the daily 'hey, this is broken' moments that no one really owns or tracks.",
	openGraph: {
		title: "FireDash | Handle daily fires once Slack stops scaling",
		description: "The missing layer between Slack and incident tools. Fire handles the daily 'hey, this is broken' moments that no one really owns or tracks.",
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
						<p>© {new Date().getFullYear()} FireDash. All rights reserved.</p>
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
