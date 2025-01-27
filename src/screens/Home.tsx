import { useQuery } from "@tanstack/react-query";
import { getWorkflows } from "~/api";

export const Home = () => {
  // Another option here, if we don't want to use useQuery, is creating a Custom Hook
  const { data: workflows } = useQuery({
    queryKey: ["getWorkflows"],
    queryFn: getWorkflows,
  });

  return (
    <>
      {workflows?.map((workflow) => (
        <p key={workflow.id}>{workflow.name}</p>
      ))}
    </>
  );
};
