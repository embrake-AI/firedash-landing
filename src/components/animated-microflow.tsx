"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedMicroflow({ className }: { className?: string }) {
	const ref = useRef<HTMLDivElement>(null);
	const [step, setStep] = useState(0);
	const ran = useRef(false);

	useEffect(() => {
		const el = ref.current;
		if (!el || ran.current) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !ran.current) {
					ran.current = true;
					const delays = [200, 500, 800, 1100, 1400];
					const timers = delays.map((d, i) => setTimeout(() => setStep(i + 1), d));
					observer.disconnect();
					return () => timers.forEach(clearTimeout);
				}
			},
			{ threshold: 0.3 },
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	const visible = (n: number) => (step >= n ? "microflow-in" : "");

	const card = "bg-white border-[var(--border-faint)] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)]";
	const btn = "border-[var(--border-muted)] bg-white text-[var(--accent-black)]";

	return (
		<div ref={ref} className={`microflow ${className ?? ""}`} aria-hidden>
			{/* Panel 1: Slack message block */}
			<div className={`microflow-panel ${visible(1)}`}>
				<div className="text-[10px] font-semibold uppercase tracking-widest mb-1.5 text-[var(--black-alpha-48)]">Slack</div>
				<div className={`flex flex-col gap-1.5 border border-[var(--border-faint)] p-3 text-xs min-w-[200px] ${card}`}>
					<span className="text-xs font-semibold text-[#1264a3] underline decoration-[#1264a3]/30">API Response Latency Degraded</span>
					<div className="flex gap-4">
						<div className="flex flex-col gap-px">
							<span className="text-[10px] font-semibold text-[var(--black-alpha-48)]">Severity</span>
							<span className="text-[11px] font-semibold text-red-600">high</span>
						</div>
						<div className="flex flex-col gap-px">
							<span className="text-[10px] font-semibold text-[var(--black-alpha-48)]">Assignee</span>
							<span className="text-[11px] text-[var(--accent-black)]">@marc</span>
						</div>
					</div>
					<div className="flex flex-wrap gap-1 mt-0.5">
						<span className={`inline-flex items-center px-2 py-0.5 rounded border text-[10px] font-medium ${btn}`}>Change severity ▾</span>
						<span className={`inline-flex items-center px-2 py-0.5 rounded border text-[10px] font-medium ${btn}`}>Assign to… ▾</span>
						<span className={`inline-flex items-center px-2 py-0.5 rounded border text-[10px] font-medium ${btn}`}>Update status ▾</span>
					</div>
				</div>
			</div>

			<div className={`microflow-arrow ${visible(2)} text-[var(--black-alpha-24)] shrink-0`}>
				<svg width="24" height="12" viewBox="0 0 24 12" fill="none">
					<path d="M0 6h18m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" />
				</svg>
			</div>

			{/* Panel 2: AI SRE suggestion */}
			<div className={`microflow-panel ${visible(3)}`}>
				<div className="text-[10px] font-semibold uppercase tracking-widest mb-1.5 text-[var(--black-alpha-48)]">AI SRE</div>
				<div className={`flex flex-col gap-1.5 border border-[var(--border-faint)] p-3 text-xs min-w-[200px] ${card}`}>
					<span className="text-xs font-bold">🔥 suggestion</span>
					<p className="m-0 text-[11px] leading-snug text-[var(--black-alpha-64)]">
						Update status to <strong className="text-[var(--accent-black)]">mitigating</strong> — &ldquo;Rolled back deploy abc123. Latency returning to baseline.&rdquo;
					</p>
					<div className="flex flex-wrap gap-1 mt-0.5">
						<span className="inline-flex items-center px-2 py-0.5 rounded border text-[10px] font-medium bg-emerald-600 border-emerald-600 text-white">Apply</span>
						<span className={`inline-flex items-center px-2 py-0.5 rounded border text-[10px] font-medium ${btn}`}>Edit</span>
					</div>
				</div>
			</div>

			<div className={`microflow-arrow ${visible(4)} text-[var(--black-alpha-24)] shrink-0`}>
				<svg width="24" height="12" viewBox="0 0 24 12" fill="none">
					<path d="M0 6h18m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" />
				</svg>
			</div>

			{/* Panel 3: Status Page */}
			<div className={`microflow-panel ${visible(5)}`}>
				<div className="text-[10px] font-semibold uppercase tracking-widest mb-1.5 text-[var(--black-alpha-48)]">Status Page</div>
				<div className={`flex flex-col gap-1.5 border border-[var(--border-faint)] p-3 text-xs min-w-[200px] ${card}`}>
					<div className="text-[10px] font-semibold font-mono pb-1 border-b mb-0.5 text-[var(--black-alpha-48)] border-[var(--border-faint)]">status.acme.com</div>
					<div className="flex flex-col gap-0.5">
						<div className="flex items-center gap-1.5 text-[11px] font-medium">
							<span className="w-1.5 h-1.5 rounded-full shrink-0 bg-amber-500" />
							<span>API Gateway</span>
						</div>
						<div className="flex items-center gap-1.5 text-[11px] font-medium">
							<span className="w-1.5 h-1.5 rounded-full shrink-0 bg-green-500" />
							<span>Dashboard</span>
						</div>
						<div className="flex items-center gap-1.5 text-[11px] font-medium">
							<span className="w-1.5 h-1.5 rounded-full shrink-0 bg-green-500" />
							<span>Webhooks</span>
						</div>
					</div>
					<div className="mt-1 pt-1 border-t text-[10px] text-[var(--black-alpha-64)] border-[var(--border-faint)]">🟡 mitigating</div>
				</div>
			</div>
		</div>
	);
}
