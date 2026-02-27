import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SolutionVisual } from "@/components/solution-visuals";
import { bookingUrl, demoUrl } from "@/lib/site";
import { getSolutionBySlug, solutions } from "@/lib/solutions";

type PageProps = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const solution = getSolutionBySlug(slug);

	if (!solution) {
		return {
			title: "Solution",
		};
	}

	return {
		title: solution.title,
		description: solution.description,
	};
}

export default async function SolutionDetailPage({ params }: PageProps) {
	const { slug } = await params;
	const solution = getSolutionBySlug(slug);

	if (!solution) {
		notFound();
	}

	const otherSolutions = solutions.filter((item) => item.slug !== solution.slug);

	return (
		<div className="fc-page">
			{/* ── HERO ── */}
			<section className="fc-shell fc-panel fc-section">
				<div className="fc-inner">
					<div className="relative z-2 w-[min(760px,calc(100%-40px))] mx-auto mb-0 text-center">
						<div className="inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--black-alpha-48)]" aria-hidden>
							<span>Solution</span>
						</div>
						<h1 className="fc-section-title reveal">{solution.headline}</h1>
						<p className="reveal-delay-1 mt-3.5 mx-auto max-w-[680px] text-base leading-relaxed text-[var(--black-alpha-64)]">{solution.description}</p>
					</div>

					<div className="fc-cta-row reveal-delay-2">
						<a href={demoUrl} target="_blank" rel="noopener noreferrer" className="fc-btn fc-btn-primary">
							Try the demo
						</a>
						<a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="fc-btn fc-btn-secondary">
							Book a setup call
						</a>
					</div>
				</div>
			</section>

			{/* ── SIGNALS ── */}
			<section className="fc-shell fc-panel fc-section">
				<div className="fc-inner">
					<div className="fc-stats-grid">
						{solution.signalCards.map((signal) => (
							<div key={signal.label} className="fc-stat-item">
								<p className="fc-stat-value">{signal.value}</p>
								<p className="fc-stat-label">{signal.label}</p>
								<p className="mt-1 text-[13px] leading-relaxed text-[var(--black-alpha-48)]">{signal.note}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── EXAMPLE INCIDENT ── */}
			<section className="fc-shell fc-panel fc-section">
				<div className="fc-inner">
					<div className="relative z-2 w-[min(760px,calc(100%-40px))] mx-auto mb-10 text-center">
						<div className="inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--black-alpha-48)]" aria-hidden>
							<span>Example</span>
						</div>
						<h2 className="mt-4 text-[clamp(24px,4vw,36px)] font-medium leading-[1.12] tracking-tight">{solution.exampleTitle}</h2>
						<p className="mt-3 mx-auto max-w-[600px] text-[15px] leading-relaxed text-[var(--black-alpha-64)]">{solution.exampleContext}</p>
					</div>

					<SolutionVisual slug={solution.slug} />
				</div>
			</section>

			{/* ── KEY POINTS ── */}
			<section className="fc-shell fc-panel fc-section">
				<div className="fc-inner">
					<div className="relative z-2 w-[min(760px,calc(100%-40px))] mx-auto mb-10 text-center">
						<div className="inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--black-alpha-48)]" aria-hidden>
							<span>What this solves</span>
						</div>
						<h2 className="mt-4 text-[clamp(24px,4vw,36px)] font-medium leading-[1.12] tracking-tight">{solution.outcome}</h2>
					</div>

					<ul className="fc-principles-list">
						{solution.keyPoints.map((point, i) => (
							<li key={point}>
								<span className="fc-principle-index">{String(i + 1).padStart(2, "0")}</span>
								<span>{point}</span>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* ── MORE SOLUTIONS ── */}
			<section className="fc-shell fc-panel fc-section">
				<div className="fc-inner">
					<div className="relative z-2 w-[min(760px,calc(100%-40px))] mx-auto mb-10 text-center">
						<div className="inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--black-alpha-48)]" aria-hidden>
							<span>Explore</span>
						</div>
						<h2 className="mt-4 text-[clamp(24px,4vw,36px)] font-medium leading-[1.12] tracking-tight">More solutions</h2>
					</div>

					<div className="border-t border-[var(--border-faint)]">
						{otherSolutions.map((item) => (
							<Link
								key={item.slug}
								href={`/solutions/${item.slug}`}
								className="flex items-center justify-between gap-4 py-[17px] border-b border-[var(--border-faint)] group transition-colors"
							>
								<div>
									<p className="m-0 text-[15px] font-semibold text-[var(--accent-black)] group-hover:text-[var(--heat-100)] transition-colors">{item.title}</p>
									<p className="m-0 mt-1 text-[13px] leading-relaxed text-[var(--black-alpha-48)]">{item.shortDescription}</p>
								</div>
								<span className="shrink-0 text-[13px] font-semibold text-[var(--black-alpha-32)] group-hover:text-[var(--heat-100)] transition-colors">&rarr;</span>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* ── FOOTER CTA ── */}
			<section className="fc-shell fc-panel fc-panel-dark relative overflow-hidden py-20 max-sm:py-14 text-white text-center">
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
