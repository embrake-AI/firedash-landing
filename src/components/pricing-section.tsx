"use client";

import { PricingToggle } from "./pricing-toggle";
import { useDiscount } from "./use-discount";

const pricingIncludes = [
	{ label: "Viewer seats", value: "Free" },
	{ label: "Status pages", value: "Included" },
] as const;

export function PricingSection() {
	const [discount, setDiscount] = useDiscount();
	const price = discount ? 5 : 10;
	const note = discount ? "50% startup discount. Same features, lower barrier." : "If you don\u2019t run incidents, you don\u2019t pay.";

	return (
		<>
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
		</>
	);
}
