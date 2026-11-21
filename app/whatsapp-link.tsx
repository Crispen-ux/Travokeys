"use client";

import { business } from "./content";
import type { ReactNode } from "react";

const href = `https://wa.me/${business.phone.replace("+", "")}?text=${encodeURIComponent("Hi Travokeys, I need help with my vehicle. Please let me know what details you need.")}`;

export function WhatsAppLink({ children = "WhatsApp us", className = "" }: { children?: ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat with Travokeys on WhatsApp" className={className}>
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .14 5.36.14 11.94c0 2.1.55 4.16 1.6 5.97L0 24l6.24-1.64a11.9 11.9 0 0 0 5.83 1.49h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.19-1.24-6.19-3.5-8.43ZM12.08 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.6-.24-.37a9.84 9.84 0 0 1-1.52-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.98 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.45-4.44 9.89-9.9 9.89Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.49 1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.08-.13-.27-.2-.57-.35Z" /></svg>
    {children}
  </a>;
}
