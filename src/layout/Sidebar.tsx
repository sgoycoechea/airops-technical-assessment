export const Sidebar = () => {

  const navigationButtons = [
    {text: "Data Name", icon: <></>, key: "data-name-link"},
    {text: "Monitoring", icon: <></>, key: "monitoring-link"},
    {text: "Settings", icon: <></>, key: "settings-link"}
  ]

  return (
    <aside className="flex h-full flex-col border-r border-gray-200 bg-white px-6 ring-1 ring-white/5 md:w-72">
      <nav>
      <ul className="flex flex-1 flex-col gap-y-7">
        {navigationButtons.map((navigationButton) => 
          (<li key={navigationButton.key}>
            <button
              onClick={() => { console.log(`Clicked on ${navigationButton.text}`)}}
              className=""
            >
              {navigationButton.text}
            </button>
          </li>)
        )}
      </ul>
      </nav>
    </aside>
  );
};
