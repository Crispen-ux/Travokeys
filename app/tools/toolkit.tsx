"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Clipboard, KeyRound, Wrench } from "lucide-react";
import { business, services } from "../content";

const issues = [
  { id: "lost", label: "My key is lost or I need a spare", slug: "key-cutting-and-coding", note: "Key cutting and coding may be relevant. Availability depends on your vehicle and whether you have another working key." },
  { id: "ecu", label: "An ECU has been replaced or needs assessment", slug: "ecu-cloning", note: "ECU cloning is vehicle and module specific. A diagnosis and compatibility check are needed before confirming the right approach." },
  { id: "buttons", label: "The rubber buttons are worn or missing", slug: "rubber-button-replacement", note: "A rubber button replacement may suit supported remotes if the internal switches and electronics remain usable." },
  { id: "casing", label: "The key shell is cracked or broken", slug: "key-casing-replacement", note: "A replacement casing may be possible when the internal parts are in suitable condition and a matching shell is available." },
  { id: "battery", label: "The remote is unreliable or may need a battery", slug: "remote-battery-replacement", note: "A weak battery is one possible cause. Worn buttons, contacts or vehicle-side issues can produce similar symptoms." },
  { id: "diagnostics", label: "A warning light or vehicle fault needs checking", slug: "vehicle-diagnostics", note: "Vehicle diagnostics can help guide further checks. A scan code alone does not confirm a failed part or a particular repair." },
];

export default function ToolKit() {
  const [issue, setIssue] = useState(issues[0].id);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [location, setLocation] = useState("");
  const [copied, setCopied] = useState(false);
  const selected = issues.find((item) => item.id === issue) ?? issues[0];
  const matchedService = services.find((service) => service.slug === selected.slug)!;
  const callNote = useMemo(() => [
    "Hi Travokeys, I need help with my vehicle.",
    `Vehicle: ${[year, make, model].filter(Boolean).join(" ") || "[make, model and year]"}`,
    `Location: ${location.trim() || "[your location]"}`,
    `Issue: ${selected.label}`,
    "Please confirm whether the vehicle is supported, availability and the estimated price.",
  ].join("\n"), [year, make, model, location, selected]);

  async function copyCallNote() {
    try {
      await navigator.clipboard.writeText(callNote);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return <section className="container grid gap-5 py-14 lg:grid-cols-2">
    <div className="rounded-[22px] border border-[#e2e6df] bg-white p-6 sm:p-8">
      <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-[13px] bg-[#f1f5e9] text-[#536438]"><KeyRound size={20}/></span><div><p className="eyebrow text-[#7c857e]">Tool 01</p><h2 className="mt-1 text-xl font-semibold tracking-tight">Find a relevant service</h2></div></div>
      <p className="mt-5 text-sm leading-6 text-[#69716c]">Choose the closest match. The result is a starting point; Travokeys will confirm vehicle coverage and the appropriate work.</p>
      <label htmlFor="issue" className="mt-6 block text-xs font-semibold">What’s happening?</label>
      <select id="issue" value={issue} onChange={(event) => setIssue(event.target.value)} className="mt-2 h-12 w-full rounded-xl border border-[#dfe4dc] bg-[#fbfcfa] px-4 text-sm outline-none focus:ring-2 focus:ring-[#d5fa53]">
        {issues.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
      </select>
      <div className="mt-5 rounded-2xl bg-[#eef2e9] p-5"><p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#7c857e]">Suggested service</p><h3 className="mt-2 text-lg font-semibold">{matchedService.short}</h3><p className="mt-2 text-sm leading-6 text-[#68716c]">{selected.note}</p><Link href={`/services/${matchedService.slug}`} className="mt-4 inline-flex items-center gap-2 text-xs font-bold">View service details <ArrowRight size={14}/></Link></div>
      <p className="mt-4 text-[11px] leading-5 text-[#858d87]">This matcher does not diagnose faults or confirm support. A locksmith may need to inspect the vehicle and verify authorisation.</p>
    </div>

    <div className="rounded-[22px] border border-[#e2e6df] bg-white p-6 sm:p-8">
      <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-[13px] bg-[#f1f5e9] text-[#536438]"><Wrench size={20}/></span><div><p className="eyebrow text-[#7c857e]">Tool 02</p><h2 className="mt-1 text-xl font-semibold tracking-tight">Prepare your call</h2></div></div>
      <p className="mt-5 text-sm leading-6 text-[#69716c]">Add what you know. This site does not submit or store the details. If you choose WhatsApp, the prepared message is passed to WhatsApp to send.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div><label htmlFor="make" className="block text-xs font-semibold">Vehicle make</label><input id="make" value={make} onChange={(e) => setMake(e.target.value)} placeholder="e.g. Toyota" className="mt-2 h-11 w-full rounded-xl border border-[#dfe4dc] px-3 text-sm outline-none focus:ring-2 focus:ring-[#d5fa53]"/></div>
        <div><label htmlFor="model" className="block text-xs font-semibold">Model</label><input id="model" value={model} onChange={(e) => setModel(e.target.value)} placeholder="e.g. Corolla" className="mt-2 h-11 w-full rounded-xl border border-[#dfe4dc] px-3 text-sm outline-none focus:ring-2 focus:ring-[#d5fa53]"/></div>
        <div><label htmlFor="year" className="block text-xs font-semibold">Year</label><input id="year" value={year} onChange={(e) => setYear(e.target.value)} inputMode="numeric" placeholder="e.g. 2020" className="mt-2 h-11 w-full rounded-xl border border-[#dfe4dc] px-3 text-sm outline-none focus:ring-2 focus:ring-[#d5fa53]"/></div>
        <div><label htmlFor="location" className="block text-xs font-semibold">Your location</label><input id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Suburb or area" className="mt-2 h-11 w-full rounded-xl border border-[#dfe4dc] px-3 text-sm outline-none focus:ring-2 focus:ring-[#d5fa53]"/></div>
      </div>
      <div className="mt-5 rounded-2xl bg-[#f7f8f5] p-4"><p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#7c857e]">Your call notes</p><p className="mt-3 whitespace-pre-line text-xs leading-6 text-[#566159]">{callNote}</p></div>
      <div className="mt-4 flex flex-wrap gap-3"><button type="button" onClick={copyCallNote} className="inline-flex items-center gap-2 rounded-full border border-[#dfe4dc] px-4 py-3 text-xs font-semibold hover:bg-[#f7f8f5]">{copied ? <Check size={14}/> : <Clipboard size={14}/>} {copied ? "Copied" : "Copy call notes"}</button><a href={`tel:${business.phone}`} className="inline-flex items-center gap-2 rounded-full bg-[#141c19] px-5 py-3 text-xs font-semibold text-white">Call {business.displayPhone}<ArrowRight size={14}/></a><a href={`https://wa.me/${business.phone.replace("+", "")}?text=${encodeURIComponent(callNote)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#20b85a] px-5 py-3 text-xs font-semibold text-white">WhatsApp notes <ArrowRight size={14}/></a></div>
    </div>
  </section>;
}
