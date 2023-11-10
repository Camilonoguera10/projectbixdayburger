import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Menu from "./components/menu/Menu";
import Booking from "./components/booking/Booking";
import Browser from "./components/browser/Browser";

function App() {
  return (
    <div className="App">

      <div class="container bookingnav">
      </div>
      <Browser />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
        <Route path="/Booking" element={<Booking />}></Route>
      </Routes>
    </div>
  );
}

export default App;
