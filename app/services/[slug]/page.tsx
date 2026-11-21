import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { business, services } from "../../content";
import { serviceFaqs } from "../../service-faqs";
import { ContactCta, Footer, Header } from "../../components";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return service
    ? { title: `${service.title} | Travokeys Benoni`, description: service.intro, alternates: { canonical: `/services/${service.slug}` } }
    : { title: "Service not found" };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const faqs = serviceFaqs[slug] ?? [];
  const localBusiness = {
    "@type": "LocalBusiness",
    name: business.name,
    telephone: business.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "29 North Rd, Crystal Park, Silver Pines Estate",
      addressLocality: "Benoni",
      postalCode: "1501",
      addressCountry: "ZA",
    },
  };

  return <>
    <Header />
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: service.intro,
        provider: localBusiness,
        areaServed: { "@type": "City", name: "Benoni" },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      }) }} />

      <div className="container py-12">
        <Link className="inline-flex items-center gap-2 text-xs text-[#69716c]" href="/#services"><ArrowLeft size={14} /> All services</Link>
        <div className="grid gap-12 py-14 md:grid-cols-[1.15fr_.85fr]">
          <article>
            <p className="eyebrow mb-5 text-[#788278]">Automotive locksmith · Benoni, South Africa</p>
            <h1 className="display !text-[clamp(44px,6.5vw,76px)]">{service.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#69716c]">{service.intro}</p>
            <a href={`tel:${business.phone}`} className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#d5fa53] px-6 py-4 text-sm font-bold text-[#111917]">Call {business.displayPhone}<ArrowRight size={16} /></a>

            <section className="mt-14">
              <h2 className="text-2xl font-semibold tracking-tight">How {service.short.toLowerCase()} works</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#69716c]">{service.detail}</p>
              <h2 className="mt-10 text-2xl font-semibold tracking-tight">Request a quote in Benoni</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#69716c]">Call us with your vehicle make, model, year and a short description of the issue. We’ll confirm whether we can assist, explain the next step and discuss pricing before work begins. Travokeys is based at {business.address} and is open 24 hours. Availability and vehicle coverage depend on the service requested.</p>
            </section>
          </article>

          <aside className="h-fit rounded-[22px] bg-[#141c19] p-8 text-white">
            <p className="eyebrow text-[#d5fa53]">Travokeys Auto Locksmith</p>
            <h2 className="mt-4 text-2xl font-semibold">Local help. Clear next steps.</h2>
            <ul className="mt-7 space-y-4 text-sm text-white/70">
              {["Open 24 hours", "Based in Crystal Park, Benoni", "Call to confirm vehicle support", "Authorisation checks may apply"].map((item) => <li key={item} className="flex gap-3"><Check size={17} className="shrink-0 text-[#d5fa53]" />{item}</li>)}
            </ul>
            <a href={`tel:${business.phone}`} className="mt-8 block rounded-full bg-[#d5fa53] px-5 py-4 text-center text-sm font-bold text-[#141c19]">{business.displayPhone}</a>
            <p className="mt-4 text-xs leading-5 text-white/45">{business.address}</p>
          </aside>
        </div>

        <section id="faq" className="mx-auto max-w-4xl border-t border-[#e2e6df] py-14">
          <p className="eyebrow text-[#7c857e]">Service FAQs</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em]">Questions about {service.short.toLowerCase()}</h2>
          <div className="mt-7">
            {faqs.map(({ question, answer }) => <details key={question} className="group border-b border-[#e0e5dd] py-5 first:border-t">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold tracking-[-.02em]">
                <span>{question}</span><span aria-hidden="true" className="text-xl font-light text-[#7c857e] transition group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-3xl pt-3 text-sm leading-6 text-[#737c75]">{answer}</p>
            </details>)}
          </div>
        </section>

        <div className="border-t border-[#e2e6df] py-10">
          <h2 className="mb-5 text-xl font-semibold">More Travokeys services</h2>
          <div className="flex flex-wrap gap-3">{services.filter((item) => item.slug !== slug).map((item) => <Link className="rounded-full border border-[#dfe4dc] px-4 py-2 text-xs hover:bg-white" key={item.slug} href={`/services/${item.slug}`}>{item.short}</Link>)}</div>
        </div>
      </div>
      <ContactCta />
    </main>
    <Footer />
  </>;
}
