import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/Notfound";
import Login from "./pages/Login";

import NewUser from "./pages/NewUser";
import InputSpk from "./pages/InputSpk";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container mx-auto  pb-12">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/daftarbaru" element={<NewUser />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/inputspk" element={<InputSpk />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
