"use client";

import { useEffect, useRef } from "react";
import { firecrawlDecorationFrames } from "@/lib/firecrawl-decoration-frames";

type FirecrawlAsciiDecorationProps = {
	className?: string;
	colorClassName?: string;
	fontSizePx?: number;
	lineHeightPx?: number;
	intervalMs?: number;
	frames?: readonly string[];
};

export function FirecrawlAsciiDecoration({
	className,
	colorClassName,
	fontSizePx = 8,
	lineHeightPx = 10,
	intervalMs = 85,
	frames = firecrawlDecorationFrames,
}: FirecrawlAsciiDecorationProps) {
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let frameIndex = 0;

		if (contentRef.current) {
			contentRef.current.textContent = frames[0] ?? "";
		}

		const timer = setInterval(() => {
			frameIndex += 1;
			if (frameIndex >= frames.length) {
				frameIndex = 0;
			}
			if (contentRef.current) {
				contentRef.current.textContent = frames[frameIndex] ?? "";
			}
		}, intervalMs);

		return () => {
			clearInterval(timer);
		};
	}, [frames, intervalMs]);

	const rootClassName = ["relative pointer-events-none select-none w-full h-full", className].filter(Boolean).join(" ");
	const decorationClassName = ["font-ascii absolute inset-0 fc-decoration", colorClassName].filter(Boolean).join(" ");

	return (
		<div className={rootClassName}>
			<div ref={contentRef} className={decorationClassName} style={{ whiteSpace: "pre", fontSize: `${fontSizePx}px`, lineHeight: `${lineHeightPx}px` }} />
		</div>
	);
}
