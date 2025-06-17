import Contact from "../components/Contact";
import Websites from "../components/Websites";

const LeftSide = () => {
  return (
    <section
      id="RIGHT-SIDE"
      className="lg:px-5 px-1 font-medium border-l border-onyx h-full md:absolute relative right-0 sm:bottom md:w-3/5 w-full md:overflow-y-scroll overflow-x-hidden "
    >
      <div id="featured-work" class=" mx-3 2xl:pl-5 md:pl-3 pl-1 ">
        <div id="" class=" 2xl:pl-5">
          <div class="pb-2">
            <div id="paragraph-container" class="2xl:pr-5 2xl:mr-5">
              <Websites />
              <div id="conditional-mobile" className="md:invisible visible">
                <Contact />
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSide;
