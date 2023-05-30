import { useState } from "react";
import Link from "next/link";
import Backdrop from "@/Components/UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";

import classes from "./SideDrawer.module.scss";

const SideDrawer = ({ open, closed, links, button }) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses.join(" ")} onClick={closed}>
        <Link href="/">
          <div className={classes.SideDrawer__Brand}>Seeking Life</div>
        </Link>
        <nav>
          <NavigationItems links={links} button={button} />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
