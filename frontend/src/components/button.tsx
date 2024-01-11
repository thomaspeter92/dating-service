import React from "react";
import {cva, VariantProps} from 'class-variance-authority'
import { cn } from "../lib/utils";
import { Icons } from "./icons";


const buttonStyles = cva('font-medium capitalize block rounded-lg flex items-center justify-center gap-2',{
  variants: {
    intent: {
      primary: "bg-rose-500 text-white",
      text: "text-rose-400"
    },
    size: {
      sm: 'px-3 py-1 text-sm',
      md: 'px-3 py-2',
      lg: 'px-3 py-3'
    },
    rounded: {
      full: 'rounded-full'
    }
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md',

  }

})

type Props = {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  icon?: keyof typeof Icons
  onClick?: () => void
};

const Button = ({ children, type, intent, size, rounded, icon, onClick }: Props & VariantProps<typeof buttonStyles>) => {
  
  const Icon = Icons[icon as keyof typeof Icons]
  
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(buttonStyles({intent, size, rounded}))}
    >
      {icon ? 
      <Icon size={20} />
    : null}
      {children}
    </button>
  );
};

export default Button;
