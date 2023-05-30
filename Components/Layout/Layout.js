import { useState } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import Footer from "../Navigation/Footer/Footer";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

import classes from "./Layout.module.scss";

const Layout = ({ global, children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <div className={classes.Layout}>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler}>
        <div className={classes.Layout__DesktopOnly}>
          <NavigationItems
            links={global.Navbar.Links}
            button={global.Navbar.Button}
          />
        </div>
      </Toolbar>
      <SideDrawer
        open={showSideDrawer}
        closed={sideDrawerClosedHandler}
        links={global.Navbar.Links}
        button={global.Navbar.Button}
      />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
