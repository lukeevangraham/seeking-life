import Input from "../../Input/Input";

const CommentForm = () => (
  <form onSubmit={console.log("SUBMITTED")}>
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

export default CommentForm;
