import qs from "qs";

// export const getContentfulURL = (path = "") =>
//   `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/environments/${process.env.CONTENTFUL_ENV}/${path}`;

export const getStrapiURL = (path = "") =>
  `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}`;

export const fetchAPI = async (path) => {
  // const reqURL = getContentfulURL(path);
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data.data;
};

export const getGlobalInfo = async () => {
  const navQuery = qs.stringify({
    populate: { Navbar: { populate: "*" } },
  });

  const res = await fetchAPI(`/sl-global?${navQuery}`);

  return res.attributes;
};

export const getBlogPostsInfo = async () => {
  const blogQuery = qs.stringify({
    populate: ["PrimaryImage", "sl_comments"],
  });

  const res = await fetchAPI(`/sl-blogs?${blogQuery}`);

  return res;
};
