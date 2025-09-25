import { useNavigate } from "react-router";
import type { ReactNode } from "react";

interface NavbarOptionProps {
  title: string;
  icon?: ReactNode;
  link?: string;
}

export const NavbarOption = ({ title, icon, link }: NavbarOptionProps) => {
  const navigate = useNavigate();

  return (
    <button
      className="flex flex-row gap-x-1 border-2 rounded-xl p-2.5 text-white dark border-border text-sm cursor-pointer hover:border-white transition duration-200"
      onClick={() => {
        if (link) {
          navigate(link);
        }
      }}
    >
      {icon}
      {title}
    </button>
  );
};
