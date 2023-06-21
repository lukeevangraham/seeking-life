import classes from "./Footer.module.scss";

const Footer = () => (
  <div className={classes.Footer}>
    <div className={`${classes.Footer__Inner} row`}>
      <div>
        <div className={classes.Footer__Inner__Brand}>Seeking Life</div>
      </div>
      <div className={classes.Footer__Inner__Social}>
        <a href="https://www.facebook.com/geesskay1" target="_blank" rel="noreferrer">
          <svg>
            {/* <use xlinkHref="../../images/sprite.svg#icon-facebook" /> */}
            <use xlinkHref="../../images/sprite.svg#icon-facebook" />
          </svg>
        </a>
      </div>
    </div>
    <div className={`${classes.Footer__Bottom} row`}>
      <div className={classes.Footer__Bottom__Copyright}>
        Copyright &copy;{" "}
        {new Date().toLocaleDateString("en-US", { year: "numeric" })} G.S.
        Kohler
      </div>
      <div className={classes.Footer__Bottom__GWW}>
        <a href="https://grahamwebworks.com">Graham Web Works</a>
      </div>
    </div>
  </div>
);

export default Footer;
