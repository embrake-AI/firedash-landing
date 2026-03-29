import Link from "next/link";
import type { ReactNode } from "react";
import { FirecrawlFireDecoration } from "@/components/firecrawl-fire-decoration";
import { AnimatedMicroflow } from "@/components/animated-microflow";
import { ScrollReveal } from "@/components/scroll-reveal";
import { BentoSlackMockup, BentoAiMockup, BentoStatusMockup } from "@/components/product-mockups";
import { PricingSection } from "@/components/pricing-section";
import { bookingUrl, demoUrl } from "@/lib/site";

/* ── Data ── */

const functionality = [
	{
		title: "Slack triage",
		description: "Assign, escalate, and track fires without leaving Slack. No extra dashboards, no context switching.",
		href: "/solutions/slack-triage",
	},
	{
		title: "AI guidance",
		description: "An AI agent that suggests next steps based on context. Guides any engineer to resolution — never acts on its own.",
		href: "/solutions/ai-guidance",
	},
	{
		title: "Status pages",
		description: "Keep customers informed directly from the Slack thread — no copy-paste, no parallel workflows.",
		href: "/solutions/status-pages",
	},
] as const;

const faq = [
	{
		q: "What do we pay for?",
		a: "Only responders in active rotations. Viewers, stakeholders, and status pages are all included at no extra cost.",
	},
	{
		q: "What if we don't use Slack?",
		a: "Fire is built around Slack. If your team doesn't use it, Fire isn't the right fit today. Contact us to see if we can implement a similar solution for your team.",
	},
	{
		q: "Does the AI take actions automatically?",
		a: "No. The AI suggests next steps based on context, but every action is taken by a human. It guides — it doesn't override.",
	},
	{
		q: "We already use PagerDuty / Opsgenie — why do we need Fire?",
		a: "Those tools handle critical alerts and paging. Fire handles the 90% of daily issues that never reach them — broken demos, blocked onboarding, 'hey, this is broken' moments that live in Slack. Most teams use Fire alongside their existing alerting stack.",
	},
	{
		q: "We just use a Slack channel for this stuff.",
		a: "That works great until you split into teams or grow past ~8 engineers. Then coordination breaks, things slip through, and the same people get pinged for everything. Fire adds structure without adding process.",
	},
	{
		q: "How long does setup take?",
		a: "Most teams are live after one focused session. There's no migration — Fire layers onto your existing Slack workspace.",
	},
] as const;

/* ── Helpers ── */

const TOTAL = "04";

function SectionHead({ index, label, title, description }: { index: string; label: string; title: ReactNode; description: string }) {
	return (
		<div className="relative z-2 w-[min(760px,calc(100%-40px))] mx-auto mb-10 text-center">
			<div className="inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--black-alpha-48)]" aria-hidden>
				<span>
					[ <span className="fc-highlight">{index}</span> / {TOTAL}]
				</span>
				<span className="text-xs leading-none">&middot;</span>
				<span>{label}</span>
			</div>
			<h2 className="fc-section-title">{title}</h2>
			<p className="mt-3.5 mx-auto max-w-[680px] text-base leading-relaxed text-[var(--black-alpha-64)]">{description}</p>
		</div>
	);
}

/* ── Page ── */

