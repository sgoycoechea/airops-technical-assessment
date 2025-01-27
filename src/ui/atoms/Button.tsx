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
        "flex flex-row justify-center items-center rounded-lg border border-[#09090B14] gap-1.5 py-1.5 px-3",
        "hover:bg-gray-100 text-[13px] font-semibold",
        className
      )}
      onClick={() => {
        console.log("Clicked on button");
      }}
      {...props}
    >
      {children}
    </button>
  );
};
