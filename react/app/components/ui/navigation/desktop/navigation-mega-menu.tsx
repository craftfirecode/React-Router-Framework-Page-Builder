import { NavLink } from "react-router";
import * as Icons from "lucide-react";
import { Menu } from "@base-ui-components/react";

export const NavigationMegaMenu = ({ items }: any) => {
  function DynamicIcon({ iconName }: { iconName: string }) {
    // @ts-ignore
    const IconComponent: any = Icons[iconName];
    return IconComponent ? <IconComponent /> : null;
  }

  return (
    <div className="py-3 px-5 gap-10 grid grid-flow-col">
      {items.children.map((child: any, index: number) => (
        <div className="flex flex-col gap-2" key={index}>
          <div className="text-[#6d7682] text-[13px]">{child.category}</div>
          {child.sub.map((sub: any, subIndex: number) => (
            <div key={subIndex}>
              {sub.invisible === false && (
                <NavLink
                  caseSensitive
                  key={subIndex}
                  className={({ isActive }) =>
                    isActive ? " text-[#00c16a]" : ""
                  }
                  to={items.url + "/" + sub.url}
                >
                  <Menu.Item className="flex items-center gap-2 py-2">
                    <DynamicIcon iconName={sub.icon} />
                    {sub.label}
                  </Menu.Item>
                </NavLink>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
