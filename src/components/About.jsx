const items = [
  {
    paragraph:
      "I'm a web developer based in Joshua Tree, CA...My main focus involves building fast Javascript websites using: React, Astro, and Vite. I also enjoy working with WordPress themes and custom PHP code to create unique web experiences.",
  },
  {
    paragraph:
      "I became interested in programming when I wanted to bring my own passion projects to life.  I wanted to push my creativity to the limits, all while exploring side hustle potentials. I am most active with Laughing Coyote Dev, you can find me there, working with artists, creatives, and small businesses who want a site that’s easy to update, looks great, and runs fast. Whether it’s a portfolio, a blog, or a full website, I build tools that help people share their work online—without the tech headaches. I've gained all my expertise through project-learning and combining unique niches, and look forward to helping you with your next project. Feel free to take a look at my work!",
  },
];

const About = () => {
  return (
    <>
      <div id="intro" class=" ml-2 pl-1 2xl:pr-5 2xl:mr-5 mt-[90px]">
        <p class="text-lg pt-5 pb-2">
          Hi there... I'm Elsa. I build websites for small businesses and
          creatives.
        </p>
      </div>

      <section id="about-content-wrapper" class="">
        <div id="about-me" class="bg- mb-5 pb-5">
          <img
            src="https://dl.dropboxusercontent.com/scl/fi/v987mn7uciubojuyzt2l0/eh-img.jpg?rlkey=kud67wutqibhy9iwna9z50679&st=4vy6xe1e&dl=0"
            alt=""
            class="2xl:w-1/2 w-3/4 mt-2  pr-5 pl-2 opacity-90"
          />
          <div id="about" class="pl-3 pt-5 2xl:pr-5">
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
