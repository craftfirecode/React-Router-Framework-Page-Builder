import { NavLink } from "react-router";
import { cn } from "~/lib/utils";

export const Footer = () => {
  return (
    <div className="container mx-auto py-5">
      <div className="flex gap-2 justify-center">
        <NavLink
          to="/datenschutz"
          className={({ isActive }) =>
            cn("", {
              "text-[#00c16a]": isActive,
              "hover:text-[#00c16a]": !isActive,
            })
          }
        >
          Datenschutz
        </NavLink>
        <div className="text-balck">&</div>
        <NavLink
          to="/impressum"
          className={({ isActive }) =>
            cn("", {
              "text-[#00c16a]": isActive,
              "hover:text-[#00c16a]": !isActive,
            })
          }
        >
          Impressum
        </NavLink>
      </div>
    </div>
  );
};
