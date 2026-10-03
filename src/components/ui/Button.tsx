import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: React.ReactNode;
  as?: any;
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
  const baseStyles = "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm",
    outline: "border border-slate-300 bg-transparent text-slate-900 hover:bg-slate-100",
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