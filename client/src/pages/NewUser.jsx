import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Axios from "axios";
import { ToasterContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewUser() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [open, setOpen] = useState(false);
  const options = ["admin", "user"];
  const [role, setRole] = useState(options[1]);
  // console.log(role);
  let arrRole = [role];

  // let arrRole = [...role]
  // console.log(typeof(arrRole))
  // console.log([...role]);
  // console.log();
  const register = (event) => {
    event.preventDefault();
    Axios.post("/api/auth/signup", {
      username: usernameReg,
      password: passwordReg,
      email: emailReg,
      roles: [role]
    })
      .then((res) => {
        setUsernameReg("");
        setPasswordReg("");
        setEmailReg("");
        if (res.status === 200) {
          alert("User baru berhasil ditambahkan");
        }
        //   console.log(res.status);
        //   if (res.status == 400) {
        //     console.log("user sudah ada");
        //   }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert(
            "Email atau username sudah pernah dipakai sebelumnya, coba yang lain"
          );
        }
      });
  };

  //handle toggle
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-grey-lighter flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className=" bg-gradient-to-b from-white-500 to-black-600 px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center font-semibold">
            Daftar User Baru
          </h1>

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="username"
            placeholder="Username"
            value={usernameReg}
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            value={emailReg}
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
          />
          <div className="relative">
            <input
              type={open === false ? "password" : "text"}
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={passwordReg}
              onChange={(e) => {
                setPasswordReg(e.target.value);
              }}
            />
            <div className="text-2xl absolute top-3 right-1">
              {open === false ? (
                <AiFillEye onClick={toggle} />
              ) : (
                <AiFillEyeInvisible onClick={toggle} />
              )}
            </div>
          </div>
          
          <div>
            <select
              className="block border border-grey-light w-full p-3 rounded mb-4"
              value={role}
              size="lg"
              label="Pilih Role"
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              {options.map((value) => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={register}
            type="submit"
            className=" bg-sky-500 w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Buat Akun
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
