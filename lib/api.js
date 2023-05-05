export const getContentfulURL = (path = "") =>
  `${process.env.CONTENTFUL_URL || "https://cdn.contentful.com"}${path}`;

export const fetchAPI = async (path) => {
  const reqURL = getContentfulURL(path);
  const res = await fetch(reqURL);
  const data = await res.json();
  console.log("D: ", data);
  return data;
};
