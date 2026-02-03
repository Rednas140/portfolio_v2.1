"use client";
import Logo from "../atoms/Logo";
import NavList from "../molecules/Navlist";
import Hamburger from "../atoms/Hamburger";
import { MouseEvent, useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const navListRef = useRef<HTMLUListElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const hamburgerToggle = (event: MouseEvent<HTMLButtonElement>) => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      requestAnimationFrame(() => hamburgerRef.current?.focus());
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const handleNavKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    if (!isOpen) return;
    if (event.key !== "Tab" || event.shiftKey) return;

    const list = navListRef.current;
    if (!list) return;

    const focusables = list.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const last = focusables[focusables.length - 1];
    if (!last) return;

    if (document.activeElement === last) {
      setOpen(false);
    }
  };

  return (
    <nav className="relative flex flex-row justify-between p-4 md:px-12 lg:px-28 2xl:px-53">
      <Logo></Logo>
      <div className="flex items-center">
        <Hamburger
          handleClick={hamburgerToggle}
          isOpen={isOpen}
          buttonRef={hamburgerRef}
        ></Hamburger>
        <NavList
          isOpen={isOpen}
          listRef={navListRef}
          onKeyDown={handleNavKeyDown}
        ></NavList>
      </div>
    </nav>
  );
}
