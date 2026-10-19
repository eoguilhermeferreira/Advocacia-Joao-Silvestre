import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex min-h-12 w-full min-w-0 rounded-sm border border-input bg-white px-3.5 py-2.5 text-base text-ink shadow-xs transition-[border-color,box-shadow] outline-none placeholder:text-muted-ink/80 focus-visible:border-bronze-ink focus-visible:ring-2 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
