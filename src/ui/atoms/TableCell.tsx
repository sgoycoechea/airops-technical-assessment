import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface TableCellProps extends PropsWithChildren {
  className?: string;
}

export const TableCell = ({ children, className }: TableCellProps) => {
  return <td className={twMerge("px-4 h-full", className)}>{children}</td>;
};
