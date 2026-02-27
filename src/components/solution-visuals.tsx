import { statusPageUrl } from "@/lib/site";

/* ── Shared button styles (mirrored from product-mockups.tsx) ── */

const btnBase = "inline-flex items-center px-2.5 py-1 rounded-sm border text-[11px] font-semibold";
const btnDefault = `${btnBase} border-[var(--border-muted)] bg-white text-[var(--accent-black)]`;
const btnApply = `${btnBase} bg-emerald-600 border-emerald-600 text-white`;

/* ── Helpers ── */

function SlackAvatar({ emoji, bg }: { emoji: string; bg: string }) {
	return (
		<span className={`flex items-center justify-center w-8 h-8 rounded-sm ${bg} text-sm shrink-0`} aria-hidden>
			{emoji}
		</span>
	);
}

function SlackMessage({ name, time, avatar, children }: { name: string; time: string; avatar: React.ReactNode; children: React.ReactNode }) {
	return (
		<div className="flex gap-2.5">
			{avatar}
			<div className="flex-1 min-w-0">
				<div className="flex items-baseline gap-2">
					<span className="text-[13px] font-bold text-[var(--accent-black)]">{name}</span>
					<span className="text-[11px] text-[var(--black-alpha-32)]">{time}</span>
				</div>
				<div className="mt-0.5">{children}</div>
			</div>
		</div>
	);
}

/* ── Slack Triage Visual ── */

export function SlackTriageVisual() {
	return (
		<div className="mx-auto max-w-[520px]" aria-hidden>
			<div className="rounded-md border border-[var(--border-faint)] bg-[var(--background-lighter)] shadow-sm overflow-hidden">
				{/* Channel header */}
				<div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--border-faint)] bg-white">
					<span className="text-[13px] font-bold text-[var(--accent-black)]"># eng-support</span>
				</div>

				<div className="flex flex-col gap-4 p-4 text-sm text-[var(--black-alpha-72)]">
					{/* User message */}
					<SlackMessage name="Sarah" time="2:11 PM" avatar={<SlackAvatar emoji="👩‍💻" bg="bg-purple-100" />}>
						<p className="m-0 text-sm leading-relaxed">
							<span className="font-semibold text-[#1264a3]">@fire</span> Database connection timeouts in EU region
						</p>
					</SlackMessage>

					{/* Fire response */}
					<SlackMessage name="Fire" time="2:11 PM" avatar={<SlackAvatar emoji="🔥" bg="bg-orange-100" />}>
						<p className="m-0 text-sm leading-relaxed mb-2.5">
							Created <span className="font-semibold text-[#1264a3]">#inc-db-timeouts-eu</span>
						</p>
						{/* Block Kit card */}
						<div className="p-3 border border-[var(--border-faint)] border-l-[3px] border-l-[var(--heat-100)] rounded-md bg-white">
							<div className="flex items-center gap-1.5 mb-2">
								<span className="text-[13px] font-semibold text-[#1264a3] underline decoration-[#1264a3]/30">DB Connection Timeouts — EU</span>
								<span className="text-xs leading-none">🔴</span>
							</div>
							<div className="flex gap-5 mb-2">
								<div className="flex flex-col gap-px">
									<span className="text-[11px] font-semibold text-[var(--black-alpha-48)]">Severity</span>
									<span className="text-xs font-semibold text-red-600">high</span>
								</div>
								<div className="flex flex-col gap-px">
									<span className="text-[11px] font-semibold text-[var(--black-alpha-48)]">Owner</span>
									<span className="text-xs text-[var(--accent-black)]">@sarah</span>
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
					</SlackMessage>

					{/* Thread replies */}
					<div className="border-t border-[var(--border-faint)] pt-3 flex flex-col gap-2">
						<div className="text-[11px] font-semibold text-[var(--black-alpha-48)] mb-1">Thread</div>
						<div className="flex items-center gap-1.5 text-xs text-[var(--accent-black)]">
							<span className="text-xs leading-none shrink-0">🟡</span>
							<span>
								Status changed to <strong>mitigating</strong>
							</span>
							<span className="text-[10px] text-[var(--black-alpha-32)] ml-auto">2:24 PM</span>
						</div>
						<div className="text-[11px] text-[var(--black-alpha-48)] pl-[22px]">Failing over to secondary read replica</div>
						<div className="flex items-center gap-1.5 text-xs text-[var(--accent-black)]">
							<span className="text-xs leading-none shrink-0">🟢</span>
							<span>
								Status changed to <strong>resolved</strong>
							</span>
							<span className="text-[10px] text-[var(--black-alpha-32)] ml-auto">2:41 PM</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

/* ── AI SRE Visual ── */

