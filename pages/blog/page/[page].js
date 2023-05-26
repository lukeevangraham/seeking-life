import { getGlobalInfo, getAllBlogPages, getBlogPage } from "@/lib/api";
import { useRouter } from "next/router";
import Layout from "@/Components/Layout/Layout";
import BlogPost from "@/Components/Blog/BlogPost/BlogPost";
import Pagination from "@/Components/UI/Pagination/Pagination";

export async function getStaticPaths() {
  const paths = await getAllBlogPages();

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const [blogPageData, globalData] = await Promise.all([
    getBlogPage(params.page),
    getGlobalInfo(),
  ]);

  return {
    props: { globalData, blogPageData },
    revalidate: 1,
  };
}

const BlogPage = ({ globalData, blogPageData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout global={globalData}>
      <main>
        <section className="row u-margin-medium">
          {blogPageData.data.map((post) => (
              <BlogPost post={post} key={post.id} />
          ))}
        </section>

        <section className="row u-margin-medium">
        <Pagination pageData={blogPageData.meta.pagination} />
        </section>
      </main>
    </Layout>
  );
};

export default BlogPage;
