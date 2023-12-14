import classes from "./Quote.module.scss";

const Quote = ({ data }) => (
  <div className="row">
    <div className={classes.Quote}>
      <div dangerouslySetInnerHTML={{ __html: data.body }} />
      <h3>{data.reference}</h3>
    </div>
  </div>
);

export default Quote;
