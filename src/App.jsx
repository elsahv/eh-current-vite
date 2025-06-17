import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Websites from "./components/Websites";

const App = () => {
  return (
    <div id="flex" className="flex lg:flex-row flex-col">
      <section
        id="LEFT-SIDE"
        className="bg- border-r border-black 2xl:p-5 p-2 md:h-screen 2xl:absolute relative md:left-0 sm:bottom-0 md:w-2/5 w-full overflow-y-scroll overflow-x-hidden"
      >
        <div id="left-side-container" class="pl-1 ml-1 2xl:mr-4 mr-3">
          <Header />
          <About />
          <div id="conditional-mobile" className="md:visible invisible">
            <Contact />
          </div>
        </div>
      </section>
      <section
        id="RIGHT-SIDE"
        className="bg-red- lg:px-5 px-1 font-medium border-l border-onyx 2xl:h-screen h-full md:absolute relative right-0 sm:bottom md:w-3/5 w-full md:overflow-y-scroll overflow-x-hidden "
      >
        <div id="featured-work" class=" mx-3 pt-5 2xl:pl-5 md:pl-3 pl-1 ">
          <div id="" class="mt-5 lg:pl-5">
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
    </div>
  );
};

export default App;
