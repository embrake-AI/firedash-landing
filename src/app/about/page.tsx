import type { Metadata } from "next";
import { bookingUrl, demoUrl } from "@/lib/site";

export const metadata: Metadata = {
	title: "About",
	description: "Why Fire exists and what we are building for growing engineering teams.",
};

const principles = [
	"Keep incident workflows close to where teams already communicate",
	"Add clarity without adding heavyweight process",
	"Use AI for practical guidance, never for hype",
	"Help teams recover quickly and keep shipping",
];

export default function AboutPage() {
	return (
		<div className="fc-page">
			{/* ── HERO ── */}
			<section className="fc-shell fc-panel fc-section">
				<div className="fc-inner">
					<div className="inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--black-alpha-48)]">About</div>
					<h1 className="fc-section-title">
						Built from real incident pain
						<br className="hidden lg:block" />
						at a <span className="fc-highlight">growing startup</span>
					</h1>
					<p className="mt-4 max-w-[680px] text-base leading-relaxed text-[var(--black-alpha-64)]">
						I am an engineer at{" "}
						<a
							href="https://enginy.ai"
							target="_blank"
							rel="noopener noreferrer"
							className="font-semibold text-[var(--accent-black)] underline decoration-[var(--border-muted)] underline-offset-4 transition-colors hover:decoration-[var(--accent-black)]"
						>
							Enginy
						</a>
						. We kept hitting the same pattern: small incidents stealing focus, Slack threads getting noisy, and no lightweight tool that fit teams our size.
					</p>
				</div>
			</section>

			{/* ── WHAT WAS MISSING ── */}
			<section className="fc-shell fc-panel fc-section">
				<div className="fc-inner">
					<div className="grid gap-12 md:grid-cols-2 md:gap-16">
						<div>
							<div className="inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--black-alpha-48)]">What Was Missing</div>
							<h2 className="mt-4 text-[clamp(28px,4.2vw,40px)] font-medium leading-[1.1] tracking-tight">
								Most tools were either
								<br className="hidden lg:block" /> too light or too heavy
							</h2>
							<p className="mt-4 text-[15px] leading-relaxed text-[var(--black-alpha-64)]">
								Ticketing tools were too slow for active incidents. Enterprise incident platforms felt like adopting an entire SRE org before we needed one.
							</p>
							<p className="mt-3 text-[15px] leading-relaxed text-[var(--black-alpha-64)]">Fire is the middle path: real ownership, real timelines, and less process drag.</p>
						</div>

						<div>
							<div className="inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--black-alpha-48)]">Principles</div>
							<h2 className="mt-4 text-[clamp(28px,4.2vw,40px)] font-medium leading-[1.1] tracking-tight">
								Help engineering teams
								<br className="hidden lg:block" /> stay fast
							</h2>
							<ul className="mt-6 list-none p-0 m-0 flex flex-col gap-4">
								{principles.map((item) => (
									<li key={item} className="flex items-baseline gap-3 text-[15px] leading-relaxed text-[var(--black-alpha-72)]">
										<span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[var(--heat-100)]" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* ── CTA ── */}
			<section className="fc-shell fc-panel fc-panel-dark relative overflow-hidden py-20 max-sm:py-14 text-white text-center">
				<div className="fc-inner fc-center relative z-1">
					<h2 className="m-0 text-[clamp(28px,4.2vw,44px)] font-medium leading-[1.1] tracking-tight">
						See how Fire fits
						<br className="hidden lg:block" /> your team
					</h2>
					<p className="mt-3.5 text-base leading-[1.8] text-white/56">One focused session. No migration, no training required.</p>
					<div className="fc-cta-row">
						<a href={demoUrl} target="_blank" rel="noopener noreferrer" className="fc-btn fc-btn-cta-primary">
							Try the demo
						</a>
						<a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="fc-btn fc-btn-cta-secondary">
							Book a setup call
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
