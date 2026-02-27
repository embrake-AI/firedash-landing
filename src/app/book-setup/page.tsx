import { redirect } from "next/navigation";
import { bookingUrl } from "@/lib/site";

export default function BookSetupPage() {
	redirect(bookingUrl);
}
