import Link from "next/link";

export default function NotFound() {
	return (
		<section className="fc-shell fc-panel flex flex-col items-center justify-center text-center py-32 max-sm:py-20">
			<div className="fc-inner fc-center">
				<p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--black-alpha-48)] mb-4">
					Incident report
				</p>
				<h1 className="text-5xl max-sm:text-4xl font-bold tracking-tight text-[var(--accent-black)] mb-3">
					404
				</h1>
				<p className="text-lg text-[var(--black-alpha-64)] mb-2">
					This page couldn't be found.
				</p>
				<p className="text-sm text-[var(--black-alpha-48)] mb-8">
					Severity: low &middot; Status: resolved &middot; Root cause: bad link
				</p>

				{/* Slack-style Fire suggestion */}
				<div className="flex gap-2.5 text-left max-w-xs mx-auto">
					<span className="flex items-center justify-center w-8 h-8 rounded-sm bg-orange-100 text-sm shrink-0" aria-hidden>
						🔥
					</span>
					<div className="flex-1 min-w-0">
						<div className="flex items-baseline gap-2">
							<span className="text-[13px] font-bold text-[var(--accent-black)]">Fire</span>
							<span className="text-[11px] text-[var(--black-alpha-32)]">just now</span>
						</div>
						<div className="mt-2">
							<div className="p-3 border border-[var(--border-faint)] bg-white">
								<div className="mb-1.5">
									<span className="text-xs font-bold">🔥 suggestion</span>
								</div>
								<p className="m-0 mb-2 text-xs leading-relaxed text-[var(--black-alpha-72)]">
									Navigate to <strong className="text-[var(--accent-black)]">homepage</strong>:
									<br />
									<span className="text-[var(--black-alpha-56)]">
										&ldquo;Nothing to see here. Redirecting to safety.&rdquo;
									</span>
								</p>
								<Link href="/" className="inline-flex items-center px-2.5 py-1 border text-[11px] font-semibold bg-emerald-600 border-emerald-600 text-white">
									Apply
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
