import AgenResults from "../components/users/AgenResults";
import { Link } from "react-router-dom";
import { MdUpload } from "react-icons/md";

function Home() {
  return (
    <div className="m-0">
      <h1 className="text-3xl font-bold">Daftar SPK</h1>
      <div>
        <label htmlFor="my-modal" className="btn modal-primary m-5">
          <MdUpload />
          Upload Bulk SPK
        </label>
        <Link to="/inputspk">
          <button className="btn btn-accent m-2">Input SPK</button>
        </Link>
      </div>

      {/* <label htmlFor="my-modal" className="btn modal-button">
        open modal
      </label> */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Upload .xlsx or .csv file</h3>

          <input
            className="block mb-5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="small_size"
            type="file"
          />

          <div className="modal-action">
            <button htmlFor="my-modal" className="btn">
              Upload
            </button>
          </div>
        </div>
      </div>

      <AgenResults />
    </div>
  );
}

export default Home;
