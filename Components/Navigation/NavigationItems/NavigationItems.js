import NavigationItem from "./NavigationItem/NavigationItem";
import Button from "@/Components/UI/Button/Button";

import classes from "./NavigationItems.module.scss";

const NavigationItems = ({ links, button }) => (
  <div className={classes.NavItems}>
    {links
      ? links.map((link) => <NavigationItem key={link.id} item={link} />)
      : null}
    {button ? <Button button={button} /> : null}
  </div>
);

export default NavigationItems;
