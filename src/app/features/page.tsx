import Link from "next/link";
import { bookingUrl, demoUrl } from "@/lib/site";
import { solutions } from "@/lib/solutions";

const included = [
	"Slack command and incident thread automation",
	"Service-based routing and escalation rules",
	"AI suggestions for triage and status updates",
	"Automatic incident timeline capture",
	"Post-incident summary draft generation",
];

export default function FeaturesPage() {
	return (
		<div className="mx-auto w-full max-w-5xl px-6 pb-24 pt-12 md:pt-16">
			<section className="max-w-3xl">
				<p className="minimal-eyebrow reveal">Solutions</p>
				<h1 className="reveal-delay-1 mt-3 text-5xl leading-[1.05] font-semibold tracking-tight text-[#0f172a] sm:text-6xl">
					Choose a solution and explore the workflow in detail
				</h1>
				<p className="reveal-delay-2 mt-5 text-lg leading-relaxed text-[#64748b]">
					Each solution has its own page with concrete examples, timeline visuals, and expected outcomes.
				</p>
			</section>

			<section className="minimal-section">
				<div className="divide-y divide-[#e2e8f0] border-y border-[#e2e8f0]">
					{solutions.map((solution) => (
						<article key={solution.slug} className="grid gap-4 py-5 md:grid-cols-[1fr_auto] md:items-end">
							<div>
								<p className="minimal-eyebrow">{solution.menuLabel}</p>
								<h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0f172a]">{solution.headline}</h2>
								<p className="mt-2 text-sm leading-relaxed text-[#64748b]">{solution.shortDescription}</p>
								<p className="mt-2 text-sm text-[#334155]">{solution.outcome}</p>
							</div>
							<Link href={`/solutions/${solution.slug}`} className="btn-secondary h-fit">
								Open solution page
							</Link>
						</article>
					))}
				</div>
			</section>

			<section className="minimal-section grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
				<div>
					<p className="minimal-eyebrow">Included</p>
					<h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight text-[#0f172a]">What teams use in the first week</h2>
				</div>
				<ul className="divide-y divide-[#e2e8f0] border-y border-[#e2e8f0]">
					{included.map((entry) => (
						<li key={entry} className="py-3 text-sm text-[#334155]">
							{entry}
						</li>
					))}
				</ul>
			</section>

			<section className="minimal-section">
				<div className="minimal-panel p-6 md:p-8">
					<p className="minimal-eyebrow">Next Step</p>
					<h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight text-[#0f172a]">See Fire with your own workflow examples</h2>
					<div className="mt-6 flex flex-wrap gap-3">
						<a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
							Explore Demo
						</a>
						<a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
							Book your setup call
						</a>
						<Link href="/about" className="btn-secondary">
							About Fire
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
