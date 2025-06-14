const items = [
  {
    // ABOUT ME
    paragraph:
      "I'm a web developer based in Joshua Tree, CA...I became interested in programming when I wanted to bring my own passion projects to life, and did so using by learning javascript.",
  },
  // ABOUT PROJECTS- (how they help)
  {
    paragraph:
      "wEach website project is built with my own interests in mind. a way to push my creativity to the limits, all while exploring side hustle potential. My days are spent creating niche websites and solutions for small business owners and creatives. Expertise gained through project learning and combining unique niches.  Tagline: 'the world is so niched now, I can help people combine their own random niches, and create unique niche!!!-By experiencing the process of building up these websites, I've gained not only an ability to work with unique colors, and to learn the skills needed to become a very developer.' ",
  },
];

const About = () => {
  return (
    <>
      <div id="intro" class=" ml-2 pl-1 2xl:pr-5 2xl:mr-5 mt-[90px]">
        <p class="text-lg pt-5 pb-2">
          Hi there, I'm Elsa. I enjoy{" "}
          <span className="underline">
            <a href="/#about-me"> creating websites </a>
          </span>
          and combining niches and creating art.
        </p>
      </div>

      <section id="about-content-wrapper" class="">
        <div id="about-me" class="bg- mb-5 pb-5">
          <img
            src="https://dl.dropboxusercontent.com/scl/fi/v987mn7uciubojuyzt2l0/eh-img.jpg?rlkey=kud67wutqibhy9iwna9z50679&st=4vy6xe1e&dl=0"
            alt=""
            class="2xl:w-1/2 w-3/4 mt-2  pr-5 pl-2 opacity-90"
          />
          <div id="about" class="pl-3 pt-5 pr-5">
            <h3 class="font-bold text-xl">About</h3>
            {items.map((item) => (
              <div>
                <p className="pb-2 mb-3">{item.paragraph} </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
