import lc from "../../src/images/lc.png";
import wtbh from "../../src/images/wtbh.png";
import TestImg7 from "../../src/images/jungle.png";
import { FaReact, FaWordpress } from "react-icons/fa";
import { SiAstro, SiPhp, SiVite } from "react-icons/si";
import Card from "./Card";

const websites = [
  {
    title: "Laughing Coyote",
    desc1: "astro",
    desc2: "reactJS ",
    screenshot: lc,
    icon1: <SiAstro />,
    icon2: <FaReact />,
    siteLink: "https://laughingcoyote.dev/",
  },
  {
    title: "Writing to Better Health",
    desc1: "vite",
    desc2: "reactJS",
    screenshot: wtbh,
    icon1: <SiVite />,
    icon2: <FaReact />,
    siteLink: "https://writingtobetterhealth.com/",
  },
  {
    title: "The Indoor Jungle Project",
    desc1: "php",
    desc2: "wordpress",
    screenshot: TestImg7,
    icon1: <SiPhp />,
    icon2: <FaWordpress />,
    siteLink: "https://theindoorjungleproject.com/",
  },
];

const Websites = () => {
  return (
    <div className="flex flex-col space-y-8">
      {websites.map((website) => (
        <Card
          key={website.desc1}
          title={website.title}
          desc1={website.desc1}
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
