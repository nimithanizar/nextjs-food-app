
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import classes from "./header.module.css";
import Image from "next/image";
import HeaderBackground from "./header-background";
import NavLink from "./nav-link";


function MainHeader() {

  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logo} alt="A Plate of food" priority></Image>
          Next level food
        </Link>

        <nav className={classes.nav}>
         <NavLink/>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
