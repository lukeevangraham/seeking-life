export const getContentfulURL = (path = "") =>
  `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/environments/${process.env.CONTENTFUL_ENV}/${path}`;

export const fetchAPI = async (path) => {
  console.log();
  const reqURL = getContentfulURL(path);
  const res = await fetch(reqURL);
  const data = await res.json();
  console.log("D: ", data);
  return data;
};
