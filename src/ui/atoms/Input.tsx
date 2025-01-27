import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  leftIcon?: ReactNode;
}

export const Input = ({ leftIcon, ...props }: InputProps) => {
  return (
    <div className="relative flex flex-row items-center gap-2">
      <div className="pointer-events-none absolute left-3"> {leftIcon}</div>

      <input
        type="text"
        className={twMerge(
          "block w-full px-3 py-1.5 border border-[#00000029] shadow-sm rounded-md placeholder:text-tertiary text-sm",
          "focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600",
          leftIcon && "pl-8"
        )}
        {...props}
      />
    </div>
  );
};
