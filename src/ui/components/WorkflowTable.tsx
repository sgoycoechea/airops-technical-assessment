import { Workflow } from "~/api";
import { WorkflowTags } from "./WorkflowTags";
import { TableCell, TableHead } from "~/ui/atoms";
import { getRelativeTime } from "~/utils";
import { WorkflowActionButton } from "./WorkflowActionButton";
import { PencilIcon, TrashIcon } from "../icons";

interface WorkflowTableProps {
  workflows: Workflow[];
}

export const WorkflowTable = ({ workflows }: WorkflowTableProps) => {
  if (workflows.length === 0) return <p className="mt-8">No workflows found</p>;

  return (
    <table className="w-full">
      <thead className="border-b h-14">
        <tr>
          <TableHead className="w-[107px]">Type</TableHead>
          <TableHead className="grow">Name</TableHead>
          <TableHead className="w-[180px]">Tags</TableHead>
          <TableHead className="w-[150px]">Last Updated</TableHead>
          <TableHead className="w-[88px]">Actions</TableHead>
        </tr>
      </thead>
      <tbody>
        {workflows?.map((workflow) => (
          <tr key={workflow.id} className="h-16 border-b border-[#09090B14]">
            <TableCell className="capitalize text-[13px] text-[#868686] font-medium">
              {workflow.type}
            </TableCell>
            <TableCell className="text-sm font-medium">
              {workflow.name}
            </TableCell>
            <TableCell>
              <WorkflowTags tags={workflow.tags} />
            </TableCell>
            <TableCell className="text-[13px] text-[#808593]">
              {getRelativeTime(workflow.lastUpdated)}
            </TableCell>
            <TableCell>
              <div className="flex flex-row items-center gap-2">
                <WorkflowActionButton
                  name="Edit workflow"
                  ariaLabel="Edit workflow"
                >
                  <PencilIcon />
                </WorkflowActionButton>
                <WorkflowActionButton
                  name="Delete workflow"
                  ariaLabel="Delete workflow"
                >
                  <TrashIcon />
                </WorkflowActionButton>
              </div>
            </TableCell>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
