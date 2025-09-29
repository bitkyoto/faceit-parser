import { useSearchParams } from "react-router";
import { NavbarOption } from "./NavbarOption";
import {
  ChartColumnIncreasing,
  House,
  Map,
  Search,
  Swords,
} from "lucide-react";

export const Navbar = () => {
  const [params] = useSearchParams();
  const id = params.get("player");
  return (
    <>
      <div className="flex gap-x-2">
        <NavbarOption title="Search" icon={<Search size={20} />} link="/" />
        <NavbarOption
          title="Main"
          icon={<House size={20} />}
          link={`/main${id ? `?player=${id}` : ""}`}
        />
        <NavbarOption
          title="Maps"
          icon={<Map size={20} />}
          link={`/maps${id ? `?player=${id}` : ""}`}
        />
        <NavbarOption
          title="VS"
          icon={<Swords size={20} />}
          link={`/comp${id ? `?player=${id}` : ""}`}
        />
        <NavbarOption
          title="Leaderboard"
          link={`/leaderboard`}
          icon={<ChartColumnIncreasing size={20} />}
        />
      </div>
    </>
  );
};
