import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Websites from "./components/Websites";

const App = () => {
  return (
    <div id="flex" className="flex lg:flex-row flex-col">
      {/* LEFT SIDE */}
      <section
        id="left-side"
        className="bg- border-r border-black 2xl:p-5 p-2 md:h-screen 2xl:absolute relative md:left-0 sm:bottom-0 md:w-2/5 w-full overflow-y-scroll overflow-x-hidden"
      >
        <Header />
        <About />
        <div id="conditional-mobile" className="md:visible invisible">
          <Contact />
        </div>
      </section>
      {/* RIGHT SIDE */}
      <section
        id="right-side"
        className="lg:px-5 font-medium border-l border-onyx 2xl:h-screen h-full md:absolute relative right-0 sm:bottom md:w-3/5 w-full md:overflow-y-scroll overflow-x-hidden "
      >
        <div id="featured-work" class=" mx-3 pt-5 md:pl-5 pl-1 ">
          <div id="" class="mt-5 lg:pl-5">
            {/* <div id="" class="md:mr-5 mx-0"> */}
            <div class="pb-2">
              <div id="paragraph-container" class="2xl:pr-5 2xl:mr-5">
                <Websites />
                <div id="conditional-mobile" className="md:invisible visible">
                  <Contact />
                </div>
              </div>
              <br />
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
