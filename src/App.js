import "./App.css";
import Description from "./components/Description";
import ImageCarousal from "./components/ImageCarousal";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ImageCarousal/>
      <Description/>
    </div>
  );
}

export default App;
