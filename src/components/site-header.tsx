"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FireGlyph } from "@/components/fire-glyph";
import { bookingUrl } from "@/lib/site";

const solutions = [
	{ href: "/solutions/slack-triage", label: "Slack triage" },
	{ href: "/solutions/ai-sre", label: "AI SRE" },
	{ href: "/solutions/status-pages", label: "Status pages" },
	{ href: "/solutions/post-incidents", label: "Post-incidents" },
] as const;

export function SiteHeader() {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!open) return;
		function handleClick(e: MouseEvent) {
			if (ref.current && !ref.current.contains(e.target as Node))
				setOpen(false);
		}
		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
	}, [open]);

	return (
		<header className="fc-header">
			<div className="fc-header-delimiter" aria-hidden />
			<div className="fc-shell fc-header-shell">
				<Link href="/" className="fc-brand" aria-label="Fire home">
					<FireGlyph className="fc-brand-mark" />
					<span>Fire</span>
				</Link>

				<nav className="fc-nav" aria-label="Primary">
					<div ref={ref} className="relative">
						<button
							type="button"
							onClick={() => setOpen((v) => !v)}
							className="fc-nav-link cursor-pointer"
						>
							Solutions
							<svg
								width="10"
								height="6"
								viewBox="0 0 10 6"
								fill="none"
								className={`ml-1 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
							>
								<path
									d="M1 1l4 4 4-4"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
						{open && (
							<div className="absolute top-full left-0 mt-1 w-48 rounded-md border border-[var(--border-muted)] bg-white shadow-[0_4px_16px_-4px_rgba(0,0,0,0.12)] py-1 z-50">
								{solutions.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										onClick={() => setOpen(false)}
										className="block px-3 py-2 text-[13px] font-medium text-[var(--black-alpha-64)] hover:text-[var(--accent-black)] hover:bg-black/[0.03] transition-colors"
									>
										{item.label}
									</Link>
								))}
							</div>
						)}
					</div>
					<Link href="/pricing" className="fc-nav-link">
						Pricing
					</Link>
					<Link href="/about" className="fc-nav-link">
						About
					</Link>
				</nav>

				<div className="fc-header-actions">
					<a
						href={bookingUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="fc-btn fc-btn-primary fc-btn-sm"
					>
						Book setup
					</a>
				</div>
			</div>
		</header>
	);
}
