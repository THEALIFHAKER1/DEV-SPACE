"use client";
import Link from "next/link";
import React, { useMemo } from "react";
import { usePathname as Pathname } from "next/navigation";

const navigationLinks = [
  { path: "/", label: "Home" },
  { path: "/dashboard", label: "Dashboard" },
  { path: "/projects", label: "Projects" },
];

function Navigation() {
  const pathname = Pathname();

  const renderedLinks = useMemo(() => {
    return navigationLinks.map((link) => (
      <li
        key={link.path}
        className={`hover:underline ${
          pathname === link.path ? "text-primary" : ""
        }`}
      >
        <Link href={link.path}>{link.label}</Link>
      </li>
    ));
  }, [pathname]);

  return renderedLinks;
}

export default Navigation;
