import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer"
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/Notfound";

function App() {
  let judul = 'Github-Finder'
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title={judul} />
        <main className="container mx-auto mx-3 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
      <Footer/>
      </div> 
    </Router>
  );
}

export default App;