export function AiSreVisual() {
	return (
		<div className="mx-auto max-w-[520px]" aria-hidden>
			<div className="rounded-md border border-[var(--border-faint)] bg-[var(--background-lighter)] shadow-sm overflow-hidden">
				{/* Channel header */}
				<div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--border-faint)] bg-white">
					<span className="text-[13px] font-bold text-[var(--accent-black)]"># inc-api-latency</span>
				</div>

				<div className="flex flex-col gap-4 p-4 text-sm text-[var(--black-alpha-72)]">
					{/* Engineer context */}
					<SlackMessage name="Marc" time="11:06 AM" avatar={<SlackAvatar emoji="👨‍💻" bg="bg-blue-100" />}>
						<p className="m-0 text-sm leading-relaxed">p99 latency doubled after the 11:00 deploy. Seeing 800ms+ on /api/orders.</p>
					</SlackMessage>

					{/* AI suggestion 1 — route to team */}
					<SlackMessage name="Fire" time="11:07 AM" avatar={<SlackAvatar emoji="🔥" bg="bg-orange-100" />}>
						<div className="p-3 border border-[var(--border-faint)] border-l-[3px] border-l-[var(--heat-100)] rounded-md bg-white">
							<div className="mb-1.5">
								<span className="text-xs font-bold">🔥 suggestion</span>
							</div>
							<p className="m-0 mb-2 text-xs leading-relaxed text-[var(--black-alpha-72)]">
								Route to <strong className="text-[var(--accent-black)]">@platform-team</strong>:
								<br />
								<span className="text-[var(--black-alpha-56)]">
									&ldquo;Latency spike correlates with deploy <code className="text-[11px] bg-black/[0.04] px-0.5 rounded">a1b2c3f</code>. Platform team owns the orders
									service.&rdquo;
								</span>
							</p>
							<div className="flex gap-1.5">
								<span className={btnApply}>Apply</span>
								<span className={btnDefault}>Edit</span>
							</div>
						</div>
					</SlackMessage>

					{/* User asks a question */}
					<SlackMessage name="Marc" time="11:12 AM" avatar={<SlackAvatar emoji="👨‍💻" bg="bg-blue-100" />}>
						<p className="m-0 text-sm leading-relaxed">
							<span className="font-semibold text-[#1264a3]">@fire</span> what changed in that deploy?
						</p>
					</SlackMessage>

					{/* AI answers */}
					<SlackMessage name="Fire" time="11:12 AM" avatar={<SlackAvatar emoji="🔥" bg="bg-orange-100" />}>
						<p className="m-0 text-sm leading-relaxed">
							Deploy <code className="text-[12px] bg-black/[0.04] px-0.5 rounded">a1b2c3f</code> added a new index on{" "}
							<code className="text-[12px] bg-black/[0.04] px-0.5 rounded">orders.updated_at</code>. The migration ran at 11:01 and locked the table for ~90s.
						</p>
					</SlackMessage>

					{/* AI suggestion 2 — status update */}
					<SlackMessage name="Fire" time="11:18 AM" avatar={<SlackAvatar emoji="🔥" bg="bg-orange-100" />}>
						<div className="p-3 border border-[var(--border-faint)] border-l-[3px] border-l-[var(--heat-100)] rounded-md bg-white">
							<div className="mb-1.5">
								<span className="text-xs font-bold">🔥 suggestion</span>
							</div>
							<p className="m-0 mb-2 text-xs leading-relaxed text-[var(--black-alpha-72)]">
								Update status to <strong className="text-[var(--accent-black)]">mitigating</strong>:
								<br />
								<span className="text-[var(--black-alpha-56)]">&ldquo;Migration lock released. p99 latency trending back to baseline.&rdquo;</span>
							</p>
							<div className="flex gap-1.5">
								<span className={btnApply}>Apply</span>
								<span className={btnDefault}>Edit</span>
							</div>
						</div>
					</SlackMessage>
				</div>
			</div>
		</div>
	);
}

/* ── Uptime bar helpers ── */

function UptimeBars({ pattern }: { pattern: ("green" | "yellow" | "orange" | "red" | "gray")[] }) {
	const colorMap = {
		green: "bg-emerald-500",
		yellow: "bg-yellow-500",
		orange: "bg-orange-500",
		red: "bg-red-500",
		gray: "bg-slate-200",
	};
	return (
		<div className="flex gap-0.5 mt-2">
			{pattern.map((color, i) => (
				<div key={i} className={`flex-1 h-4 rounded-[3px] ${colorMap[color]}`} style={{ minWidth: 3 }} />
			))}
		</div>
	);
}

/** Generate a mostly-green bar pattern with optional incidents at specific positions */
function makeUptimeBars(incidents?: { pos: number; color: "yellow" | "orange" | "red" }[]): ("green" | "yellow" | "orange" | "red" | "gray")[] {
	const bars: ("green" | "yellow" | "orange" | "red" | "gray")[] = Array(30).fill("green");
	if (incidents) {
		for (const inc of incidents) {
			if (inc.pos >= 0 && inc.pos < bars.length) bars[inc.pos] = inc.color;
		}
	}
	return bars;
}

