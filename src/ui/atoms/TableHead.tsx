import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface TableHeadProps
  extends ComponentPropsWithoutRef<"th">,
    PropsWithChildren {
  className?: string;
}

export const TableHead = ({
  children,
  className,
  ...props
}: TableHeadProps) => {
  return (
    <th
      className={twMerge("px-4 text-left text-sm font-bold", className)}
      {...props}
    >
      {children}
    </th>
  );
};
