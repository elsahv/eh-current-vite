const WorkWithMe = () => {
  return (
    <section id="featured-work" class="my-5 pt-5 py-5 md:pl-5 pl-1 ">
      <div id="" class="mt-5 ">
        <div id="" class="md:mr-5 mx-0">
          <div class="pb-2 font- text-">
            <div id="paragraph-container" class="font- 2xl:pr-5 2xl:mr-5">
              <h1 id="featured work-title" class="text-slate-600 text-xl ">
                Laughing Coyote Dev
              </h1>
              <h2 class="text-3xl pt-1">
                A Web Design Service for creative small businesses
              </h2>

              <p class="pt-1 text-lg mr-5 pr-5 mt-1 ">
                My featured website is a
                <button class="mx-1 px-2 rounded  bg-munsell text-aliceBlue">
                  <a href="/featured-work">web design </a>
                </button>
                service for small businesses and creatives. I help small
                business owners start and maintain their websites, along with
                content creation. and a way to push my creativity to the limits,
                all while exploring side hustle potential. My days are spent
                creating niche websites and solutions for small business owners
                and creatives.
              </p>

              {/* <p class="pt-3">
                CREATE SHORTER VERSION::::1st paragraph, elaborate and
                explanation of lc/ Core Idea: Position your service as a digital
                atelier—a creative studio where your clients' visions are
                translated into vivid, handcrafted websites. Think of each site
                as a collaborative artwork: your client brings the inspiration,
                and you bring the technical brushstrokes "What separates web
                developers from Ai? Human innovation!
              </p> */}

              <a href="/featured-work">
                <div id="img-wrapper" class="  bg-">
                  <img
                    src="https://dl.dropboxusercontent.com/scl/fi/36vnm2e663uln6akmex4d/lc.png?rlkey=lgim54nbp0u11mviylee29hyj&st=1nuybim1&dl=0"
                    alt=""
                    class="border border-gray-300 mt-5"
                  />
                </div>
              </a>
            </div>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithMe;
