import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer"

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title={"Cari-Github"} />
        <main className="container mx-auto mx-3 pb-12">Content</main>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;