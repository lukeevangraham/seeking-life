import Hero from "./Hero/Hero";
import ImageBesideText from "./ImageBesideText/ImageBesideText";

const sectionComponents = {
  "section.hero": Hero,
  "section.image-beside-text": ImageBesideText,
};

// DISPLAY A SECTION INDIVIDUALLY
const Sections = ({ sectionData }) => {

    const SectionComponent = sectionComponents[sectionData.__component];

    if (!SectionComponent) {
      return null;
    }

    // DISPLAY THE SECTION
    return <SectionComponent data={sectionData} />;
};

export default Sections;
