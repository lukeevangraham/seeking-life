import { useState } from "react";
import Image from "next/image";
import Comments from "@/Components/UI/Comments/Comments";
import CommentForm from "@/Components/UI/Comments/CommentForm/CommentForm";

import classes from "./BlogPost.module.scss";

const BlogPost = ({ post }) => {
  const [statefulComments, setStatefulComments] = useState(
    post.attributes.sl_comments.data
  );

  return (
    <div className={classes.BlogPost}>
      {post.attributes.PrimaryImage.data ? (
        <div className={classes.BlogPost__PrimaryImage}>
          <Image
            src={post.attributes.PrimaryImage.data.attributes.url}
            alt={post.attributes.PrimaryImage.data.attributes.alternativeText}
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            loader={() => post.attributes.PrimaryImage.data.attributes.url}
          />
        </div>
      ) : null}
      <div className={classes.BlogPost__Title}>{post.attributes.Title}</div>
      <div className={classes.BlogPost__Date}>
        {new Date(
          post.attributes.DatePublished.replace(/-/g, "/")
        ).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </div>
      <div
        className={classes.BlogPost__Body}
        dangerouslySetInnerHTML={{
          __html: post.attributes.Body,
        }}
      ></div>
      <Comments data={statefulComments} />
      <CommentForm postId={post.id} updateComments={setStatefulComments} />
    </div>
  );
};

export default BlogPost;
