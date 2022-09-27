import AgenResults from "../components/users/AgenResults";
import {Link} from 'react-router-dom'
import { MdUpload } from "react-icons/md";
// import {CSVReader} from 'react-papaprase'
function Home() {
  // const buttonRef = useRef(null)

  return (
    <div className='m-0'>
        <h1 className="">Daftar SPK</h1>
      <div>
        <button class="btn btn-primary m-5"> <MdUpload className="mr-2" />Upload Bulk SPK </button>
        <Link to="/inputspk">
          <button class="btn btn-accent m-2">Input SPK</button>
        </Link>
      </div>
      {/* SEARCH COMPONENT HERE */}
      <AgenResults />

      {/* <CSVReader ref={buttonRef}>

            </CSVReader> */}
    </div>
  );
}

export default Home;
