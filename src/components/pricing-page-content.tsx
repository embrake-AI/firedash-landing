"use client";

import { type ReactNode } from "react";
import { PricingToggle } from "./pricing-toggle";
import { useDiscount } from "./use-discount";

/* ── Data ── */

const pricingIncludes = [
	{ label: "Viewer seats", value: "Free" },
	{ label: "Status pages", value: "Included" },
] as const;

const includedFeatures = [
	"Slack-native incident declaration and tracking",
	"Routing, escalation, and ownership automation",
	"AI suggestions for triage and incident updates",
	"Incident timeline and recap generation",
	"Public status pages at no extra cost",
	"Guided onboarding setup session",
];

const paidSeatDefinition = ["Engineers included in on-call rotations", "Responders in escalation policies", "People actively handling incidents"];

const freeAccessDefinition = ["View-only users and stakeholders", "Support and leadership viewers", "Billing contacts and admins not in rotation", "People reading status pages"];

const seatCounts = [6, 9, 12];
const teamSizes = [20, 34, 50];

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

/* ── Component ── */

export function PricingPageContent() {
	const [discount, setDiscount] = useDiscount();
	const price = discount ? 5 : 10;
	const note = discount ? "50% startup discount. Same features, lower barrier." : "If you don\u2019t run incidents, you don\u2019t pay.";

	const scenarios = seatCounts.map((seats, i) => ({
		team: `${teamSizes[i]} team members`,
		rotation: `${seats} in active rotations`,
		billable: `${seats} paid seats`,
		total: `€${seats * price} / month`,
	}));

	return (
		<>
			{/* ── PLAN DETAILS ── */}
			<section className="fc-shell fc-panel fc-section" id="plan">
				<SectionHead
					index="01"
					label="Plan"
					title={
						<>
							One plan.
							<br className="hidden lg:block" />
							No surprises.
						</>
					}
					description="Everything included. Pay only for responders in active rotations."
				/>

				<div className="fc-inner">
					<div className="flex justify-center mb-6">
						<PricingToggle active={discount} onChange={setDiscount} />
					</div>
					<div className="fc-pricing-grid">
						<div className="fc-price-card rounded-xl">
							<p className="fc-price-label">Per responder seat</p>
							<p className="fc-price-value">
								<span className="text-[var(--heat-100)]">&euro;{price}</span>
								<span className="text-[22px] font-normal tracking-normal text-[var(--black-alpha-48)]"> / month</span>
							</p>
							<p className="fc-price-note">{note}</p>
						</div>

						<div className="fc-pricing-rows">
							{pricingIncludes.map((item) => (
								<div key={item.label} className="fc-pricing-row">
									<span>{item.label}</span>
									<strong>{item.value}</strong>
								</div>
							))}
						</div>
					</div>

					<div className="mt-10 border-t border-[var(--border-faint)]">
						<ul className="list-none p-0 m-0">
							{includedFeatures.map((item) => (
								<li key={item} className="flex items-baseline gap-3 py-3 border-b border-[var(--border-faint)] text-[15px] leading-relaxed text-[var(--black-alpha-72)]">
									<span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[var(--heat-100)]" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* ── PAID vs FREE SEATS ── */}
			<section className="fc-shell fc-panel fc-section" id="seats">
				<SectionHead
					index="02"
					label="Seat Types"
					title={
						<>
							Paid seats vs
							<br className="hidden lg:block" />
							<span className="fc-highlight">free</span> access
						</>
					}
					description="Only responders in active rotations count as paid seats. Everyone else is free."
				/>

				<div className="fc-inner">
					<div className="grid gap-0 md:grid-cols-2 border border-[var(--border-faint)] rounded-xl overflow-hidden">
						<div className="p-7 bg-[var(--background-lighter)]">
							<p className="m-0 font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--black-alpha-48)]">Paid Seats</p>
							<h3 className="mt-3 m-0 text-xl font-medium tracking-tight text-[var(--accent-black)]">Who is billable</h3>
							<ul className="mt-5 list-none p-0 m-0 flex flex-col gap-3">
								{paidSeatDefinition.map((item) => (
									<li key={item} className="flex items-baseline gap-3 text-[14px] leading-relaxed text-[var(--black-alpha-72)]">
										<span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[var(--accent-black)]" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
						<div className="p-7 border-t md:border-t-0 md:border-l border-[var(--border-faint)]">
							<p className="m-0 font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--black-alpha-48)]">Free Access</p>
							<h3 className="mt-3 m-0 text-xl font-medium tracking-tight text-[var(--accent-black)]">Who is not billable</h3>
							<ul className="mt-5 list-none p-0 m-0 flex flex-col gap-3">
								{freeAccessDefinition.map((item) => (
									<li key={item} className="flex items-baseline gap-3 text-[14px] leading-relaxed text-[var(--black-alpha-72)]">
										<span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[var(--black-alpha-24)]" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* ── EXAMPLE BILLING ── */}
			<section className="fc-shell fc-panel fc-section" id="examples">
				<SectionHead
					index="03"
					label="Examples"
					title={
						<>
							See what
							<br className="hidden lg:block" />
							you&apos;d pay
						</>
					}
					description="Most of your team gets free access. You only pay for responders."
				/>

				<div className="fc-inner">
					<div className="flex justify-center mb-6">
						<PricingToggle active={discount} onChange={setDiscount} />
					</div>
					<div className="border-t border-[var(--border-faint)]">
						{scenarios.map((scenario) => (
							<div key={scenario.team} className="grid gap-2 py-4 border-b border-[var(--border-faint)] text-sm md:grid-cols-4 md:items-center">
								<p className="m-0 text-[var(--black-alpha-72)]">{scenario.team}</p>
								<p className="m-0 text-[var(--black-alpha-72)]">{scenario.rotation}</p>
								<p className="m-0 font-semibold text-[var(--accent-black)]">{scenario.billable}</p>
								<p className="m-0 font-semibold text-[var(--accent-black)]">{scenario.total}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
