import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Index from "./pages/Index";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />}></Route>

          <Route path="/about-us" element={<About />} />
          <Route path="/for-emplyees" element={<About />} />
          <Route path="/for-emplyers" element={<About />} />
          <Route path="/for-agency" element={<About />} />
          <Route path="/contact" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
