import Home from "./pages/Home";
import About from "./pages/About";
import Manu from "./pages/Manu";
import Contact from "./pages/Contact";
import Pagenotfound from "./pages/Pagenotfound";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Manu" element={<Manu />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
