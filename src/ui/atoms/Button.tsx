import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps
  extends ComponentPropsWithoutRef<"button">,
    PropsWithChildren {
  className?: string;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={twMerge(
        "rounded-lg border flex flex-row items-center gap-1.5 py-1.5 px-3 justify-center ",
        "hover:bg-gray-100 text-[13px] font-semibold",
        className
      )}
      onClick={() => {
        console.log("Clicked on New");
      }}
      {...props}
    >
      {children}
    </button>
  );
};
