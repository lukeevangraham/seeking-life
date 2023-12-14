import { useState } from "react";
import Input from "../UI/Input/Input";

import classes from "./ContactForm.module.scss";

const ContactForm = () => {
  const [messageStatus, setMessageStatus] = useState();

  const sendMessage = async (e) => {
    e.preventDefault();

    setMessageStatus(1);

    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    result.status === 200 ? setMessageStatus(200) : null;
  };

  let contactForm = "";

  switch (messageStatus) {
    case 0:
      break;
    case 200:
      contactForm = (
        <div>
          <h3>Your message was successfully delivered</h3>
        </div>
      );
      break;
    case 1:
      contactForm = <div>Sending...</div>;
      break;
    default:
      contactForm = (
        <>
          <form onSubmit={sendMessage} className={classes.Contact__Form}>
            <Input
              elementType="input"
              name="name"
              placeholder={"Your Name"}
              required={true}
              type={"text"}
            />
            <Input
              elementType="input"
              name="email"
              placeholder={"Your Email"}
              required={true}
              type={"email"}
            />
            <Input
              elementType="textarea"
              name="message"
              placeholder={"Your Message"}
              required={true}
            />
            <button>Submit</button>
          </form>
        </>
      );
      break;
  }

  return (
    <div className={classes.Contact}>
      <div className="row">
        <h2>Get in touch with Geoff</h2>
        <p>My door is open. What's on your mind?</p>
        <p>To write your comments and questions to Geoff use the form below</p>
        <div>{contactForm}</div>
      </div>
    </div>
  );
};

export default ContactForm;
