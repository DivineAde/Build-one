import React from "react"
import { BiHomeAlt2 } from "react-icons/bi"
import { FiSearch } from "react-icons/fi"
import { IoPricetagsOutline } from "react-icons/io5"
import { PiChatCircleBold } from "react-icons/pi"
import { routes } from "@/routes"



export const NavDesktop = () => {

  return (
    <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
      {routes.map((route) => {
        const { Icon, href, title } = route;
        return (
          <li key={route.href}>
            <a
              href={href}
              className="flex items-center gap-1 hover:text-neutral-400 transition-all"
            >
              <Icon />
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};