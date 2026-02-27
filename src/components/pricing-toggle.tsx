"use client";

export function PricingToggle({ active, onChange }: { active: boolean; onChange: (active: boolean) => void }) {
	return (
		<button type="button" className="fc-discount-toggle" onClick={() => onChange(!active)} role="switch" aria-checked={active}>
			<span className="fc-discount-toggle-track" data-active={active ? "" : undefined}>
				<span className="fc-discount-toggle-thumb" />
			</span>
			<span className="fc-discount-toggle-label">Startup discount</span>
			<span className="fc-discount-badge">&minus;50%</span>
		</button>
	);
}
