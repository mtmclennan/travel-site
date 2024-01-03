"use client";

import Footer from "./Footer";
import { Fragment, ReactNode, useEffect, useState } from "react";
// import Image from "next/image";
import classes from "./Layout.module.scss";
import { usePathname } from "next/navigation";
import MainHeader from "./MainHeader";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const pathName = usePathname();
  // const currentRoute = router;

  return (
    <Fragment>
      <MainHeader currentRoute={pathName} />
      <main className={classes.container}>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
