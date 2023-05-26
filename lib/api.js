import qs from "qs";
import axios from "axios";

// how many blog posts to show on one page
const preferredPageSize = 12;

// export const getContentfulURL = (path = "") =>
//   `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/environments/${process.env.CONTENTFUL_ENV}/${path}`;

export const getStrapiURL = (path = "") =>
  `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}`;

export const fetchAPI = async (path) => {
  // const reqURL = getContentfulURL(path);
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
};

export const getGlobalInfo = async () => {
  const navQuery = qs.stringify({
    populate: { Navbar: { populate: "*" } },
  });

  const res = await fetchAPI(`/sl-global?${navQuery}`);

  return res.data.attributes;
};

export const getBlogPostsInfo = async () => {
  const blogQuery = qs.stringify({
    populate: ["PrimaryImage", "sl_comments"],
    sort: ["DatePublished:desc"],
    pagination: { pageSize: 12 }
  });

  const res = await fetchAPI(`/sl-blogs?${blogQuery}`);

  return res;
};

export const getAllBlogPages = async () => {
  const blogPageQuery = qs.stringify({
    pagination: { pageSize: preferredPageSize },
  });

  // Finding out how many pages to display
  const response = await fetchAPI(`/sl-blogs?${blogPageQuery}`);

  // Building an array of page numbers for nextJs paths
  let pageArray = [];

  for (let index = 0; index < response.meta.pagination.pageCount; index++) {
    pageArray.push((index + 1).toString());
  }

  // Return a specific format the nextJs likes
  return pageArray.map((page) => {
    return {
      params: {
        page: page,
      },
    };
  });
};

export const getBlogPage = async (page) => {
  const blogPageQuery = qs.stringify({
    sort: ["DatePublished:desc"],
    populate: ["PrimaryImage", "sl_comments"],
    pagination: { page: page, pageSize: preferredPageSize },
  });

  const response = await fetchAPI(`/sl-blogs?${blogPageQuery}`);

  return response;
};
