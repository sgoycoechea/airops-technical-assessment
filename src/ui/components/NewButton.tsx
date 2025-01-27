import { PlusIcon } from "~/ui/icons";

export const NewButton = () => {
  return (
    <button
      type="button"
      className="rounded-lg border flex flex-row items-center gap-1.5 p-1.5 justify-center hover:bg-gray-100 text-[13px] font-inter shadow-sm"
      onClick={() => {
        console.log("Clicked on New");
      }}
    >
      <span className="text-primary">New</span>
      <PlusIcon />
    </button>
  );
};
