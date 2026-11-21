import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a7c743] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#141c19] text-white hover:bg-[#2e3b35]",
        accent: "bg-[#d5fa53] text-[#142017] hover:bg-[#c9ef43]",
        outline: "border border-[#dce1d9] bg-transparent text-[#39433d] hover:bg-white",
      },
      size: { default: "h-11 px-5", sm: "h-9 px-4 text-xs", lg: "h-13 px-7" },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
