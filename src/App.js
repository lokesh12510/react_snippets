import logo from "./logo.svg";
import "./App.css";
import ImageCarousel from "./Components/Carousel/ImageCarousel";
import HorizontalScroll from "./Components/HorizontalScroll/HorizontalScroll";

function App() {
  return (
    <div className="App">
      <ImageCarousel />
      <ImageCarousel />
      <ImageCarousel />
      <ImageCarousel />
      <ImageCarousel />
      <ImageCarousel />
      <HorizontalScroll />
    </div>
  );
}

export default App;
