import { useState } from "react";
import { getGlobalInfo, fetchAPI } from "@/lib/api";
import Layout from "@/Components/Layout/Layout";
import Input from "@/Components/UI/Input/Input";

import classes from "./index.module.scss";

export async function getStaticProps() {
  const [globalData] = await Promise.all([getGlobalInfo()]);
  return {
    props: { globalData },
    revalidate: 1,
  };
}

const Contact = ({ globalData }) => {
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
    <Layout global={globalData}>
      <main className="u-margin-medium">
        <div className={classes.Contact}>
          <div className="row">
            <h1>Contact Me</h1>
            <div>{contactForm}</div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
