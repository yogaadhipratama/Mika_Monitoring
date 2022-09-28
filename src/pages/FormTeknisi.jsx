import DatePicker from "react-datepicker";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

function FormTeknisi() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Form Teknisi
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Isi data pemasangan dengan sesuai.
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
                        for="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nama Agen
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                  
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nama Contact Person
                      </label>
                      <input
                        type="text"
                        name="contact-name"
                        id="contact-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        for="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        TID
                      </label>
                      <input
                        type="text"
                        name="TID"
                        id="TID"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    {/* /Date picker here ========================== */}
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        for="tanggal-pasang"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tanggal Pemasangan
                      </label>
                      <DatePicker
                        className="mt-1 block w-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        selected={startDate}
                        dateFormat="dd/MM/yyyy"
                        onChange={(date: Date) => setStartDate(date)}
                      />
                    </div>
                    {/* ========================== */}

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="country"
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
                        <option>Pending</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        for="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Alamat Agen
                      </label>
                      <input
                        type="text"
                        name="alamat-agen"
                        id="alamat-agen"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        for="city"
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
                        for="postal-code"
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
                  </div>
                  <br/>
                  <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  for="file_input"
                >
                  Upload Bukti Pemasangan
                </label>
                <input
                  className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                  placeholder="Berdasarkan FKM"
                ></input>
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
  );
}

export default FormTeknisi;
