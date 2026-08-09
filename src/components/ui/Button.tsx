import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "outline-light";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variantClasses = {
  primary:
    "bg-renora-gold hover:bg-renora-gold-dark text-white border-2 border-renora-gold hover:border-renora-gold-dark",
  outline:
    "bg-transparent hover:bg-renora-gold text-renora-gold hover:text-white border-2 border-renora-gold",
  "outline-light":
    "bg-transparent hover:bg-white text-white hover:text-renora-black border-2 border-white",
};

const sizeClasses = {
  sm: "px-5 py-2 text-xs",
  md: "px-7 py-3 text-xs",
  lg: "px-9 py-4 text-sm",
};

const baseClasses =
  "inline-flex items-center justify-center tracking-[0.15em] uppercase font-inter font-semibold transition-all duration-200";

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
