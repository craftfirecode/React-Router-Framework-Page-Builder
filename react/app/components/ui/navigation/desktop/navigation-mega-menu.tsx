import { NavLink } from "react-router";
import * as Icons from "lucide-react";
import { Menu } from "@base-ui-components/react";

export const NavigationMegaMenu = ({ items }: any) => {
  function DynamicIcon({ iconName }: { iconName: string }) {
    // @ts-ignore
    const IconComponent: any = Icons[iconName];
    return IconComponent ? <IconComponent /> : null;
  }

  const gridColsClass = `grid-cols-${Math.min(items.children.length, 10)}`;

  return (
    <div className={`grid ${gridColsClass}`}>
      {items.children.map((child: any, index: number) => (
        <div key={index}>
          <h6>{child.category}</h6>
          {child.sub.map((sub: any, subIndex: number) => (
            <>
              {sub.invisible === false && (
                <NavLink
                  caseSensitive
                  key={subIndex}
                  className={({ isActive }) =>
                    isActive
                      ? "app-nav-link text-[#00c16a] bg-[#f1f5f9]"
                      : "app-nav-link text-[#62748e] hover:text-black"
                  }
                  to={items.url + "/" + sub.url}
                >
                  <Menu.Item className="flex items-center gap-1.5 cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900">
                    <DynamicIcon iconName={sub.icon} />
                    {sub.label}
                  </Menu.Item>
                </NavLink>
              )}
            </>
          ))}
        </div>
      ))}
    </div>
  );
};
