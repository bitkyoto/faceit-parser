import { NavbarOption } from "./NavbarOption";
import { ChartBar, House, Map, Search } from "lucide-react";
interface NavbarOptions {
  setCurrentOption: (option: string) => void;
}
export const Navbar = ({ setCurrentOption }: NavbarOptions) => {
  return (
    <>
      <div className="flex gap-x-2">
        <NavbarOption title="Search" icon={<Search size={20} />} link="/" />
        <NavbarOption
          title="Main"
          icon={<House size={20} />}
          link="/main"
          onClick={() => setCurrentOption("main")}
        />
        <NavbarOption
          title="Maps"
          icon={<Map size={20} />}
          onClick={() => setCurrentOption("maps")}
        />
        <NavbarOption
          title="Stats"
          icon={
            <ChartBar size={20} onClick={() => setCurrentOption("stats")} />
          }
        />
      </div>
    </>
  );
};
