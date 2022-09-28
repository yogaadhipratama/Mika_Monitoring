import DatePicker from "react-datepicker";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

function InputSpk() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div>
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
              <form action="#" method="POST">
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
                          type="text"
                          name="nomor-spk"
                          id="nomor-spk"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="jenis-spk"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Jenis SPK
                        </label>
                        <input
                          type="text"
                          name="jenis-spk"
                          id="jenis-spk"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
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
                          selected={startDate}
                          dateFormat="dd/MM/yyyy"
                          onChange={(date: Date) => setStartDate(date)}
                        />
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
                          selected={startDate}
                          dateFormat="dd/MM/yyyy"
                          onChange={(date: Date) => setStartDate(date)}
                        />
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
                          type="text"
                          name="MID"
                          id="MID"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="TID"
                          className="block text-sm font-medium text-gray-700"
                        >
                          TID (8 digits)
                        </label>
                        <input
                          type="text"
                          name="TID"
                          id="TID"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="merchant"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Nama Merchant
                        </label>
                        <input
                          type="text"
                          name="merchant"
                          id="merchant"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="ode-agen"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Kode Agen
                        </label>
                        <input
                          type="text"
                          name="kode-agen"
                          id="kode-agen"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="alamat"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Alamat
                        </label>
                        <input
                          type="text"
                          name="alamat"
                          id="alamat"
                     
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Kota
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                     
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Kode Pos
                        </label>
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                    
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="pic"
                          className="block text-sm font-medium text-gray-700"
                        >
                          PIC
                        </label>
                        <input
                          type="text"
                          name="pic"
                          id="pic"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="rekening"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Nomor Rekening (4 Digit Terakhir)
                        </label>
                        <input
                          type="text"
                          name="rekening"
                          id="rekening"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <br />
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
                        <option>Berhasil</option>
                        <option>Gagal</option>
                        <option>Pending(Belum dilakukan pemasangan)</option>
                      </select>
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
