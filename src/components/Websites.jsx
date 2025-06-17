import lc from "../../src/images/lc.png";
import wtbh from "../../src/images/wtbh.png";
import TestImg7 from "../../src/images/jungle.png";
import { FaReact, FaWordpress } from "react-icons/fa";
import { SiAstro, SiPhp, SiVite } from "react-icons/si";
import Card from "./Card";

const websites = [
  {
    title: "Laughing Coyote",
    desc: "a web design service for small businesses and creatives... and a way to push my creativity to the limits, all while exploring side hustle potential.",
    screenshot: lc,
    icon1: <SiAstro />,
    icon2: <FaReact />,
    siteLink: "https://laughingcoyote.dev/",
  },
  {
    title: "Writing to Better Health",
    screenshot: wtbh,
    icon1: <SiVite />,
    icon2: <FaReact />,
    desc: "a blog about mental health, wellness, and personal growth",
    siteLink: "https://writingtobetterhealth.com/",
  },
  {
    title: "The Indoor Jungle Project",
    desc: "a blog about houseplants, gardening, and indoor plant care",
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
          key={website.title}
          title={website.title}
          desc={website.desc}
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
