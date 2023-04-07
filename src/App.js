import "./App.css";
import Description from "./components/Description";
import ImageCarousal from "./components/ImageCarousal";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="max-w-[1240px] md_px-10 md_m-auto relative">
      <NavBar />
      <div className="md_flex">
        <ImageCarousal />
        <Description />
      </div>
    </div>
  );
}

export default App;