/* ── Status Page Visual ── */

export function StatusPageVisual() {
	return (
		<div className="mx-auto max-w-[520px]" aria-hidden>
			{/* Outer frame mimicking the real page's bg-gradient */}
			<div className="rounded-md border border-slate-200 bg-gradient-to-b from-slate-50 to-white shadow-sm overflow-hidden">
				{/* Header — matches real: logo + name + subscribe button */}
				<div className="flex items-center justify-between px-5 py-4">
					<div className="flex items-center gap-3">
						<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 flex items-center justify-center">
							<svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
						</div>
						<span className="text-base font-semibold text-slate-900">Acme Corp</span>
					</div>
					<span className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-md">Subscribe to updates</span>
				</div>

				<div className="px-5 pb-5">
					{/* Active incident banner — matches real: orange dot + "Active Incidents" */}
					<div className="mb-5">
						<div className="flex items-center gap-2 mb-2.5">
							<div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
							<span className="text-sm font-medium text-slate-700">Active Incidents</span>
						</div>
						<div className="rounded-md border border-orange-200 bg-orange-50 p-4">
							<div className="flex items-start justify-between gap-3">
								<div className="flex-1 min-w-0">
									<div className="text-sm font-medium text-slate-900">API Response Latency Degraded</div>
									<div className="text-xs text-slate-500 mt-1">Started 8 minutes ago</div>
									<div className="text-xs text-slate-500 mt-2">
										<span className="font-medium text-orange-700">Mitigating:</span>
										<span className="text-slate-400 ml-1">6 minutes ago</span>
									</div>
									<div className="text-xs text-slate-400 mt-1">Rolled back deploy. Latency returning to normal.</div>
								</div>
								<div className="flex flex-col items-end gap-2 shrink-0">
									<div className="flex items-center gap-1.5">
										<div className="w-2 h-2 rounded-full bg-orange-500" />
										<span className="text-xs text-orange-700">Partial Outage</span>
									</div>
									<span className="text-xs text-slate-400 bg-white/60 px-1.5 py-0.5 rounded">API Gateway</span>
								</div>
							</div>
						</div>
					</div>

					{/* Services — matches real: rounded-md cards with uptime bars */}
					<div className="space-y-3">
						{[
							{
								name: "API Gateway",
								status: "Degraded Performance",
								dotColor: "bg-yellow-500",
								textColor: "text-yellow-700",
								uptime: "99.82%",
								bars: makeUptimeBars([
									{ pos: 28, color: "yellow" },
									{ pos: 29, color: "orange" },
								]),
							},
							{
								name: "Dashboard",
								status: "Operational",
								dotColor: "bg-emerald-500",
								textColor: "text-emerald-700",
								uptime: "100%",
								bars: makeUptimeBars(),
							},
							{
								name: "Webhooks",
								status: "Operational",
								dotColor: "bg-emerald-500",
								textColor: "text-emerald-700",
								uptime: "99.97%",
								bars: makeUptimeBars([{ pos: 24, color: "yellow" }]),
							},
							{
								name: "Auth Service",
								status: "Operational",
								dotColor: "bg-emerald-500",
								textColor: "text-emerald-700",
								uptime: "100%",
								bars: makeUptimeBars(),
							},
						].map((svc) => (
							<div key={svc.name} className="rounded-md border border-slate-200 bg-white p-4">
								<div className="flex items-center justify-between">
									<span className="text-sm font-medium text-slate-900">{svc.name}</span>
									<div className="flex items-center gap-2">
										<span className="text-xs text-slate-400">{svc.uptime} uptime</span>
										<div className="flex items-center gap-1.5">
											<div className={`w-2 h-2 rounded-full ${svc.dotColor}`} />
											<span className={`text-xs ${svc.textColor}`}>{svc.status}</span>
										</div>
									</div>
								</div>
								<UptimeBars pattern={svc.bars} />
							</div>
						))}
					</div>
				</div>

				{/* Footer — matches real: incident history + powered by */}
				<div className="px-5 pb-5">
					<div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400">
						<span>&larr; Incident History</span>
						<span className="flex items-center gap-1.5">
							Powered by
							<svg className="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
								<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
							</svg>
						</span>
					</div>
				</div>
			</div>

			{/* CTA link to live status page */}
			<div className="mt-4 text-center">
				<a href={statusPageUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--heat-100)] hover:underline">
					See a live status page →
				</a>
			</div>
		</div>
	);
}

/* ── Dispatcher ── */

export function SolutionVisual({ slug }: { slug: string }) {
	switch (slug) {
		case "slack-triage":
			return <SlackTriageVisual />;
		case "ai-sre":
			return <AiSreVisual />;
		case "status-pages":
			return <StatusPageVisual />;
		default:
			return null;
	}
}
