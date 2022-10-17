import DataResults from "../components/dataspk/DataResults";
import Statistik from '../components/Statistik'

function Home() {
  return (
    <div className="m-0">
      
      <h1 className="text-3xl font-bold">Statistik</h1>
      <Statistik/>
      <h1 className="text-3xl font-bold">Daftar SPK</h1>
      <DataResults />
    </div>
  );
}

export default Home;
