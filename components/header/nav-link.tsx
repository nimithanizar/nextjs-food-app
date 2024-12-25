"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

function NavLink() {
  const path = usePathname();
  return (
    <ul>
      <li>
        <Link
          href="/meals"
          className={path.startsWith("/meals") ? classes.active : ""}
        >
          {" "}
          Browse Meals
        </Link>
      </li>
      <li>
        <Link
          href="/community"
          className={path == "/community" ? classes.active : ""}
        >
          Foodies Community
        </Link>
      </li>
    </ul>
  );
}

export default NavLink;
