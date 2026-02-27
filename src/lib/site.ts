import { solutions } from "@/lib/solutions";

export const solutionItems = solutions.map((solution) => ({
	href: `/solutions/${solution.slug}`,
	label: solution.menuLabel,
	description: solution.shortDescription,
}));

export const demoUrl = "https://demo.firedash.ai";

export const bookingUrl = "https://calendar.app.google/35h3GfeqezhwCUE27";

export const statusPageUrl = "https://status.enginy.ai";
