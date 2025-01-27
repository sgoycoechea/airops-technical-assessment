import { Dispatch, SetStateAction } from "react";
import { Button, Input } from "~/ui/atoms";
import { ArrowDownIcon, MagnifyingGlassIcon } from "~/ui/icons";

interface HeaderProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export const Header = ({ search, setSearch }: HeaderProps) => {
  return (
    <header className="h-20 border-b border-[#ECEDEF] items-center flex px-5 justify-between">
      <h1 className="font-bold text-3xl">Workflows</h1>
      <div className="flex flex-row gap-2">
        <Button>
          <span>Sort</span>
          <ArrowDownIcon />
        </Button>
        <Input
          placeholder="Search workflows"
          leftIcon={<MagnifyingGlassIcon />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
};
