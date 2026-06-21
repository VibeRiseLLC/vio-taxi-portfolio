/**
 * Button.tsx — Premium button variants matching VioTaxi brand.
 * primary  = gold fill, dark text (main CTA)
 * secondary = dark border, cream text
 * ghost    = text only, muted
 */

import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  id?: string;
  ariaLabel?: string;
  className?: string;
}

const variantStyles: Record<Variant, React.CSSProperties> = {
  primary: {
    backgroundColor: "#C8963E",
    color: "#080A14",
  },
  secondary: {
    backgroundColor: "transparent",
    color: "#F2EAD8",
    border: "1.5px solid #1E2A42",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "#8A8478",
  },
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8963E] disabled:opacity-50 disabled:pointer-events-none";

export default function Button({
  children,
  variant = "primary",
  href,
  external,
  onClick,
  type = "button",
  disabled,
  id,
  ariaLabel,
  className = "",
}: ButtonProps) {
  const style = variantStyles[variant];
  const classes = `${base} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} id={id} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer" className={classes} style={style}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} id={id} aria-label={ariaLabel} className={classes} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} id={id} aria-label={ariaLabel} onClick={onClick} disabled={disabled} className={classes} style={style}>
      {children}
    </button>
  );
}
