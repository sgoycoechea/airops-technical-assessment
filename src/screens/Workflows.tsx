import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getWorkflows } from "~/api";
import { WorkflowTable, Spinner, Header } from "~/ui/components";

const NUM_WORKFLOWS = 7;

export const Workflows = () => {
  const [search, setSearch] = useState("");

  // Another option here, if we don't want to use the TanStack Query library, is creating a Custom Hook
  const { data: workflows, isLoading } = useQuery({
    queryKey: ["getWorkflows"],
    queryFn: () => getWorkflows(NUM_WORKFLOWS),
    staleTime: Infinity,
  });

  const filteredWorkflows = workflows?.filter((workflow) =>
    workflow.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedWorkflows = [...(filteredWorkflows ?? [])].sort(
    (a, b) => b.lastUpdated - a.lastUpdated
  );

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <div className="px-5">
        {isLoading ? (
          <Spinner />
        ) : (
          <WorkflowTable workflows={sortedWorkflows} />
        )}
      </div>
    </>
  );
};
