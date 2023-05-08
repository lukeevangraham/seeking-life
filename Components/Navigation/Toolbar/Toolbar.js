import Link from "next/link";

import classes from "./Toolbar.module.scss";

const Toolbar = ({ children }) => (
  <div className={classes.Toolbar}>
    <div className={`${classes.Toolbar__Inner} row`}>
      <Link href={"/"} className={classes.Toolbar__Inner__Brand}> Seeking Life</Link>
      {children}
    </div>
  </div>
);

export default Toolbar;
