import Toolbar from "../Navigation/Toolbar/Toolbar";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";

import classes from "./Layout.module.scss";

const Layout = ({ global, children }) => (
  <div className={classes.Layout}>
    <Toolbar>
      <div className={classes.Layout__DesktopOnly}>
        <NavigationItems
          links={global.Navbar.Links}
          button={global.Navbar.Button}
        />
      </div>
    </Toolbar>
    {children}
  </div>
);

export default Layout;
