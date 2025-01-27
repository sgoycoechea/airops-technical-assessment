import { ChartIcon, CogIcon, DatabaseIcon } from "~/ui/icons";

export const NavigationList = () => {
  const navigationButtons = [
    { text: "Data Name", icon: DatabaseIcon, key: "data-name-link" },
    { text: "Monitoring", icon: ChartIcon, key: "monitoring-link" },
    { text: "Settings", icon: CogIcon, key: "settings-link" },
  ];

  return (
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
  );
};
