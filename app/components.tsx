import Link from "next/link";
import type { ReactNode } from "react";
import { KeyRound, ArrowRight, Phone } from "lucide-react";
import { business, services } from "./content";
import MobileMenu from "./mobile-menu";

const whatsappNumber = business.phone.replace("+", "");
const whatsappMessage = encodeURIComponent("Hi Travokeys, I need help with my vehicle. Please let me know what details you need.");
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

function WhatsAppMark({ className = "h-4 w-4" }: { className?: string }) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .14 5.36.14 11.94c0 2.1.55 4.16 1.6 5.97L0 24l6.24-1.64a11.9 11.9 0 0 0 5.83 1.49h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.19-1.24-6.19-3.5-8.43ZM12.08 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.6-.24-.37a9.84 9.84 0 0 1-1.52-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.98 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.45-4.44 9.89-9.9 9.89Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.49 1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.08-.13-.27-.2-.57-.35Z"/></svg>;
}

export function WhatsAppLink({ children = "WhatsApp us", className = "" }: { children?: ReactNode; className?: string }) {
  return <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Chat with Travokeys on WhatsApp" className={className}><WhatsAppMark/>{children}</a>;
}

export function WhatsAppFloat(){return <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Chat with Travokeys on WhatsApp" className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#20b85a] px-5 py-4 text-xs font-bold text-white shadow-[0_8px_28px_rgba(0,0,0,.22)] transition hover:bg-[#159447]"><WhatsAppMark className="h-5 w-5"/><span className="hidden sm:inline">WhatsApp us</span></a>}

export function Header() {
  return <>
    <div className="bg-[#131a18] text-white">
      <div className="container flex min-h-9 items-center justify-between text-[11px]">
        <span className="hidden text-white/75 sm:inline">Automotive locksmith · Benoni</span>
        <div className="ml-auto flex items-center gap-4">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-1.5 text-white/80 sm:flex"><WhatsAppMark /> WhatsApp us</a>
          <a href={`tel:${business.phone}`} className="text-[#d5fa53]"><span className="hidden sm:inline">24-hour assistance · </span>{business.displayPhone}</a>
        </div>
      </div>
    </div>
    <header className="sticky top-0 z-30 border-b border-[#e8ebe5] bg-[#f7f8f5]/95 backdrop-blur">
      <div className="container relative flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#d5fa53] text-[#121a17]"><KeyRound size={19} /></span>
          <span className="text-[20px] font-bold tracking-[-.06em]">travo<span className="font-normal">keys</span><span className="ml-1 text-[10px] tracking-[.16em] text-[#7b847e]">.CO.ZA</span></span>
        </Link>
        <nav className="hidden items-center gap-6 text-[12px] font-medium text-[#555e58] md:flex" aria-label="Main navigation">
          <Link href="/#services">Services</Link><Link href="/resources">Resources</Link><Link href="/tools">Tools</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a href={`tel:${business.phone}`} aria-label={`Call Travokeys at ${business.displayPhone}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#141c19] text-[12px] font-semibold text-white sm:h-auto sm:w-auto sm:px-5 sm:py-3">
            <Phone className="h-4 w-4 sm:hidden" /><span className="hidden sm:inline">Call {business.displayPhone}</span>
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  </>;
}

export function Footer(){return <footer className="bg-[#111816] py-12 text-white"><div className="container"><div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-3"><div><Link href="/" className="text-xl font-bold tracking-tight">travokeys</Link><p className="mt-3 max-w-xs text-xs leading-5 text-white/50">Automotive locksmith services in Benoni. Open 24 hours.</p><div className="mt-4 flex gap-4 text-xs text-white/65"><Link href="/about">About</Link><Link href="/contact">Contact</Link></div></div><div><p className="mb-3 text-xs font-semibold">Explore</p><div className="grid gap-2 text-xs text-white/60"><Link href="/resources">Resource hub</Link><Link href="/tools">Car key tools</Link>{services.map(s=><Link key={s.slug} href={`/services/${s.slug}`}>{s.short}</Link>)}</div></div><div className="text-xs leading-6 text-white/60"><p className="font-semibold text-white">Travokeys Auto Locksmith</p><p>{business.address}</p><a className="block text-[#d5fa53]" href={`tel:${business.phone}`}>{business.displayPhone}</a><a className="block text-white/75 hover:text-white" href={`mailto:${business.email}`}>{business.email}</a><a className="mt-1 flex items-center gap-2 text-[#43d377]" href={whatsappHref} target="_blank" rel="noopener noreferrer"><WhatsAppMark/> WhatsApp us</a></div></div><div className="flex flex-col justify-between gap-3 pt-6 text-[10px] text-white/40 sm:flex-row"><span>© {new Date().getFullYear()} Travokeys. All rights reserved.</span><span><Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy & POPIA</Link></span></div></div></footer>}

export function ContactCta(){return <section className="bg-[#e9eee4] py-14"><div className="container flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left"><div><div className="eyebrow mb-3 text-[#74806f]">Need help with your vehicle?</div><h2 className="text-3xl font-semibold tracking-[-.05em]">Call, WhatsApp or email Travokeys.</h2><p className="mt-2 text-sm text-[#69716c]">Open 24 hours · {business.address}</p></div><div className="flex flex-wrap justify-center gap-3"><a href={`tel:${business.phone}`} className="inline-flex items-center gap-3 rounded-full bg-[#141c19] px-7 py-4 text-xs font-semibold text-white">Call {business.displayPhone}<ArrowRight size={15}/></a><WhatsAppLink className="inline-flex items-center gap-2 rounded-full bg-[#20b85a] px-6 py-4 text-xs font-semibold text-white">WhatsApp</WhatsAppLink><a href={`mailto:${business.email}`} className="inline-flex items-center gap-2 rounded-full border border-[#cfd7cc] px-6 py-4 text-xs font-semibold text-[#25312a]">{business.email}</a></div></div></section>}
