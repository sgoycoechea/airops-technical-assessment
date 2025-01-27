import AirOps from "@airops/airops-js";

const airopsInstance = new AirOps();

const airopsAppID = import.meta.env.VITE_AIROPS_APP_ID;
const airopsAppVersion = import.meta.env.VITE_AIROPS_APP_VERSION;

interface WorkflowTag {
  name: string;
  color: string;
}

interface Workflow {
  id: number;
  lastUpdated: number;
  name: string;
  tags: WorkflowTag[];
  type: string;
}

interface GetWorkflowsOutput {
  count: number;
  data: Workflow[];
}

export const getWorkflows = async () => {
  const response = await airopsInstance.apps.execute({
    appId: airopsAppID,
    version: airopsAppVersion,
    payload: {
      inputs: {
        count: 3,
      },
    },
  });

  const result = await response.result();
  const output = result.output as GetWorkflowsOutput;

  return output.data;
};
