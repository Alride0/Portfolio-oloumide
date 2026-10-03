import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "learning";
}

export default function Badge({ children, className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-indigo-100 text-indigo-800 border border-indigo-200",
    learning: "bg-amber-100 text-amber-800 border border-amber-200",
  };

  return (
    <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-medium font-mono", variants[variant], className)} {...props}>
      {children}
    </span>
  );
}