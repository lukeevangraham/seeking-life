import Image from "next/image";

import classes from "./Collage.module.scss";

const Collage = ({ data }) => (
  <div className={classes.Collage}>
    <div className={classes.Collage__BgSquare} />ƒ
    <div className={classes.Collage__Images}>
      <div className={classes.Collage__Images_1}>
        <Image
          src={data.Images.data[0].attributes.url}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={classes.Collage__Images_2}>
        <Image
          src={data.Images.data[1].attributes.url}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={classes.Collage__Images_3}>
        <Image
          src={data.Images.data[2].attributes.url}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={classes.Collage__Images_4}>
        <Image
          src={data.Images.data[3].attributes.url}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  </div>
);

export default Collage;
