import Nav from "./assets/components/nav.jsx";
import Foot from "./assets/components/footer.jsx";
import Slid from "./assets/components/slideshere.jsx";
import Food from "./assets/components/food.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Slid />} />
          <Route path="/food" element={<Food />} />
          
        </Routes>
        <Foot />
      </div>
    </BrowserRouter>
  );
}

export default App;
