import Image from "next/image";

import classes from "./Hero.module.scss";

const Hero = ({ data }) => (
  <section className={classes.Hero}>
    {/* {console.log("D: ", data)} */}
    <div className={classes.Hero__Text}>
      <h1>{data.headline}</h1>
      <h2>{data.subheading}</h2>
    </div>
    <div className={classes.Hero__MainImage}>
      <Image
        src={data.mainImage.data.attributes.url}
        style={{ objectFit: "cover" }}
        fill
      />
    </div>
  </section>
);

export default Hero;