export default function Home() {
	return (
		<div className="fc-page">
			{/* ── HERO ── */}
			<section className="fc-shell fc-panel fc-hero" id="home-hero">
				<div className="fc-inner fc-center">
					<h1 className="fc-hero-title">
						Handle daily fires once
						<br />
						<span className="fc-highlight">Slack stops scaling</span>
					</h1>
					<p className="fc-hero-copy">The missing layer between Slack and incident tools. Fire handles the 90% of daily issues that no one really owns or tracks&nbsp;&mdash; so your team stays focused on shipping.</p>
					<div className="fc-cta-row">
						<a href={demoUrl} target="_blank" rel="noopener noreferrer" className="fc-btn fc-btn-primary">
							Try the demo
						</a>
						<a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="fc-btn fc-btn-secondary">
							Book a setup call
						</a>
					</div>
				</div>

				<AnimatedMicroflow className="fc-hero-microflow" />

				<div aria-hidden className="fc-hero-fire-wrap">
					<FirecrawlFireDecoration />
				</div>
			</section>

			{/* ── WHO USES FIRE ── */}
			<section className="fc-shell fc-panel fc-section" id="who-uses">
				<SectionHead
					index="01"
					label="Who Uses Fire"
					title={
						<>
							Your Slack handle worked.
							<br className="hidden lg:block" />
							Until it didn&apos;t.
						</>
					}
					description="Fire is built for CTOs, Heads of Engineering, and founding engineers leading teams of 8–25 engineers through daily customer-driven fire drills."
				/>

				<div className="fc-inner max-w-[560px] mx-auto">
					<ul className="list-none p-0 m-0 flex flex-col gap-4">
						{[
							{ who: "CTOs & Heads of Engineering", what: "Stop routing every issue manually. Fire assigns, tracks, and retains context so you don\u2019t have to." },
							{ who: "Tech leads & founding engineers", what: "You shouldn\u2019t be the one everyone pings when something breaks." },
							{ who: "Growing product teams", what: "Keep the team shipping while customer issues still get a clear owner, timeline, and resolution path." },
						].map((item) => (
							<li key={item.who} className="flex items-baseline gap-3 text-[15px] leading-relaxed text-[var(--black-alpha-72)]">
								<span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[var(--heat-100)]" />
								<span>
									<strong className="text-[var(--accent-black)]">{item.who}</strong> &mdash; {item.what}
								</span>
							</li>
						))}
					</ul>

					<div className="mt-8 pt-7 border-t border-[var(--border-faint)]">
						<p className="m-0 text-sm leading-relaxed text-[var(--black-alpha-48)]">
							Most teams are live within an hour of installing the Slack app. No migration, no training sessions &mdash; Fire layers onto your existing workspace.
						</p>
					</div>
				</div>
			</section>

			{/* ── FUNCTIONALITY ── */}
			<section className="fc-shell fc-panel fc-section" id="functionality">
				<SectionHead
					index="02"
					label="Functionality"
					title={
						<>
							One surface for
							<br className="hidden lg:block" />
							every daily fire.
						</>
					}
					description="Triage in Slack, get AI guidance, and keep customers informed — all from one thread."
				/>

				<div className="fc-inner">
					<ScrollReveal className="bento-grid">
						{/* Wide card — Slack triage */}
						<article className="bento-card bento-card-wide">
							<div className="p-7 max-sm:p-5 flex flex-col">
								<h3 className="m-0 text-xl font-semibold leading-tight">{functionality[0].title}</h3>
								<p className="mt-2 text-sm leading-relaxed text-[var(--black-alpha-64)] flex-1">{functionality[0].description}</p>
								<Link
									href={functionality[0].href}
									className="inline-flex items-center gap-1 mt-4 text-[13px] font-semibold text-[var(--heat-100)] hover:text-[#e44d0e] transition-colors"
								>
									Learn more &rarr;
								</Link>
							</div>
							<div className="p-4 bg-black/[0.02] border-t border-[var(--border-faint)] flex flex-col justify-center bento-wide-visual">
								<BentoSlackMockup />
							</div>
						</article>

						{/* AI SRE */}
						<article className="bento-card">
							<div className="p-7 max-sm:p-5 flex flex-col">
								<h3 className="m-0 text-xl font-semibold leading-tight">{functionality[1].title}</h3>
								<p className="mt-2 text-sm leading-relaxed text-[var(--black-alpha-64)] flex-1">{functionality[1].description}</p>
								<Link
									href={functionality[1].href}
									className="inline-flex items-center gap-1 mt-4 text-[13px] font-semibold text-[var(--heat-100)] hover:text-[#e44d0e] transition-colors"
								>
									Learn more &rarr;
								</Link>
							</div>
							<div className="p-4 bg-black/[0.02] border-t border-[var(--border-faint)] flex flex-col justify-center">
								<BentoAiMockup />
							</div>
						</article>

						{/* Status pages */}
						<article className="bento-card">
							<div className="p-7 max-sm:p-5 flex flex-col">
								<h3 className="m-0 text-xl font-semibold leading-tight">{functionality[2].title}</h3>
								<p className="mt-2 text-sm leading-relaxed text-[var(--black-alpha-64)] flex-1">{functionality[2].description}</p>
								<Link
									href={functionality[2].href}
									className="inline-flex items-center gap-1 mt-4 text-[13px] font-semibold text-[var(--heat-100)] hover:text-[#e44d0e] transition-colors"
								>
									Learn more &rarr;
								</Link>
							</div>
							<div className="p-4 bg-black/[0.02] border-t border-[var(--border-faint)] flex flex-col justify-center">
								<BentoStatusMockup />
							</div>
						</article>
					</ScrollReveal>
				</div>
			</section>

			{/* ── PRICING ── */}
			<section className="fc-shell fc-panel fc-section" id="pricing">
				<SectionHead
					index="03"
					label="Pricing"
					title={
						<>
							One plan.
							<br className="hidden lg:block" />
							No surprises.
						</>
					}
					description="Pay only for responders in active rotations. Everyone else is free."
				/>

				<div className="fc-inner">
					<PricingSection />

					<div className="fc-cta-row mt-10">
						<a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="fc-btn fc-btn-primary">
							Book setup call
						</a>
						<a href={demoUrl} target="_blank" rel="noopener noreferrer" className="fc-btn fc-btn-secondary">
							Try the demo
						</a>
					</div>
				</div>
			</section>

			{/* ── FAQ ── */}
			<section className="fc-shell fc-panel fc-section" id="faq">
				<SectionHead
					index="04"
					label="FAQ"
					title={
						<>
							Frequently asked
							<br className="hidden lg:block" />
							<span className="fc-highlight">questions</span>
						</>
					}
					description="Common questions from teams evaluating Fire."
				/>

				<div className="fc-inner fc-faq-list">
					{faq.map((item) => (
						<details key={item.q} className="fc-faq-item">
							<summary>{item.q}</summary>
							<p>{item.a}</p>
						</details>
					))}
				</div>

				<p className="fc-inner mt-5 text-sm text-[var(--black-alpha-48)] text-center">
					Still have questions?{" "}
					<a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--heat-100)] font-semibold hover:text-[#e44d0e] transition-colors">
						Book a call
					</a>
					.
				</p>
			</section>

			{/* ── FOOTER CTA ── */}
			<section className="fc-shell fc-panel fc-panel-dark relative overflow-hidden py-20 max-sm:py-14 text-white text-center" id="cta">
				<div className="fc-inner fc-center relative z-1">
					<h2 className="m-0 text-[clamp(28px,4.2vw,44px)] font-medium leading-[1.1] tracking-tight">
						Your next fire,
						<br className="hidden lg:block" /> handled well
					</h2>
					<p className="mt-3.5 text-base leading-[1.8] text-white/56">Structure when it matters. No more Slack chaos.</p>
					<div className="fc-cta-row">
						<a href={demoUrl} target="_blank" rel="noopener noreferrer" className="fc-btn fc-btn-cta-primary">
							Try the demo
						</a>
						<a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="fc-btn fc-btn-cta-secondary">
							Book setup call
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
