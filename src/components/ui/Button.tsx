import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: React.ReactNode;
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

export default function Button({ 
  variant = "primary", 
  className, 
  children, 
  as: Component = "button",
  href,
  target,
  rel,
  download,
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2";

  const variants = {
    primary: "bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-600/25 hover:from-primary-700 hover:to-accent-700 hover:shadow-primary-600/30",
    outline: "border border-slate-300 bg-white/60 backdrop-blur text-slate-800 hover:border-primary-300 hover:text-primary-700 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:border-primary-400/50 dark:hover:text-primary-300",
  };

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
      <Component 
        className={cn(baseStyles, variants[variant], className)} 
        href={href}
        target={target}
        rel={rel}
        download={download}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
}