import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

const App = () => {
  return (
    <div id="flex" className="flex lg:flex-row flex-col">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default App;
