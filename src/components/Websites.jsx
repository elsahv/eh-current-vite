import lc from "../../src/images/lc.png";
import roof from "../../src/images/roof.png";
import TestImg7 from "../../src/images/jungle.png";
import { FaReact } from "react-icons/fa";
import { SiAstro } from "react-icons/si";

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
        <div key={website.desc1} className="mt-5 pt-5">
          <div className="pl-2 text-gray-600 text-lg flex items-center font bold pt-5 pb-1 mt-5">
            <div id="icon" className="">
              {website.icon1}
            </div>
            <div className="">{website.desc1}</div>
            <div id="icon" className="pl-5 ">
              {" "}
              {website.icon2}
            </div>
            <div className=""> {website.desc2}</div>
          </div>
          <a href={website.siteLink}>
            <img
              src={website.screenshot}
              alt="screenshot!!"
              class="border border-purple-300"
            />
          </a>
          <p class="text-2xl font-medium md:px-5 px-2 pt-4">
            a web design service for small businesses and creatives... and a way
            to push my creativity to the limits, all while exploring side hustle
            potential.{" "}
            <span className="font-semibold">
              <a href={website.siteLink}>visit {website.title} </a>
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Websites;
