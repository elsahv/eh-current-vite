import lc from "../../src/images/lc.png";
import roof from "../../src/images/roof.png";
import TestImg7 from "../../src/images/jungle.png";
import { FaReact } from "react-icons/fa";
import { SiAstro } from "react-icons/si";
import Card from "./Card";

const websites = [
  {
    title: "Laughing Coyote",
    desc1: "astro",
    desc2: "reactJS ",
    screenshot: lc,
    icon1: <FaReact />,
    icon2: <SiAstro />,
    siteLink: "https://laughingcoyote.dev/",
  },
  {
    title: "HoveyRoofing",
    desc1: "vite",
    desc2: "reactJS",
    screenshot: roof,
    icon1: <FaReact />,
    icon2: <SiAstro />,
    siteLink: "https://hoveyroofing.com/",
  },
  {
    title: "The Indoor Jungle Project",
    desc1: "php",
    desc2: "wordpress",
    screenshot: TestImg7,
    icon1: <FaReact />,
    icon2: <SiAstro />,
    siteLink: "https://theindoorjungleproject.com/",
  },
];

const Websites = () => {
  return (
    <div className="">
      {websites.map((website) => (
        <Card
          key={website.desc1}
          title={website.title}
          desc2={website.desc2}
          screenshot={website.screenshot}
          icon1={website.icon1}
          icon2={website.icon2}
          siteLink={website.siteLink}
        />
      ))}
    </div>
  );
};

export default Websites;
