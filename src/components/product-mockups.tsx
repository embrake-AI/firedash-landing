/* ── Shared button styles ── */

const btnBase = "inline-flex items-center px-2.5 py-1 rounded border text-[11px] font-semibold";
const btnDefault = `${btnBase} border-[var(--border-muted)] bg-white text-[var(--accent-black)]`;
const btnApply = `${btnBase} bg-emerald-600 border-emerald-600 text-white`;

/* ── Bento: Slack Triage ── */

export function BentoSlackMockup() {
	return (
		<div className="text-xs" aria-hidden>
			{/* Slack block kit message */}
			<div className="p-3 border border-[var(--border-faint)] bg-white">
				<div className="flex items-center gap-1.5 mb-2">
					<span className="text-[13px] font-semibold text-[#1264a3] underline decoration-[#1264a3]/30">API Response Latency Degraded</span>
					<span className="text-xs leading-none">🔴</span>
				</div>
				<div className="flex gap-5 mb-2">
					<div className="flex flex-col gap-px">
						<span className="text-[11px] font-semibold text-[var(--black-alpha-48)]">Severity</span>
						<span className="text-xs font-semibold text-red-600">high</span>
					</div>
					<div className="flex flex-col gap-px">
						<span className="text-[11px] font-semibold text-[var(--black-alpha-48)]">Assignee</span>
						<span className="text-xs text-[var(--accent-black)]">@marc</span>
					</div>
					<div className="flex flex-col gap-px">
						<span className="text-[11px] font-semibold text-[var(--black-alpha-48)]">Status</span>
						<span className="text-xs text-[var(--accent-black)]">open</span>
					</div>
				</div>
				<div className="h-px bg-[var(--border-faint)] my-2" />
				<div className="flex flex-wrap gap-1.5">
					<span className={btnDefault}>Change severity ▾</span>
					<span className={btnDefault}>Assign to… ▾</span>
					<span className={btnDefault}>Update status ▾</span>
				</div>
			</div>
			{/* Thread reply */}
			<div className="mt-3 border-t border-[var(--border-faint)] pt-2.5 flex flex-col gap-1">
				<div className="flex items-center gap-1.5 text-xs text-[var(--accent-black)]">
					<span className="text-xs leading-none shrink-0">🟡</span>
					<span>
						Status changed to <strong>mitigating</strong>
					</span>
				</div>
				<div className="text-[11px] text-[var(--black-alpha-48)] pl-[22px]">Rolled back deploy, monitoring recovery</div>
				<div className="text-[10px] font-medium font-mono text-[var(--black-alpha-32)] pl-[22px] mt-0.5">#inc-api-latency-27-feb</div>
			</div>
		</div>
	);
}

/* ── Bento: AI SRE ── */

export function BentoAiMockup() {
	return (
		<div className="flex flex-col gap-2.5 text-xs" aria-hidden>
			{/* Primary suggestion */}
			<div className="p-3 border border-[var(--border-faint)] rounded-lg bg-white">
				<div className="mb-1.5">
					<span className="text-xs font-bold">🔥 suggestion</span>
				</div>
				<p className="m-0 mb-2 text-xs leading-relaxed text-[var(--black-alpha-72)]">
					Update status to <strong className="text-[var(--accent-black)]">mitigating</strong>:
					<br />
					<span className="text-[var(--black-alpha-56)]">
						&ldquo;Rolled back deploy <code className="text-[11px] bg-black/[0.04] px-0.5 rounded">a1b2c3f</code>. p99 latency returning to baseline.&rdquo;
					</span>
				</p>
				<div className="flex gap-1.5">
					<span className={btnApply}>Apply</span>
					<span className={btnDefault}>Edit</span>
				</div>
			</div>
			{/* Stacked / dimmed suggestion */}
			<div className="p-3 border border-[var(--border-faint)] rounded-lg bg-white opacity-45">
				<div className="mb-1.5">
					<span className="text-xs font-bold">🔥 suggestion</span>
				</div>
				<p className="m-0 mb-2 text-xs leading-relaxed text-[var(--black-alpha-72)]">
					Post to status page:
					<br />
					<span className="text-[var(--black-alpha-56)]">&ldquo;We are investigating increased API latency.&rdquo;</span>
					<br />
					<span className="text-[11px] text-[var(--black-alpha-48)]">api-gateway &middot; major impact</span>
				</p>
				<div className="flex gap-1.5">
					<span className={btnApply}>Apply</span>
					<span className={btnDefault}>Edit</span>
				</div>
			</div>
		</div>
	);
}

/* ── Bento: Status Pages ── */

export function BentoStatusMockup() {
	return (
		<div className="bg-white border border-[var(--border-faint)] rounded-lg overflow-hidden text-xs" aria-hidden>
			{/* Brand header */}
			<div className="flex items-center gap-2 px-3 py-2.5 border-b border-[var(--border-faint)]">
				<span className="w-2 h-2 rounded-full bg-[var(--heat-100)]" />
				<span className="text-xs font-semibold text-[var(--accent-black)]">Acme Corp</span>
			</div>
			{/* Service rows */}
			<div className="py-1">
				<div className="flex items-center gap-2 px-3 py-1.5">
					<span className="w-[7px] h-[7px] rounded-full shrink-0 bg-amber-500" />
					<span className="flex-1 text-xs font-medium">API Gateway</span>
					<span className="text-[11px] font-medium text-amber-600">Degraded</span>
				</div>
				<div className="flex items-center gap-2 px-3 py-1.5">
					<span className="w-[7px] h-[7px] rounded-full shrink-0 bg-green-500" />
					<span className="flex-1 text-xs font-medium">Dashboard</span>
					<span className="text-[11px] font-medium text-green-600">Operational</span>
				</div>
				<div className="flex items-center gap-2 px-3 py-1.5">
					<span className="w-[7px] h-[7px] rounded-full shrink-0 bg-green-500" />
					<span className="flex-1 text-xs font-medium">Webhooks</span>
					<span className="text-[11px] font-medium text-green-600">Operational</span>
				</div>
			</div>
			{/* Incident section */}
			<div className="px-3 py-2.5 border-t border-[var(--border-faint)] bg-amber-50/50">
				<div className="text-xs font-semibold mb-2">API Response Latency Degraded</div>
				<div className="flex flex-col gap-1.5">
					<div className="flex items-center gap-1.5">
						<span className="text-[11px] leading-none shrink-0">🔍</span>
						<span className="text-[11px] font-semibold text-[var(--black-alpha-56)]">investigating</span>
						<span className="text-[10px] text-[var(--black-alpha-32)] ml-auto">2:14 PM</span>
					</div>
					<div className="flex items-center gap-1.5">
						<span className="text-[11px] leading-none shrink-0">🟡</span>
						<span className="text-[11px] font-semibold text-amber-600">mitigating</span>
						<span className="text-[10px] text-[var(--black-alpha-32)] ml-auto">2:22 PM</span>
					</div>
				</div>
			</div>
		</div>
	);
}
