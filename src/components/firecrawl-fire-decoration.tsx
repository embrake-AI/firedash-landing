"use client";

import { useEffect, useRef } from "react";
import { FirecrawlCurvyRect } from "@/components/firecrawl-curvy-rect";
import { firecrawlFireFrames } from "@/lib/firecrawl-fire-frames";
import { firecrawlFireAltFrames } from "@/lib/firecrawl-fire-frames-alt";

type FirecrawlFireDecorationProps = {
	className?: string;
	variant?: 0 | 1;
	intervalMs?: number;
};

export function FirecrawlFireDecoration({ className, variant = 0, intervalMs = 85 }: FirecrawlFireDecorationProps) {
	const contentRef = useRef<HTMLDivElement>(null);
	const frames = variant === 1 ? firecrawlFireAltFrames : firecrawlFireFrames;

	useEffect(() => {
		let frameIndex = 0;
		if (contentRef.current) {
			contentRef.current.innerHTML = frames[0] ?? "";
		}

		const timer = setInterval(() => {
			frameIndex += 1;
			if (frameIndex >= frames.length) {
				frameIndex = 0;
			}
			if (contentRef.current) {
				contentRef.current.innerHTML = frames[frameIndex] ?? "";
			}
		}, intervalMs);

		return () => {
			clearInterval(timer);
		};
	}, [frames, intervalMs]);

	return (
		<div aria-hidden className={["fc-fire-decoration", variant === 0 ? "fc-fire-decoration-primary" : "fc-fire-decoration-secondary", className].filter(Boolean).join(" ")}>
			<FirecrawlCurvyRect className="fc-fire-decoration-frame" />
			<div className={variant === 0 ? "fc-fire-decoration-clip" : "fc-fire-decoration-clip-alt"}>
				<div
					ref={contentRef}
					className={[
						"font-ascii fc-decoration fc-fire-decoration-text",
						variant === 0 ? "fc-fire-decoration-text-primary" : "fc-fire-decoration-text-secondary",
					]
						.filter(Boolean)
						.join(" ")}
					style={{ whiteSpace: "pre", fontSize: "8px", lineHeight: "10px" }}
				/>
			</div>
		</div>
	);
}
