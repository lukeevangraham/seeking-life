import Head from "next/head";
import Image from "next/image";
import { fetchAPI, getGlobalInfo, getBlogPostsInfo } from "@/lib/api";
import Layout from "@/Components/Layout/Layout";
import Comments from "@/Components/UI/Comments/Comments";
import CommentForm from "@/Components/UI/Comments/CommentForm/CommentForm";

import classes from "./index.module.scss";

export async function getStaticProps() {
  const [globalData, pageData, blogPostsData] = await Promise.all([
    getGlobalInfo(),
    fetchAPI(`/sl-home?populate=*`),
    getBlogPostsInfo(),
  ]);
  return {
    props: {
      globalData,
      pageData: pageData,
      blogPostsData,
    },
    revalidate: 1,
  };
}

export default function Home({ globalData, pageData, blogPostsData }) {
  // // CONTENTFUL HOME IMAGE ASSET ID (TO GET THE IMAGE INFO LATER)
  // const homeImageID = pageData.items[0].fields.homeImage.sys.id;

  // // CONTENTFUL'S HOME IMAGE
  // const homeImage = pageData.includes.Asset.filter(
  //   (asset) => asset.sys.id === homeImageID
  // );

  return (
    <Layout global={globalData}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.Home}>
        <div className={classes.Home__Image}>
          <Image
            src={pageData.attributes.TopImage.data.attributes.url}
            fill
            alt={pageData.attributes.TopImage.data.attributes.alternativeText}
            style={{ objectFit: "cover", objectPosition: "center" }}
            loader={() => pageData.attributes.TopImage.data.attributes.url}
          />
        </div>

        <section className="row u-margin-medium">
          {blogPostsData[0].attributes ? (
            <div className={classes.Home__BlogPost}>
              <div className={classes.Home__BlogPost__PrimaryImage}>
                <Image
                  src={
                    blogPostsData[0].attributes.PrimaryImage.data.attributes.url
                  }
                  alt={
                    blogPostsData[0].attributes.PrimaryImage.data.attributes
                      .alternativeText
                  }
                  fill
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  loader={() =>
                    blogPostsData[0].attributes.PrimaryImage.data.attributes.url
                  }
                />
              </div>
              <div className={classes.Home__BlogPost__Title}>
                {blogPostsData[0].attributes.Title}
              </div>
              <div className={classes.Home__BlogPost__Date}>
                {new Date(
                  blogPostsData[0].attributes.DatePublished.replace(/-/g, "/")
                ).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div
                className={classes.Home__BlogPost__Body}
                dangerouslySetInnerHTML={{
                  __html: blogPostsData[0].attributes.Body,
                }}
              ></div>
              <Comments data={blogPostsData[0].attributes.sl_comments.data} />
              <CommentForm postId={blogPostsData[0].id} />
            </div>
          ) : null}
        </section>
      </main>
    </Layout>
  );
}
