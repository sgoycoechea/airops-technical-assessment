import { Button } from "~/ui/atoms";
import { ChartIcon, CogIcon, DatabaseIcon, PlusIcon } from "~/ui/icons";

export const Sidebar = () => {
  const navigationButtons = [
    { text: "Data Name", icon: DatabaseIcon, key: "data-name-link" },
    { text: "Monitoring", icon: ChartIcon, key: "monitoring-link" },
    { text: "Settings", icon: CogIcon, key: "settings-link" },
  ];

  return (
    <aside className="flex h-full flex-col border-r border-[#E6E6E6] bg-white p-2 w-60">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center">
          <div className="size-9 bg-[#ADABFF] rounded-md"></div>
          <h3 className="font-semibold text-sm">AirOps</h3>
        </div>
        <Button className="shadow-sm">
          <span>New</span>
          <PlusIcon aria-hidden="true" />
        </Button>
        <nav>
          <ul className="flex flex-1 flex-col">
            {navigationButtons.map((navigationButton) => (
              <li key={navigationButton.key}>
                <button
                  onClick={() => {
                    console.log(`Clicked on ${navigationButton.text}`);
                  }}
                  className="w-full flex flex-row gap-2 items-center rounded-md hover:bg-gray-100 p-2"
                >
                  <navigationButton.icon
                    aria-hidden="true"
                    className="size-3 items-center justify-center flex"
                  />
                  <span className="text-[#565656] text-xs font-medium">
                    {navigationButton.text}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
