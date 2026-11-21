import type { Metadata } from "next";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { business } from "../content";
import { Footer, Header, WhatsAppLink } from "../components";

export const metadata: Metadata = {
  title: "Contact Travokeys Auto Locksmith | Benoni",
  description: "Contact Travokeys Auto Locksmith in Crystal Park, Benoni. Call 073 702 4949, email info@travokeys.co.za or use WhatsApp. Open 24 hours.",
  alternates: { canonical: "/contact" },
};

const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`;

export default function ContactPage() {
  return <><Header/><main>
    <section className="bg-[#141c19] py-20 text-white"><div className="container">
      <p className="eyebrow text-[#d5fa53]">Contact Travokeys</p>
      <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-.06em] md:text-7xl">Let’s talk about<br/>your vehicle.</h1>
      <p className="mt-6 max-w-xl text-sm leading-6 text-white/60">Call or message with your vehicle make, model, year, location and a short description of what you need.</p>
    </div></section>

    <section className="container grid gap-5 py-14 md:grid-cols-2">
      <div className="rounded-[22px] border border-[#e2e6df] bg-white p-7 sm:p-9">
        <p className="eyebrow text-[#7c857e]">Get in touch</p>
        <div className="mt-6 space-y-6">
          <div className="flex gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#f1f5e9] text-[#536438]"><Phone size={18}/></span><div><p className="text-xs text-[#7a837c]">Call · open 24 hours</p><a className="mt-1 block text-lg font-semibold" href={`tel:${business.phone}`}>{business.displayPhone}</a></div></div>
          <div className="flex gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#f1f5e9] text-[#536438]"><Mail size={18}/></span><div><p className="text-xs text-[#7a837c]">Email</p><a className="mt-1 block text-lg font-semibold" href={`mailto:${business.email}`}>{business.email}</a></div></div>
          <div className="flex gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#f1f5e9] text-[#536438]"><MapPin size={18}/></span><div><p className="text-xs text-[#7a837c]">Address</p><p className="mt-1 text-sm font-semibold leading-6">{business.address}</p><a className="mt-2 inline-flex items-center gap-1 text-xs font-bold" href={mapHref} target="_blank" rel="noopener noreferrer">Open directions <ArrowUpRight size={13}/></a></div></div>
          <div className="flex gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#f1f5e9] text-[#536438]"><Clock3 size={18}/></span><div><p className="text-xs text-[#7a837c]">Hours</p><p className="mt-1 text-sm font-semibold">Open 24 hours</p></div></div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 border-t border-[#e2e6df] pt-6"><a className="inline-flex items-center gap-2 rounded-full bg-[#141c19] px-6 py-4 text-xs font-semibold text-white" href={`tel:${business.phone}`}>Call Travokeys</a><WhatsAppLink className="inline-flex items-center gap-2 rounded-full bg-[#20b85a] px-6 py-4 text-xs font-semibold text-white">WhatsApp us</WhatsAppLink></div>
      </div>

      <div className="flex flex-col justify-between rounded-[22px] bg-[#e9eee4] p-7 sm:p-9"><div><p className="eyebrow text-[#74806f]">Before you call</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.05em]">A few details help us assist you.</h2><ul className="mt-6 space-y-4 text-sm leading-6 text-[#5e685f]">{["Vehicle make, model and year", "Your current location", "What happened and when it started", "Whether you have a spare or working key", "Proof you’re authorised to request the work, if needed"].map(item=><li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8ca64f]"/>{item}</li>)}</ul></div><p className="mt-8 border-t border-[#d4ddd0] pt-5 text-xs leading-5 text-[#69716c]">Vehicle coverage and availability depend on the service requested. We’ll confirm the next step and discuss pricing before work begins.</p></div>
    </section>
  </main><Footer/></>;
}
