import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Base shadcn/ui Button, com variantes ajustadas à identidade do escritório.
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm font-medium tracking-wide transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 motion-safe:active:translate-y-px [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Bronze com texto escuro: contraste 4,6:1 (AA)
        default:
          "bg-bronze text-ink shadow-[0_1px_0_rgba(255,255,255,0.25)_inset] hover:bg-bronze-light",
        // Contorno bronze para fundos escuros
        outlineDark:
          "border border-bronze/70 text-cream hover:border-bronze-light hover:bg-bronze/10",
        // Contorno para fundos claros
        outline:
          "border border-ink/25 text-ink hover:border-bronze-ink hover:text-bronze-ink",
        ghost: "text-ink hover:bg-ink/5",
        link: "h-auto px-0 text-bronze-ink underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-11 px-5 py-2.5 text-sm",
        lg: "min-h-12 px-7 py-3 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
