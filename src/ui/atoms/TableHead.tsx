import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface TableHeadProps extends PropsWithChildren {
  className?: string;
}

export const TableHead = ({ children, className }: TableHeadProps) => {
  return (
    <th className={twMerge("px-4 text-left text-sm font-bold", className)}>
      {children}
    </th>
  );
};
