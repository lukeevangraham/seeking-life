import { useState } from "react";
import axios from "axios";
import Input from "../../Input/Input";
import { getStrapiURL } from "@/lib/api";

import classes from "./CommentForm.module.scss";

const CommentForm = ({ postId, updateComments }) => {
  const [commentStatus, setCommentStatus] = useState(null);

  const postComment = async (e) => {
    e.preventDefault();

    setCommentStatus(1);

    const res = await axios.post(`${getStrapiURL("/comments")}`, {
      data: {
        Name: e.target.name.value,
        Email: e.target.email.value,
        Message: e.target.message.value,
        sl_blog: postId,
      },
    });

    const result = await res;

    // NOW WE STORE THE NEW COMMENT ID WITH IT'S BLOG
    const afterBlog = await postRes(result);

    updateComments(afterBlog.data.data.attributes.sl_comments.data);

    result.status === 200 ? setCommentStatus(200) : null;

    const emailToGeoffRes = await fetch("/api/comment", {
      body: JSON.stringify({
        Name: e.target.name.value,
        Email: e.target.email.value,
        Message: e.target.message.value,
        sl_blog: postId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const emailToGeoffResult = await emailToGeoffRes.json();
  };

  const postRes = async (commentInfo) => {
    const req = await axios.put(
      `${getStrapiURL(`/sl-blogs/${postId}?populate=*`)}`,
      {
        data: {
          sl_comments: {
            connect: [commentInfo.data.data.id],
          },
        },
      }
    );

    const res = await req;
    return res;
  };

  let morphingForm = "";

  switch (commentStatus) {
    // case 200:
    //   morphingForm = (
    //     <div>
    //       <h3>Your comment was successfully added</h3>
    //     </div>
    //   );
    //   break;
    case 1:
      morphingForm = <div>Sending...</div>;
      break;
    default:
      morphingForm = (
        <form onSubmit={postComment} className={classes.FormParent__Form}>
          <Input
            elementType="input"
            name="name"
            placeholder="Your Name"
            required={true}
            type="text"
          />
          <Input
            elementType="input"
            name="email"
            placeholder="Your Email (never made public)"
            required={true}
            type="email"
          />
          <Input
            elementType="textarea"
            name="message"
            placeholder="Your Message"
            required={true}
          />
          <button>Submit</button>
        </form>
      );
      break;
  }

  return (
    <div className={classes.FormParent}>
      <h3>Leave a comment</h3>
      {morphingForm}
    </div>
  );
};

export default CommentForm;
