import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, KeyRound, MapPin, ShieldCheck, Wrench } from "lucide-react";
import { business, services } from "../content";
import { ContactCta, Footer, Header } from "../components";

export const metadata: Metadata = {
  title: "About Travokeys Auto Locksmith | Benoni",
  description: "Meet Travokeys Auto Locksmith in Crystal Park, Benoni. Explore car key cutting and coding, ECU cloning, remote repairs and vehicle diagnostics.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <><Header/><main>
    <section className="bg-[#141c19] py-20 text-white"><div className="container">
      <p className="eyebrow text-[#d5fa53]">About Travokeys</p>
      <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-.06em] md:text-7xl">Automotive key<br/>help in Benoni.</h1>
      <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60">Travokeys Auto Locksmith is based in Crystal Park, Benoni, and provides car key and vehicle diagnostic services. We help make the next step clearer when a key, remote or vehicle system needs attention.</p>
    </div></section>

    <section className="container grid gap-12 py-20 md:grid-cols-[1.1fr_.9fr] md:items-center">
      <div><p className="eyebrow text-[#7c857e]">A practical approach</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.055em]">Clear information.<br/>Work scoped to your vehicle.</h2><p className="mt-6 text-sm leading-7 text-[#69716c]">Car key systems differ by make, model and year. We ask about your vehicle and the issue first, then confirm whether we can help, explain the available next step and discuss pricing before work begins. Vehicle coverage and service availability depend on the job.</p><div className="mt-7 space-y-3">{["Vehicle-specific key and remote services","Diagnostics to guide further checks","Authorisation checks where appropriate","Open 24 hours"].map(item=><p key={item} className="flex items-center gap-3 text-sm font-medium text-[#455048]"><span className="grid h-5 w-5 place-items-center rounded-full bg-[#eaf2d4] text-[#516039]"><Check size={12}/></span>{item}</p>)}</div></div>
      <div className="rounded-[22px] bg-[#e9eee4] p-8 sm:p-10"><div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#d5fa53]"><KeyRound size={25}/></div><p className="mt-8 text-3xl font-semibold leading-tight tracking-[-.05em]">Your car key,<br/>sorted.</p><div className="mt-8 space-y-4 border-t border-[#d4ddd0] pt-6 text-sm text-[#58635b]"><p className="flex gap-3"><MapPin size={17} className="shrink-0"/>{business.address}</p><p className="flex gap-3"><ShieldCheck size={17} className="shrink-0"/>Travokeys Auto Locksmith · Open 24 hours</p></div></div>
    </section>

    <section className="bg-white py-16"><div className="container"><p className="eyebrow text-[#7c857e]">What we do</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">Automotive locksmith services</h2><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{services.map(service=><Link key={service.slug} href={`/services/${service.slug}`} className="group rounded-2xl border border-[#e2e6df] p-6 transition hover:-translate-y-1 hover:border-[#b9c1b7]"><Wrench size={19} className="text-[#697b48]"/><h3 className="mt-5 font-semibold">{service.short}</h3><p className="mt-2 text-xs leading-6 text-[#727b74]">{service.intro}</p><span className="mt-4 inline-flex items-center gap-2 text-xs font-bold">Service details <ArrowRight size={14}/></span></Link>)}</div></div></section>
    <ContactCta/>
  </main><Footer/></>;
}
