import { NavbarOption } from "./NavbarOption";
import { ChartBar, House, Map, Search } from "lucide-react";

export const Navbar = () => {
  return (
    <>
      <div className="flex gap-x-2">
        <NavbarOption title="Search" icon={<Search size={20} />} link="/" />
        <NavbarOption title="Main" icon={<House size={20} />} link="/main" />
        <NavbarOption title="Maps" icon={<Map size={20} />} link="/maps" />
        <NavbarOption title="VS" link="/comp" />
      </div>
    </>
  );
};
