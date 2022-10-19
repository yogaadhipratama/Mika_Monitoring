import DataResults from "../components/dataspk/DataResults";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import Statistik from "../components/Statistik";

function Home() {
  return (
    <div className="m-0">
      <Navbar />
      <div className="m-5">
        <h1 className="text-3xl font-bold">Statistik</h1>
        <Statistik />
        <h1 className="text-3xl font-bold">Daftar SPK</h1>
        <DataResults />
      </div>
    </div>
  );
}

export default Home;
