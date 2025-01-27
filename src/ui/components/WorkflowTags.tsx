import { WorkflowTag } from "~/api";
import { PlusIcon } from "../icons";
import { twMerge } from "tailwind-merge";

interface WorkflowTagsProps {
  tags: WorkflowTag[];
}

export const WorkflowTags = ({ tags }: WorkflowTagsProps) => {
  return (
    <button
      type="button"
      className={twMerge(
        " flex flex-row items-center rounded-2xl border border-[#09090B14] px-2.5 py-[5px] gap-2",
        "text-[13px] font-semibold hover:bg-gray-100"
      )}
    >
      {tags.length === 0 ? (
        <>
          <PlusIcon className="text-[#808593]" />
          <span className="text-[#808593]">Add tag</span>
        </>
      ) : (
        <>
          <div className="flex flex-row gap-1">
            {tags.map((tag) => (
              <div
                key={`square-colored-${tag.color}`}
                className="size-2 rounded-sm"
                style={{ backgroundColor: tag.color }}
              />
            ))}
          </div>
          <span className="capitalize">
            {tags.length === 1 ? tags[0].name : `${tags.length} tags`}
          </span>
        </>
      )}
    </button>
  );
};
