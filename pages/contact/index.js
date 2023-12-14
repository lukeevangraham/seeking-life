import { useState } from "react";
import { getGlobalInfo, fetchAPI } from "@/lib/api";
import Layout from "@/Components/Layout/Layout";
import Input from "@/Components/UI/Input/Input";
import ContactForm from "@/Components/ContactForm/ContactForm";

export async function getStaticProps() {
  const [globalData] = await Promise.all([getGlobalInfo()]);
  return {
    props: { globalData },
    revalidate: 1,
  };
}

const Contact = ({ globalData }) => {
  return (
    <Layout global={globalData}>
      <main className="u-margin-medium">
        <ContactForm />
      </main>
    </Layout>
  );
};

export default Contact;
