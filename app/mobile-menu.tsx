"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { business } from "./content";
import { WhatsAppLink } from "./whatsapp-link";

const links = [
  ["Services", "/#services"],
  ["Resources", "/resources"],
  ["Tools", "/tools"],
  ["About Travokeys", "/#about"],
  ["FAQs", "/#faq"],
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return <div className="md:hidden">
    <button
      type="button"
      aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={open}
      aria-controls="mobile-navigation"
      onClick={() => setOpen((value) => !value)}
      className="grid h-10 w-10 place-items-center rounded-full border border-[#dfe4dc] bg-white text-[#18211d]"
    >
      {open ? <X size={19} /> : <Menu size={19} />}
    </button>
    {open && <div id="mobile-navigation" className="absolute inset-x-0 top-full border-b border-[#e2e6df] bg-[#f7f8f5] shadow-xl">
      <nav aria-label="Mobile navigation" className="container grid gap-1 py-4">
        {links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-[#354039] hover:bg-white">{label}</Link>)}
      </nav>
      <div className="container flex gap-3 border-t border-[#e2e6df] py-4">
        <a href={`tel:${business.phone}`} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#141c19] px-4 py-3 text-sm font-semibold text-white"><Phone size={16} /> Call {business.displayPhone}</a>
        <WhatsAppLink className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#20b85a] px-4 py-3 text-sm font-semibold text-white">WhatsApp</WhatsAppLink>
      </div>
    </div>}
  </div>;
}
