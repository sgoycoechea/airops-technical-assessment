import { useQuery } from "@tanstack/react-query";
import { getWorkflows } from "~/api";
import { WorkflowTable, Spinner } from "~/ui/components";

const TABLE_SIZE = 7;

export const Workflows = () => {
  // Another option here, if we don't want to use useQuery, is creating a Custom Hook
  const { data: workflows } = useQuery({
    queryKey: ["getWorkflows"],
    queryFn: () => getWorkflows(TABLE_SIZE),
    staleTime: Infinity,
  });

  const sortedWorkflows = [...(workflows ?? [])].sort(
    (a, b) => b.lastUpdated - a.lastUpdated
  );

  return (
    <>
      <header className="h-20 border-b border-[#ECEDEF] items-center flex px-5">
        <h1 className="font-bold text-3xl">Workflows</h1>
      </header>
      <div className="px-5">
        {workflows ? (
          <WorkflowTable workflows={sortedWorkflows} />
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};
