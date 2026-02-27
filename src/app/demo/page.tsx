import { redirect } from "next/navigation";
import { demoUrl } from "@/lib/site";

export default function DemoPage() {
	redirect(demoUrl);
}
