import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
// Icons
import IconHome from "../assets/svg/IconBxsHome";
import IconBookOpen from "../assets/svg/IconBookOpen";
import IconUser from "../assets/svg/IconUser";
import IconLightBulb from "../assets/svg/IconLightBulb";
import IconDev from "../assets/svg/IconDev";

const Header = () => {
  return (
    <div className="absolute navbar flex flex-row justify-between px-12 text-2xl bg-primary uppercase ">
      <NavLink
        to="/"
        className="flex items-center gap-x-1 hover:text-accent font-bold"
      >
        <IconDev />
        <span className="hidden md:block">Shand Ivan</span>
      </NavLink>
      <div>
        <ul className="flex gap-x-5 items-center">
          <NavLink
            to="/"
            className="flex items-center gap-x-1 hover:text-accent"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="home"
          >
            <Tooltip id="my-tooltip" />
            <IconHome />
            <span className="hidden md:block">Home</span>
          </NavLink>

          <NavLink
            to="/profile"
            className="flex items-center gap-x-1 hover:text-accent"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Profile"
          >
            <Tooltip id="my-tooltip" />
            <IconUser height="0.85em" />
            <span className="hidden md:block">Profile</span>
          </NavLink>
          <NavLink
            to="/journal"
            className="flex items-center gap-x-2 hover:text-accent"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Journal"
          >
            <Tooltip id="my-tooltip" />
            <IconBookOpen />
            <span className="hidden md:block">Journal</span>
          </NavLink>
          <NavLink
            to="/reflection"
            className="flex items-center gap-x-1 hover:text-accent md:-ml-2"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Reflection"
          >
            <Tooltip id="my-tooltip" />
            <IconLightBulb height="0.85em" />
            <span className="hidden md:block">Reflection</span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
