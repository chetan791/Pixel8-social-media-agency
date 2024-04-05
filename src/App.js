import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import ImageSlider from "./components/Slider";
import { Middle } from "./pages/Middle";

function App() {
  let arr = [
    "https://wallpapers-clan.com/wp-content/uploads/2023/11/marvel-iron-man-in-destroyed-suit-desktop-wallpaper-preview.jpg",
    "https://wallpapers.com/images/featured/iron-man-ouqxo5w2b59h0042.jpg",
  ];
  return (
    <div>
      <Navbar />
      <Home />
      <ImageSlider images={arr} interval={4000} />
      <Middle />
    </div>
  );
}

export default App;
