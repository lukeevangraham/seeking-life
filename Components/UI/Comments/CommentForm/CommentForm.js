import { useState } from "react";
import axios from "axios";
import Input from "../../Input/Input";
import { getStrapiURL } from "@/lib/api";

const CommentForm = ({ postId }) => {
  const [commentStatus, setCommentStatus] = useState(null);

  const postComment = async (e) => {
    e.preventDefault();

    setCommentStatus(1);

    console.log("Here: ", e.target.name.value);

    const res = await axios.post(`${getStrapiURL("/comments")}`, {
      data: {
        Name: e.target.name.value,
        Email: e.target.email.value,
        Message: e.target.message.value,
        sl_blog: postId,
      },
    });

    const result = await res;
    console.log("res: ", result);
  };

  return (
    <form onSubmit={postComment}>
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
        placeholder="Your Email"
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
};

export default CommentForm;
