import Header from "../components/Header";
import About from "../components/About";
import Contact from "../components/Contact";

const LeftSide = () => {
  return (
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
  );
};

export default LeftSide;
