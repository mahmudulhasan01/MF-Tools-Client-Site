import { Routes, Route } from "react-router-dom";
import "animate.css";
// import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import Shop from "./Pages/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
