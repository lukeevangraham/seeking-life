import { getGlobalInfo, fetchAPI } from "@/lib/api";
import Image from "next/image";
import Layout from "@/Components/Layout/Layout";

import classes from "./index.module.scss";

export async function getStaticProps() {
  const [globalData, aboutData] = await Promise.all([
    getGlobalInfo(),
    fetchAPI(`/sl-about?populate[0]=Photo`),
  ]);
  return {
    props: { globalData, aboutData: aboutData.data.attributes },
    revalidate: 1,
  };
}

const About = ({ globalData, aboutData }) => (
  <Layout global={globalData}>
    <div className={classes.About}>
      <div className="row u-margin-medium">
        <h1>About Seeking Life</h1>
        <div className={classes.About__Body}>
          <div dangerouslySetInnerHTML={{ __html: aboutData.Body }}></div>
          <div className={classes.About__Body__Photo}>
            <Image
              src={aboutData.Photo.data.attributes.url}
              fill
              style={{ objectFit: "cover" }}
              alt={aboutData.Photo.data.attributes.alternativeText}
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
