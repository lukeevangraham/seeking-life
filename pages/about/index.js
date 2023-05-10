import Layout from "@/Components/Layout/Layout";
import { getGlobalInfo } from "@/lib/api";

import classes from "./index.module.scss";

export async function getStaticProps() {
  const [globalData] = await Promise.all([getGlobalInfo()]);
  return {
    props: { globalData },
    revalidate: 1,
  };
}

const about = ({ globalData }) => (
  <Layout global={globalData}>
    <div className={classes.About}>about</div>
  </Layout>
);

export default about;
