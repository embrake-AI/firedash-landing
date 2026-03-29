import type { Metadata } from "next";
import { bookingUrl, demoUrl } from "@/lib/site";

export const metadata: Metadata = {
	title: "About",
	description: "Why Fire exists — built to handle the daily engineering fires that Slack can't scale.",
};

const principles = [
	"Keep fire handling close to where teams already communicate",
	"Add structure without adding heavyweight process",
	"Use AI for practical guidance, never for hype",
	"Help growing teams stay fast and keep shipping",
];

export default function AboutPage() {
	return (
		<div className="fc-page">
			{/* ── HERO ── */}
			<section className="fc-shell fc-panel fc-section">
				<div className="fc-inner">
					<div className="inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--black-alpha-48)]">About</div>
					<h1 className="fc-section-title">
						When we grew past 3 engineers,
						<br className="hidden lg:block" />
						<span className="fc-highlight">Slack broke</span>
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
						. We had a single Slack handle for fires — it worked at 3 people but completely broke at 10+. Daily issues like broken demos, blocked onboarding, and &ldquo;hey, this is broken&rdquo; moments were drowning us. No one owned them, no one tracked them.
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
								The missing layer between
								<br className="hidden lg:block" /> Slack and incident tools
							</h2>
							<p className="mt-4 text-[15px] leading-relaxed text-[var(--black-alpha-64)]">
								Ticketing tools were too slow for daily fires. Enterprise incident platforms were built for rare catastrophic outages, not the constant stream of broken demos and blocked onboarding.
							</p>
							<p className="mt-3 text-[15px] leading-relaxed text-[var(--black-alpha-64)]">Fire handles the 90% of daily issues that never reach PagerDuty — coordination, tracking, knowledge routing, without the process overhead.</p>
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
