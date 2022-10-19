import { useState } from "react";
import useAuth from "../hooks/useAuth";
import AuthContext from "../context/AuthProvider";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Axios from "axios";

function Login() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // const from = "/";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signin = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post(
        "/api/auth/signin",
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ username, password, roles, accessToken });
      navigate(from, { replace: true });
    } catch (error) {
      if (error.response?.status === 401) {
        alert("Username atau password tidak sesuai");
      }
      if (error.response?.status === 404) {
        alert("Username tidak ditemukan");
      }
    }
  };

  // const signin = (event) => {
  //   event.preventDefault();

  //   Axios.post("/api/auth/signin", {
  //     username: usernameLogin,
  //     password: passwordLogin,
  //   })
  //     .then((res) => {
  //       if (res.data.accessToken) {
  //         localStorage.setItem("user", JSON.stringify(res.data));
  //       }
  //       const accessToken = res?.data?.accessToken;
  //       const roles = res?.data?.roles;
  //       setAuth({ usernameLogin, passwordLogin, roles, accessToken });
  //       console.log(res);
  //       navigate(from, { replace: true });
  //     })
  //     .catch((err) => {
  //       if (err.response.status === 401) {
  //         alert("Username atau password tidak sesuai");
  //       }
  //     });
  // };

  return (
    <div className="bg-no-repeat bg-cover bg-center relative">
      <div className="absolute bg-gradient-to-b from-blue-500 to-gray-600 opacity-75 inset-0 z-0 rounded-md w-screen  m-200"></div>
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center inline-flex ">
        <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
          <div className="self-start hidden lg:flex flex-col  text-white">
            <h1 className="font-extrabold  text-6xl bg-clip-text ">
              MIKA WEB MONITORING
            </h1>
            <p className="text-gray-200 text-2xl">
              Web Monitoring pemasangan EDC BNI AGEN46, silahkan masuk terlebih
              dahulu untuk melakukan report.
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center  z-10">
          <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800 ">
                Mika Web Monitoring
              </h3>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Username
                </label>
                <input
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  value={username}
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="space-y-2">
                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                  placeholder="Masukkan password"
                />
              </div>
              <div className="flex items-center justify-between"></div>
              <div>
                <button
                  onClick={signin}
                  type="submit"
                  className="w-full flex justify-center bg-blue-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  Masuk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
