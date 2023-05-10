import classes from "./Comments.module.scss";

const Comments = ({ data }) => (
  <div className={classes.Comments}>
    <h3>{data.length} Comments</h3>
    {data.map((comment) => (
      <div key={comment.id} className={classes.Comments__Comment}>
        <div>{comment.attributes.Name}</div>
        <div>
          {comment.attributes.updatedAt
            ? new Date(comment.attributes.updatedAt)
                .toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })
                .replace(/\s/g, " ")
            : null}
        </div>
        <div>{comment.attributes.Message}</div>
      </div>
    ))}
  </div>
);

export default Comments;
