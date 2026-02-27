import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms & Conditions",
	description: "Terms and conditions for FireDash.",
};

type TermsSubsection = {
	title: string;
	paragraphs?: string[];
	bullets?: string[];
};

type TermsSection = {
	title: string;
	paragraphs?: string[];
	bullets?: string[];
	subsections?: TermsSubsection[];
};

const sections: TermsSection[] = [
	{
		title: "1. Company Information",
		paragraphs: [
			'FireDash is operated by Miquel Puig i Turón, registered in Spain (hereinafter "FireDash", "we", "us", or "our").',
			'These Terms and Conditions ("Terms") govern access to and use of the FireDash incident management software (the "Service").',
			'By accessing or using the Service, the customer ("Customer", "you") agrees to be bound by these Terms.',
		],
	},
	{
		title: "2. Service Description",
		paragraphs: [
			"FireDash provides a cloud-based incident management platform that allows organizations to record, manage, and track operational incidents.",
			"The Service is provided as a subscription-based software-as-a-service (SaaS) solution.",
			"FireDash may modify, improve, or update the Service at its discretion.",
		],
	},
	{
		title: "3. Eligibility",
		paragraphs: ["The Service is intended for business use only.", "By using the Service, you represent that you are acting on behalf of a company or professional entity."],
	},
	{
		title: "4. Accounts",
		paragraphs: ["Accounts are created by FireDash for Customers.", "You are responsible for:"],
		bullets: ["Maintaining the confidentiality of login credentials", "All activity under your account", "Ensuring users comply with these Terms"],
		subsections: [
			{
				title: "",
				paragraphs: ["You must notify FireDash immediately of any unauthorized use.", "We reserve the right to suspend accounts that violate these Terms."],
			},
		],
	},
	{
		title: "5. Subscription and Billing",
		subsections: [
			{
				title: "5.1 Subscription Model",
				paragraphs: ["The Service is provided on a recurring subscription basis (monthly unless otherwise agreed)."],
			},
			{
				title: "5.2 Billing",
				paragraphs: [
					"Subscriptions are billed in advance via a third-party payment provider (e.g., Stripe).",
					"By subscribing, you authorize recurring payments for the selected plan.",
				],
			},
			{
				title: "5.3 Proration",
				paragraphs: ["If you upgrade or downgrade your subscription mid-billing cycle, fees might be prorated to reflect the remaining period."],
			},
			{
				title: "5.4 No Refunds for Past Periods",
				paragraphs: ["Payments already collected for completed subscription periods are non-refundable."],
			},
			{
				title: "5.5 Cancellation",
				paragraphs: ["You may cancel your subscription at any time.", "Cancellation will take effect at the end of the current billing period."],
			},
		],
	},
	{
		title: "6. Customer Data",
		subsections: [
			{
				title: "6.1 Ownership",
				paragraphs: ['All data uploaded or generated within the Service ("Customer Data") remains the property of the Customer.'],
			},
			{
				title: "6.2 Responsibility",
				paragraphs: ["You are solely responsible for:"],
				bullets: ["The accuracy of Customer Data", "The legality of the data stored", "Ensuring you have the right to upload and process such data"],
			},
			{
				title: "",
				paragraphs: ["FireDash does not review or monitor Customer Data."],
			},
		],
	},
	{
		title: "7. Personal Data",
		paragraphs: [
			"FireDash processes limited personal data (such as name and email) when provided via SSO or account creation.",
			"Personal data is processed in accordance with our Privacy Policy and applicable data protection laws, including the General Data Protection Regulation (GDPR).",
		],
	},
	{
		title: "8. Acceptable Use",
		paragraphs: ["You agree not to:"],
		bullets: ["Use the Service for unlawful purposes", "Upload malicious code", "Attempt to reverse engineer or disrupt the Service", "Use the Service to store unlawful content"],
		subsections: [
			{
				title: "",
				paragraphs: ["FireDash reserves the right to suspend accounts engaging in prohibited conduct."],
			},
		],
	},
	{
		title: "9. Intellectual Property",
		paragraphs: [
			"All rights, title, and interest in the Service, including software, branding, and content, remain the exclusive property of FireDash.",
			"These Terms do not grant you ownership of the Service, only a limited, non-exclusive, non-transferable license to use it during the subscription period.",
		],
	},
	{
		title: "10. Service Availability",
		paragraphs: [
			'The Service is provided on an "as is" and "as available" basis.',
			"FireDash does not guarantee uninterrupted or error-free operation.",
			"We may suspend the Service for maintenance, updates, or technical reasons.",
		],
	},
	{
		title: "11. Disclaimer of Warranties",
		paragraphs: ["To the maximum extent permitted by law:"],
		bullets: [
			"The Service is provided without warranties of any kind",
			"FireDash disclaims all implied warranties, including fitness for a particular purpose and non-infringement",
			"You use the Service at your own risk",
		],
	},
	{
		title: "12. Limitation of Liability",
		paragraphs: ["To the maximum extent permitted by law:"],
		bullets: [
			"FireDash shall not be liable for indirect, incidental, or consequential damages",
			"FireDash shall not be liable for loss of profits, loss of data, or business interruption",
			"FireDash's total liability under these Terms shall not exceed the total amount paid by the Customer in the twelve (12) months preceding the claim",
		],
	},
	{
		title: "13. Indemnification",
		paragraphs: ["You agree to indemnify and hold harmless FireDash from any claims, damages, or losses arising from:"],
		bullets: ["Your use of the Service", "Your Customer Data", "Your violation of these Terms"],
	},
	{
		title: "14. Termination",
		paragraphs: ["FireDash may suspend or terminate access if:"],
		bullets: ["You breach these Terms", "Payments fail", "You misuse the Service"],
		subsections: [
			{
				title: "",
				paragraphs: ["Upon termination, access to the Service may be revoked."],
			},
		],
	},
	{
		title: "15. Changes to the Terms",
		paragraphs: ["FireDash may update these Terms at any time.", "Continued use of the Service after changes constitutes acceptance of the updated Terms."],
	},
	{
		title: "16. Governing Law and Jurisdiction",
		paragraphs: ["These Terms are governed by the laws of Spain.", "Any disputes shall be subject to the exclusive jurisdiction of the courts of Spain."],
	},
];

