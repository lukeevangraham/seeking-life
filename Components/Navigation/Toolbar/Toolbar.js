import Link from "next/link";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

import classes from "./Toolbar.module.scss";

const Toolbar = ({ children, drawerToggleClicked }) => (
  <div className={classes.Toolbar}>
    <div className={`${classes.Toolbar__Inner} row`}>
      <Link href={"/"} className={classes.Toolbar__Inner__Brand}>
        {" "}
        Seeking Life
      </Link>
      {children}
      <DrawerToggle clicked={drawerToggleClicked} />
    </div>
  </div>
);

export default Toolbar;
