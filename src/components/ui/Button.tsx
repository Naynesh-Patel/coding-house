import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { Link } from "react-router-dom"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#FF6400] text-white hover:bg-[#e55a00] shadow-sm shadow-orange-500/20 active:scale-[0.99]",
        primary: "bg-[#FF6400] text-white hover:bg-[#e55a00] shadow-sm shadow-orange-500/20 active:scale-[0.99]",
        secondary: "bg-[#0A192F] text-white hover:bg-[#112240] active:scale-[0.99]",
        cyan: "bg-[#00A3FF] text-white hover:bg-[#008fe0] shadow-sm shadow-cyan-500/20 active:scale-[0.99]",
        outline: "border border-slate-200 bg-white hover:bg-slate-50 text-[#0A192F]",
        ghost: "hover:bg-slate-100/80 text-[#0A192F]",
        link: "text-[#00A3FF] underline-offset-4 hover:underline",
        destructive: "bg-error-500 text-white hover:bg-error-600",
        light: "bg-white text-[#0A192F] hover:bg-slate-100 shadow-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3 text-xs",
        md: "h-10 rounded-xl px-4 text-sm",
        lg: "h-11 rounded-xl px-6 text-base",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  to?: string
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, to, href, children, ...props }, ref) => {
    if (to) {
      return (
        <Link
          to={to}
          className={cn(buttonVariants({ variant, size, className }))}
          {...(props as any)}
        >
          {children}
        </Link>
      )
    }

    if (href) {
      return (
        <a
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
          {...(props as any)}
        >
          {children}
        </a>
      )
    }

    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)
Button.displayName = "Button"

export function LinkArrow({
  to,
  children,
  className = "",
}: {
  to: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center gap-1.5 text-sm font-semibold text-[#00A3FF] hover:text-[#FF6400] transition-colors group",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  )
}

export function IconBadge({
  icon: Icon,
  children,
  className = "",
  variant = "cyan",
}: {
  icon?: LucideIcon
  children?: React.ReactNode
  className?: string
  variant?: "cyan" | "orange" | "navy" | "default" | "gradient"
}) {
  const variantStyles = {
    cyan: "bg-[#00A3FF]/10 text-[#00A3FF] ring-1 ring-inset ring-[#00A3FF]/25 group-hover:bg-[#00A3FF] group-hover:text-white transition-all duration-300",
    orange: "bg-[#FF6400]/10 text-[#FF6400] ring-1 ring-inset ring-[#FF6400]/25 group-hover:bg-[#FF6400] group-hover:text-white transition-all duration-300",
    navy: "bg-[#0A192F] text-white ring-1 ring-inset ring-white/10 group-hover:bg-[#FF6400] transition-all duration-300",
    gradient: "bg-gradient-to-br from-[#00A3FF]/15 to-[#FF6400]/15 text-[#0A192F] ring-1 ring-inset ring-[#00A3FF]/20 group-hover:from-[#00A3FF] group-hover:to-[#FF6400] group-hover:text-white transition-all duration-300",
    default: "bg-[#00A3FF]/10 text-[#00A3FF] ring-1 ring-inset ring-[#00A3FF]/25 group-hover:bg-[#00A3FF] group-hover:text-white transition-all duration-300",
  }

  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-xl",
        variantStyles[variant],
        className,
      )}
    >
      {Icon ? <Icon className="h-5 w-5" strokeWidth={1.8} /> : children}
    </span>
  )
}

export { Button, buttonVariants }
