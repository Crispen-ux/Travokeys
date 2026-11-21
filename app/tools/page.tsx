import type { Metadata } from "next";
import { Footer, Header } from "../components";
import { ContactCta } from "../components";
import ToolKit from "./toolkit";

export const metadata: Metadata = {
  title: "Car Key Help Tools | Travokeys Benoni",
  description: "Use the Travokeys car key service matcher and call-preparation tool to identify what details to share about your vehicle.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  return <><Header/><main>
    <section className="bg-[#141c19] py-20 text-white"><div className="container"><p className="eyebrow text-[#d5fa53]">Travokeys quick tools</p><h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-.06em] md:text-7xl">A clearer next<br/>step for your car.</h1><p className="mt-6 max-w-xl text-sm leading-6 text-white/60">Match your situation to a service and prepare the details that help us understand your vehicle. These tools offer general guidance, not a diagnosis.</p></div></section>
    <ToolKit/><ContactCta/>
  </main><Footer/></>;
}
