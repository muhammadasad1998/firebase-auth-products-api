import React, { useState } from "react";
import Input_Field from "../components/Input_Field";
import { Custom_Button } from "../components/Custom_Button";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const Login = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const change_handle = (e) => {
    const { value, id } = e.target;

    setData({ ...data, [id]: value });
  };

  const submit_handle = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("login successfully", user);
        localStorage.setItem("isLoggedIn", true);
        // ...
        navigate("/products");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("login failed", errorMessage);
      });
  };

  console.log(data);
  return (
    <div className="bg-bg_color h-[100dvh] grid place-items-center px-3">
      <form
        onSubmit={submit_handle}
        className="bg-white rounded-md max-w-md w-full py-6 px-3 grid grid-cols-2  gap-5"
      >
        <div className="text-primary_color col-span-2 text-center text-3xl font-bold">
          <h1>LOGIN</h1>
        </div>
        <div className="col-span-2">
          <Input_Field
            id="email"
            type="email"
            required={true}
            onChange={change_handle}
            placeholder="Email Address"
          />
        </div>
        <div className="col-span-2">
          <Input_Field
            id="password"
            required={true}
            onChange={change_handle}
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="col-span-2">
          <Custom_Button type="submit">Login</Custom_Button>
        </div>

        <div className="col-span-2 space-x-1 text-center">
          <span>Don't have account </span>
          <Link to="/signup" className="underline text-primary_color">
            Signup now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
