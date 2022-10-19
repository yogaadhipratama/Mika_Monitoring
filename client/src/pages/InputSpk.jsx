import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../components/layouts/Navbar";

function InputSpk() {
  //validation ============
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const regexNum = /^\d+$/;
  const initialValues = {
    nomorspk: "",
    jenisspk: "",
    mid: "",
    tid: "",
    merchant: "",
    kodeagen: "",
    alamat: "",
    kota: "",
    kodepos: "",
    pic: "",
    email: "",
    rekening: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [startDatePasang, setStartDatePasang] = useState(new Date());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value, ...startDate });
    console.log({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [errors]);

  const validate = (values) => {
    const errors = {};

    if (!startDate) {
      errors.tanggalspk = "Mohon isi tanggal";
    }

    if (!startDatePasang) {
      errors.tanggalpasang = "Mohon isi tanggal";
    }

    if (!values.nomorspk) {
      errors.nomorspk = "Mohon isi Nomor SPK";
    }
    if (!values.jenisspk) {
      errors.jenisspk = "Mohon isi Jenis SPK";
    }
    if (!values.mid) {
      errors.mid = "Mohon isi MID";
    } else if (!regexNum.test(values.mid) && values.mid.length !== 8) {
      errors.mid = "Mohon Masukkan MID dengan Benar (8 Angka)";
    } else if (values.mid.length !== 8) {
      errors.mid = "Harus 8 digit angka";
    }

    if (!values.tid) {
      errors.tid = "Mohon isi TID";
    } else if (!regexNum.test(values.tid)) {
      console.log(values.tid.length);
      errors.tid = "Mohon Masukkan TID dengan Benar (8 Angka)";
    } else if (values.tid.length !== 8) {
      errors.tid = "Harus 8 digit angka";
    }

    if (!values.merchant) {
      errors.merchant = "Mohon isi nama merchant";
    }
    if (!values.kodeagen) {
      errors.kodeagen = "Mohon isi Kode Agen";
    }
    if (!values.alamat) {
      errors.alamat = "Mohon isi alamat";
    }
    if (!values.pic) {
      errors.pic = "Mohon isi PIC";
    }
    if (!values.kota) {
      errors.kota = "Mohon isi Kota";
    }
    if (!values.kodepos) {
      errors.kodepos = "Mohon isi kodepos";
    }
    if (!values.rekening) {
      errors.rekening = "Mohon isi rekening";
    } else if (!regexNum.test(values.rekening)) {
      errors.rekening = "Mohon Masukkan rekening dengan Benar(Hanya Angka)";
    }

    if (!values.email) {
      errors.email = "Mohon isi email";
    } else if (!regex.test(values.email)) {
      errors.email = "Mohon masukkan email dengan benar";
    }

    return errors;
  };

  return (
    <div>
      <Navbar />
      <div className="m-5">
        {Object.keys(errors).length === 0 && isSubmit && (
          <div
            className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div className="flex">
              <div className="py-1">
                <svg
                  className="fill-current h-6 w-6 text-teal-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Data berhasil ditambahkan</p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Form SPK
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Isi data SPK dengan sesuai.
                </p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form onSubmit={handleSubmit} method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="nomor-spk"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Nomor SPK
                        </label>

                        <input
                          value={formValues.nomorspk}
                          type="text"
                          name="nomorspk"
                          id="nomorspk"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          onChange={handleChange}
                        />
                        <p style={{ color: "red", fontStyle: "italic" }}>
                          {errors.nomorspk}
                        </p>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="jenis-spk"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Jenis SPK
                        </label>
                        <input
                          value={formValues.jenisspk}
                          type="text"
                          name="jenisspk"
                          id="jenisspk"
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <p style={{ color: "red", fontStyle: "italic" }}>
                          {errors.jenisspk}
                        </p>
                      </div>

                      {/* /Date picker here ========================== */}
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="tanggal-spk"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Tanggal SPK
                        </label>
                        <DatePicker
                          className="mt-1 block w-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          // value={initialDate.tanggalspk}
                          name="tanggalspk"
                          id="tanggalspk"
                          selected={startDate}
                          dateFormat="dd/MM/yyyy"
                          onChange={(date) => setStartDate(date)}
                        />
                        {/* {console.log(typeof(startDate))} */}
                        <p style={{ fontStyle: "italic", color: "red" }}>
                          {errors.tanggalspk}
                        </p>
                      </div>
                      {/* ========================== */}

                      {/* /Date picker here ========================== */}
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="tanggal-pasang"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Tanggal Pemasangan EDC
                        </label>
                        <DatePicker
                          className="mt-1 block w-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          type="date"
                          name="tanggalpasang"
                          id="tanggalpasang"
                          dateFormat="dd/MM/yyyy"
                          selected={startDatePasang}
                          // value={initialDate2.tanggalpasang}
                          onChange={(date) => setStartDatePasang(date)}
                        />
                        <p style={{ fontStyle: "italic", color: "red" }}>
                          {errors.tanggalpasang}
                        </p>
                      </div>
                      {/* ========================== */}

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="MID"
                          className="block text-sm font-medium text-gray-700"
                        >
                          MID (8 digits)
                        </label>
                        <input
                          value={formValues.mid}
                          type="text"
                          name="mid"
                          id="mid"
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <p style={{ color: "red", fontStyle: "italic" }}>
                          {errors.mid}
                        </p>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="TID"
                          className="block text-sm font-medium text-gray-700"
                        >
                          TID (8 digits)
                        </label>
                        <input
                          value={formValues.tid}
                          type="text"
                          name="tid"
                          id="tid"
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <p style={{ color: "red", fontStyle: "italic" }}>
                          {errors.tid}
                        </p>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="merchant"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Nama Merchant
                        </label>
                        <input
                          value={formValues.merchant}
                          type="text"
                          name="merchant"
                          id="merchant"
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <p style={{ color: "red", fontStyle: "italic" }}>
                          {errors.merchant}
                        </p>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="kode-agen"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Kode Agen
                        </label>
                        <input
                          value={formValues.kodeagen}
                          type="text"
                          name="kodeagen"
                          id="kodeagen"
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <p style={{ color: "red", fontStyle: "italic" }}>
                          {errors.kodeagen}
                        </p>
                      </div>

                      <div className="col-span-8 sm:col-span-4">
                        <label
                          htmlFor="alamat"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Alamat
                        </label>
                        <input
                          value={formValues.alamat}
                          type="text"
                          name="alamat"
                          id="alamat"
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <p style={{ color: "red", fontStyle: "italic" }}>
                          {errors.alamat}
                        </p>
                      </div>

                      <div className="col-span-6 sm:col-span-4 ">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Kota
                        </label>
                        <input
                          value={formValues.kota}
                          type="text"
                          name="kota"
                          id="kota"
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <p style={{ color: "red", fontStyle: "italic" }}>
                          {errors.kota}
                        </p>
                      </div>

                      <div className="col-span-6 sm:col-span-3 ">
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Kode Pos
                        </label>
                        <input
                          value={formValues.kodepos}
                          type="text"
                          name="kodepos"
                          id="kodepos"
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <p style={{ color: "red", fontStyle: "italic" }}>
                          {errors.kodepos}
                        </p>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="pic"
                          className="block text-sm font-medium text-gray-700"
                        >
                          PIC
                        </label>
                        <input
                          value={formValues.pic}
                          type="text"
                          name="pic"
                          id="pic"
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <p style={{ color: "red", fontStyle: "italic" }}>
                          {errors.pic}
                        </p>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          value={formValues.email}
                          type="text"
                          name="email"
                          id="email"
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <p style={{ color: "red", fontStyle: "italic" }}>
                          {errors.email}
                        </p>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="rekening"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Rekening
                        </label>

                        <input
                          value={formValues.rekening}
                          type="text"
                          name="rekening"
                          id="rekening"
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <p style={{ color: "red", fontStyle: "italic" }}>
                          {errors.rekening}
                        </p>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Status Pemasangan
                        </label>
                        <select
                          id="country"
                          name="country"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option>Pending(Belum dilakukan pemasangan)</option>
                          <option>Berhasil</option>
                          <option>Gagal</option>
                        </select>
                      </div>
                    </div>
                    <br />
                  </div>

                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Simpan
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputSpk;
