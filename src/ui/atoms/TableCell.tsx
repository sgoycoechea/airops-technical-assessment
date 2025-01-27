import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface TableCellProps
  extends ComponentPropsWithoutRef<"td">,
    PropsWithChildren {
  className?: string;
}

export const TableCell = ({
  children,
  className,
  ...props
}: TableCellProps) => {
  return (
    <td className={twMerge("px-4 h-full", className)} {...props}>
      {children}
    </td>
  );
};
