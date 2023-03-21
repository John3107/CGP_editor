import headline from "../assets/images/headline.svg";
import image from "../assets/images/image.svg";
import paragraph from "../assets/images/paragraph.svg";

export const iconsSearcher = (iconTitle) => {
  switch (iconTitle) {
    case "headline": {
      return headline;
    }
    case "image": {
      return image;
    }
    case "paragraph": {
      return paragraph;
    }
    default: {
      return "";
    }
  }
};
