import { Button } from "~/ui/atoms";
import { PlusIcon } from "~/ui/icons";
import { NavigationList } from "./NavigationList";
import { AiropsTitle } from "./AiropsTitle";

export const Sidebar = () => {
  return (
    <aside className="flex h-full flex-col border-r border-[#E6E6E6] bg-white p-2 w-60">
      <div className="flex flex-col gap-2">
        <AiropsTitle />
        <Button className="shadow-sm">
          <span>New</span>
          <PlusIcon aria-hidden="true" />
        </Button>
        <NavigationList />
      </div>
    </aside>
  );
};
