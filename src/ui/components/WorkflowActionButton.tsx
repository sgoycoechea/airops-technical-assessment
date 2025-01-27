import { PropsWithChildren } from "react";

interface WorkflowActionButtonProps extends PropsWithChildren {
  name: string;
  ariaLabel: string;
}

export const WorkflowActionButton = ({
  name,
  ariaLabel,
  children,
}: WorkflowActionButtonProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="rounded-md items-center justify-center size-6 hover:opacity-60 bg-[#09090B0A] flex"
      onClick={() => {
        console.log(`Clicked on ${name}`);
      }}
    >
      {children}
    </button>
  );
};