export default function TermsPage() {
	return (
		<div className="mx-auto w-full max-w-4xl px-6 pb-24 pt-12 md:pt-16">
			<section className="rounded-[30px] border border-[#dbe3ed] bg-[#ffffff] p-8 md:p-10">
				<p className="font-mono text-xs uppercase tracking-[0.2em] text-[#64748b]">FireDash</p>
				<h1 className="mt-3 text-4xl leading-tight font-semibold tracking-tight text-[#0f172a] md:text-5xl">Terms and Conditions</h1>
				<p className="mt-3 text-sm text-[#64748b]">Last updated: February 27, 2026</p>

				<div className="mt-8 space-y-7">
					{sections.map((section) => (
						<article key={section.title}>
							<h2 className="text-xl font-semibold tracking-tight text-[#0f172a]">{section.title}</h2>
							{section.paragraphs?.map((paragraph) => (
								<p key={paragraph} className="mt-2 text-sm leading-relaxed text-[#64748b]">
									{paragraph}
								</p>
							))}
							{section.bullets && section.bullets.length > 0 ? (
								<ul className="mt-2 list-disc space-y-1 pl-6 text-sm leading-relaxed text-[#64748b]">
									{section.bullets.map((bullet) => (
										<li key={bullet}>{bullet}</li>
									))}
								</ul>
							) : null}
							{section.subsections?.map((subsection, index) => (
								<div key={`${section.title}-subsection-${index}`} className="mt-4">
									{subsection.title ? <h3 className="text-sm font-semibold tracking-tight text-[#0f172a]">{subsection.title}</h3> : null}
									{subsection.paragraphs?.map((paragraph) => (
										<p key={paragraph} className="mt-2 text-sm leading-relaxed text-[#64748b]">
											{paragraph}
										</p>
									))}
									{subsection.bullets && subsection.bullets.length > 0 ? (
										<ul className="mt-2 list-disc space-y-1 pl-6 text-sm leading-relaxed text-[#64748b]">
											{subsection.bullets.map((bullet) => (
												<li key={bullet}>{bullet}</li>
											))}
										</ul>
									) : null}
								</div>
							))}
						</article>
					))}
				</div>
			</section>
		</div>
	);
}
