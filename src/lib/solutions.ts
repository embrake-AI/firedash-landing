export type SolutionDefinition = {
	slug: string;
	menuLabel: string;
	shortDescription: string;
	title: string;
	headline: string;
	description: string;
	outcome: string;
	exampleTitle: string;
	exampleContext: string;
	exampleEvents: string[];
	keyPoints: string[];
	signalCards: Array<{
		label: string;
		value: string;
		note: string;
	}>;
};

export const solutions: SolutionDefinition[] = [
	{
		slug: "slack-triage",
		menuLabel: "Slack Triage",
		shortDescription: "Run the full incident loop without leaving Slack.",
		title: "Slack Triage",
		headline: "Triage incidents end-to-end, directly in Slack",
		description:
			"Type @fire in any channel to open an incident. Fire creates a dedicated channel, auto-assigns an owner, and posts Block Kit buttons for every action. Your team sets severity, posts updates, and accepts AI suggestions — all without leaving Slack.",
		outcome:
			"Any engineer can run an incident from the thread where it started",
		exampleTitle: "@fire in any channel starts the loop",
		exampleContext:
			"An engineer mentions @fire with a description. Fire creates the incident channel, assigns an owner, and posts the Block Kit card — ready for triage in seconds.",
		exampleEvents: [
			"Engineer types @fire in #eng-support with a description of the problem",
			"Fire creates #inc-db-timeouts-eu, auto-assigns an owner, and posts a Block Kit card with severity, owner, and status",
			"On-call accepts ownership and triages via Block Kit buttons — no forms, no dashboard",
			"AI suggestions appear in the thread with Accept / Edit buttons; every message becomes the incident timeline",
		],
		keyPoints: [
			"@fire in any channel — incidents start from a Slack message, no forms or separate UI",
			"Auto-assigns an owner based on alert context and routing rules",
			"Block Kit buttons for severity, assignment, and status transitions — all actions from the thread",
			"Accept or edit AI suggestions inline — one click to apply",
			"Every message in the thread becomes part of the incident timeline — context is never lost",
		],
		signalCards: [
			{
				label: "Time to structured incident",
				value: "< 30s",
				note: "from /fire command to #inc-* channel",
			},
			{
				label: "Tools required",
				value: "Just Slack",
				note: "no extra dashboard or browser tab",
			},
			{
				label: "Training needed",
				value: "None",
				note: "Block Kit buttons guide every step",
			},
		],
	},
	{
		slug: "ai-sre",
		menuLabel: "AI SRE",
		shortDescription:
			"An AI agent that routes incidents, suggests next steps, and answers questions — all in the thread.",
		title: "AI SRE",
		headline: "AI guidance that suggests — never acts on its own",
		description:
			"Fire's AI SRE holds the full incident context and works alongside your team in the thread. It routes incidents to the right team, suggests status updates and mitigations, and answers questions about what's happening. Ask it anything, tell it what to do — every action needs human approval.",
		outcome:
			"Responders get expert-level guidance without needing SRE experience",
		exampleTitle: "Full context, right in the thread",
		exampleContext:
			"The AI SRE reads every message and status change. It routes to the right team, suggests next steps, and answers questions — all from the incident channel.",
		exampleEvents: [
			"On-call creates the incident from Slack — Fire routes it to the right team based on context",
			"AI SRE suggests updating status to mitigating with a drafted message — engineer clicks Apply",
			"Engineer asks @fire a question in the thread — AI responds with data and analysis",
			"AI suggests a status page update — engineer edits the draft and publishes",
			"Every suggestion has Apply / Edit buttons — the AI never acts on its own",
		],
		keyPoints: [
			"Routes incidents to the right team based on alert context and service ownership",
			"Suggests status updates and mitigations as the situation evolves",
			"Ask questions in the thread — @fire responds with data and analysis",
			"Tell it to draft updates, and it posts them for your approval",
			"Apply / Edit on every suggestion — the AI never acts autonomously",
		],
		signalCards: [
			{
				label: "Suggestion format",
				value: "Apply / Edit",
				note: "one-click to accept or modify",
			},
			{
				label: "Context window",
				value: "Full timeline",
				note: "every message and status change",
			},
			{
				label: "Autonomous actions",
				value: "Zero",
				note: "AI suggests, humans decide",
			},
		],
	},
	{
		slug: "status-pages",
		menuLabel: "Status Pages",
		shortDescription:
			"Clean, branded status pages updated directly from the incident thread.",
		title: "Status Pages",
		headline: "Publish status updates from the incident thread",
		description:
			"Fire gives you clean, branded status pages that update from the incident thread. The AI drafts customer-facing messages as the incident progresses — review and publish without leaving Slack. Component-level statuses, incident timelines, and historical incidents, all kept in sync automatically.",
		outcome: "Customers stay informed without adding work for the responder",
		exampleTitle: "Clean branded pages, updated from Slack",
		exampleContext:
			"Status pages stay in sync with the incident thread. The AI drafts updates, you review and publish — no context switching.",
		exampleEvents: [
			"Engineer opens the incident from Slack and sets it to medium severity",
			"Fire auto-drafts a status page update — team reviews in the thread",
			"Engineer clicks Publish — the status page goes live with component status set to degraded",
			"After the fix deploys, Fire drafts the resolution update and publishes it after approval",
		],
		keyPoints: [
			"Publish status updates directly from the Slack incident thread",
			"AI auto-drafts customer-facing updates as the incident progresses",
			"Component-level statuses: operational, degraded, outage",
			"Clean, branded page with incident timeline and historical incidents",
			"Historical incidents appear automatically after resolution",
		],
		signalCards: [
			{
				label: "Publish workflow",
				value: "From Slack",
				note: "review and publish in the incident thread",
			},
			{
				label: "Update drafting",
				value: "Automatic",
				note: "based on incident timeline and status",
			},
			{
				label: "Extra cost",
				value: "Included",
				note: "status pages ship with every plan",
			},
		],
	},
	{
		slug: "post-incidents",
		menuLabel: "Post-Incidents",
		shortDescription:
			"Auto-generated post-mortems that surface patterns from past incidents.",
		title: "Post-Incidents",
		headline: "Learn from every incident, automatically",
		description:
			"After resolution, Fire auto-generates a post-mortem with timeline, root cause, and action items. It surfaces patterns across past incidents and suggests runbook actions — no manual writing needed.",
		outcome: "Every incident makes the next one faster",
		exampleTitle: "Post-mortem, generated on resolution",
		exampleContext:
			"When an incident resolves, Fire compiles everything — timeline, root cause, action items — and cross-references past incidents to surface patterns.",
		exampleEvents: [
			"Incident resolves — Fire auto-generates a post-mortem from the full timeline",
			"Root cause analysis drafted from thread context and linked alerts",
			"Action items extracted with suggested owners based on service ownership",
			"Fire flags two similar past incidents and what was done to prevent recurrence",
		],
		keyPoints: [
			"Auto-generated post-mortem on resolution — no manual writing",
			"Timeline, root cause, and action items compiled from the incident thread",
			"Patterns detected across past incidents automatically",
			"Suggested actions from similar past incidents and runbook history",
			"Export and share with the team in one click",
		],
		signalCards: [
			{
				label: "Post-mortem generation",
				value: "Automatic",
				note: "generated on incident resolution",
			},
			{
				label: "Pattern detection",
				value: "Cross-incident",
				note: "surfaces similar past incidents",
			},
			{
				label: "Manual writing",
				value: "Zero",
				note: "AI compiles, you review",
			},
		],
	},
];

export function getSolutionBySlug(slug: string) {
	return solutions.find((solution) => solution.slug === slug);
}
