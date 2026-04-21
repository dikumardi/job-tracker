import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth.api";

const Register = () => {
 const [form, setForm] = useState({
  username: "",
  email: "",
  password: "",
});

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await registerUser(form);

      console.log("Register Response:", res.data); // debug

      // 👉 register ke baad login page pe bhej do
      navigate("/dashboard");

    } catch (err) {
  console.error("FULL ERROR:", err);
  console.log("SERVER ERROR:", err.response?.data);

  alert(err.response?.data?.message || "Register failed ❌");
}}

  return (
    <main className="w-full h-screen bg-amber-100">
      <form onSubmit={handleRegister} className="p-6 max-w-sm mx-auto">
        
        <h1 className="text-7xl mb-7 text-gray-700">
          Stay Organized.{" "}
          <span className="whitespace-nowrap font-bold text-amber-500">
            Get Hired
          </span>
        </h1>

        {/* Username */}
        <input
          placeholder="Username"
          className="w-full mb-3 border bg-amber-100 px-4 py-2 rounded-md border-gray-400 focus:outline-none focus:ring-amber-700"
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />

        {/* Email */}
        <input
          placeholder="Email"
          className="w-full mb-3 border bg-amber-100 px-4 py-2 rounded-md border-gray-400 focus:outline-none focus:ring-amber-700"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 border bg-amber-100 px-4 py-2 rounded-md border-gray-400 focus:outline-none focus:ring-amber-700"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        {/* Button */}
        <button className="bg-amber-500 text-white w-full mb-3 px-4 py-2 rounded-md">
          Register
        </button>

        <hr className="mt-7 text-amber-800" />

        {/* Login link */}
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-amber-600">
            Login
          </Link>
        </p>

      </form>
    </main>
  );
};

export default Register;