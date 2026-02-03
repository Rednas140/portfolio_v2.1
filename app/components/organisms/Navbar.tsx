"use client";
import Logo from "../atoms/Logo";
import NavList from "../molecules/Navlist";
import Hamburger from "../atoms/Hamburger";
import { MouseEvent, useState } from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const hamburgerToggle = (event: MouseEvent<HTMLButtonElement>) => {
    setOpen((prev) => !prev);
  };
  return (
    <nav className="relative flex flex-row justify-between p-4 md:px-12 lg:px-28 2xl:px-53">
      <Logo></Logo>
      <div className="flex items-center">
        <Hamburger handleClick={hamburgerToggle} isOpen={isOpen}></Hamburger>
        <NavList isOpen={isOpen}></NavList>
      </div>
    </nav>
  );
}
