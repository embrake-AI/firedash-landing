import { bookingUrl, demoUrl } from "@/lib/site";
import { PricingPageContent } from "@/components/pricing-page-content";
import type { ReactNode } from "react";

/* ── Data ── */

const faq = [
	{
		q: "What counts as a paid seat?",
		a: "A paid seat is a person included in active incident rotations.",
	},
	{
		q: "Are viewers free?",
		a: "Yes. View-only users, leadership stakeholders, support viewers, and billing contacts are free.",
	},
	{
		q: "Are status pages included?",
		a: "Yes. Status pages are included at no additional cost.",
	},
	{
		q: "Do you offer a free trial?",
		a: "No. We run a guided setup call so teams see value quickly with their own workflow.",
	},
];

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

export default function PricingPage() {
	return (
		<div className="fc-page">
			{/* ── HERO ── */}
			<section className="fc-shell fc-panel fc-hero" id="pricing-hero">
				<div className="fc-inner fc-center">
					<h1 className="fc-hero-title">
						Pay for <span className="fc-highlight">responders</span>,
						<br />
						not headcount
					</h1>
					<p className="fc-hero-copy">Starting at &euro;5 per responder seat per month. Viewers are free. Status pages are included.</p>
					<div className="fc-cta-row">
						<a href={demoUrl} target="_blank" rel="noopener noreferrer" className="fc-btn fc-btn-primary">
							Try the demo
						</a>
						<a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="fc-btn fc-btn-secondary">
							Book a setup call
						</a>
					</div>
				</div>
			</section>

			<PricingPageContent />

			{/* ── FAQ ── */}
			<section className="fc-shell fc-panel fc-section" id="pricing-faq">
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
					description="Common questions about Fire pricing."
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
			<section className="fc-shell fc-panel fc-panel-dark relative overflow-hidden py-20 max-sm:py-14 text-white text-center" id="pricing-cta">
				<div className="fc-inner fc-center relative z-1">
					<h2 className="m-0 text-[clamp(28px,4.2vw,44px)] font-medium leading-[1.1] tracking-tight">
						Your next incident,
						<br className="hidden lg:block" /> handled well
					</h2>
					<p className="mt-3.5 text-base leading-[1.8] text-white/56">Structure when it matters. Clarity from the first message.</p>
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
