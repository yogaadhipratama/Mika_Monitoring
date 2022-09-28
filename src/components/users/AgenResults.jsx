import { Link } from "react-router-dom";
import { MdUpload } from "react-icons/md";
import React, { useState } from "react";
import { read, utils, writeFile } from "xlsx";
import * as XLSX from 'xlsx';

function UserResults() {
  const [spk, setSpk] = useState([]);

  const handleImport = ($event) => {
    const files = $event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = event.target.result;
        const wb = XLSX.read(data, {type: 'buffer'});
        const sheets = wb.SheetNames;

        // let sheets2 = XLSX.read(sheets, {raw: false})

        console.log(sheets)

        if (sheets.length) {
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          setSpk(rows);
        }

        // if (sheets2.length) {
        //   const rows = utils.sheet_to_json(wb.Sheets[sheets2[0]]);
        //   setSpk(rows);
        // }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  // NO	NO SPK	JENIS SPK	TANGGAL SPK	TANGGAL PEMASANGAN EDC	MID	TID	NAMA MERCHANT	KODE AGEN	ALAMAT	KOTA	KODE POS	PIC	NO TELPON	EMAIL

  const handleExport = () => {
    const headings = [
      [
        "No",
        "Nomor SPK",
        "Jenis SPK",
        "Tanggal SPK",
        "Tanggal Pasang EDC",
        "MID",
        "TID",
        "Nama Merchant",
        "Kode Agen",
        "Alamat",
        "Kota",
        "Kode Pos",
        "PIC",
        "No Telepon",
        "Email",
      ],
    ];
    const wb = utils.book_new();
    const ws = utils.json_to_sheet([]);
    console.log(ws)
    utils.sheet_add_aoa(ws, headings);
    utils.sheet_add_json(ws, spk, { origin: "A2", skipHeader: true });
    utils.book_append_sheet(wb, ws, "Report");
    writeFile(wb, "SPK file.xlsx");
  };

  return (
    <h1>
      <div>
        <label htmlFor="my-modal" className="btn modal-primary m-5">
          <MdUpload />
          Upload Bulk SPK
        </label>
        <Link to="/inputspk">
          <button className="btn btn-accent m-2">Input SPK</button>
        </Link>
      </div>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Upload .xlsx or .csv file</h3>

          {/* ================================== */}
          <div className="custom-file">
            <input
              type="file"
              name="file"
              className="custom-file-input"
              id="inputGroupFile"
              required
              onChange={handleImport}
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            />
            <label className="custom-file-label" htmlFor="inputGroupFile">
              Choose file
            </label>
          </div>
          {/* ================================== */}

          {/* <input
            className="block mb-5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="small_size"
            type="file"
            id="inputGroupFile"
            required
            onChange={handleImport}
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          /> */}

          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>

      {/* TABLE ============================================== */}
      {/* // NO	NO SPK	JENIS SPK	TANGGAL SPK	TANGGAL PEMASANGAN EDC	MID	TID	NAMA MERCHANT	KODE AGEN	ALAMAT	KOTA	KODE POS	PIC	NO TELPON	EMAIL */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>No</th>
              <th>Nomor SPK</th>
              <th>Jenis SPK</th>
              <th>Tanggal SPK</th>
              <th>Tanggal Pasang EDC</th>
              <th>MID</th>
              <th>TID</th>
              <th>Nama Merchant</th>
              <th>Kode Agen</th>
              <th>Alamat Agen</th>
              <th>Kota</th>
              <th>Kode Pos</th>
              <th>PIC</th>
              <th>Telepon</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {spk.length ? (
              spk.map((spk, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{spk.NO}</td>
                  <td>{spk.NO_SPK}</td>
                  <td>{spk.JENIS_SPK}</td>
                  <td>{spk.TANGGAL_SPK}</td>
                  <td>{spk.TANGGAL_PASANG_EDC}</td>
                  <td>{spk.MID}</td>
                  <td>{spk.TID}</td>
                  <td>{spk.NAMA_MERCHANT}</td>
                  <td>{spk.KODE_AGEN}</td>
                  <td>{spk.ALAMAT_AGEN}</td>
                  <td>{spk.KOTA}</td>
                  <td>{spk.KODE_POS}</td>
                  <td>{spk.PIC}</td>
                  <td>{spk.NO_TELEPON}</td>
                  <td>{spk.EMAIL}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No SPK Found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </h1>
  );
}

export default UserResults;
