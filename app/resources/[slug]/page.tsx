import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { business, resources } from "../../content";
import { ContactCta, Footer, Header } from "../../components";
import { resourceDetails } from "../../resource-details";
import { resourceAdditional } from "../../resource-additional";
import { resourceConclusion } from "../../resource-conclusion";
import { resourceLastMile } from "../../resource-last-mile";

export function generateStaticParams(){return resources.map(r=>({slug:r.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=resources.find(r=>r.slug===slug);return item?{title:`${item.title} | Travokeys`,description:item.body.slice(0,155),alternates:{canonical:`/resources/${item.slug}`}}:{title:"Guide not found"};}
export default async function ResourceArticle({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const article=resources.find(r=>r.slug===slug);if(!article)notFound();const sections=[...(resourceDetails[slug]??[]),...(resourceAdditional[slug]??[]),...(resourceConclusion[slug]?[resourceConclusion[slug]]:[]),...(resourceLastMile[slug]?[resourceLastMile[slug]]:[])];return <><Header/><main><article className="container max-w-4xl py-12"><Link href="/resources" className="inline-flex items-center gap-2 text-xs text-[#69716c]"><ArrowLeft size={14}/> All resources</Link><p className="eyebrow mt-12 text-[#7c857e]">{article.category} · Travokeys Benoni</p><h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.055em] md:text-6xl">{article.title}</h1><p className="mt-8 max-w-3xl text-lg leading-8 text-[#68716c]">{article.body}</p><div className="mt-10 max-w-3xl space-y-9">{sections.map(section=><section key={section.heading}><h2 className="text-xl font-semibold tracking-tight">{section.heading}</h2><p className="mt-3 text-sm leading-7 text-[#68716c]">{section.body}</p></section>)}</div><div className="mt-10 rounded-2xl bg-[#eef2e9] p-6"><p className="text-sm font-semibold">Need help with your vehicle?</p><p className="mt-2 text-xs leading-5 text-[#68716c]">Call Travokeys Auto Locksmith in Benoni, open 24 hours. Vehicle coverage varies by service.</p><a className="mt-4 inline-flex items-center gap-2 text-sm font-bold" href={`tel:${business.phone}`}>Call {business.displayPhone}<ArrowRight size={15}/></a></div></article><ContactCta/></main><Footer/></>}
