import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/auth.api";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(form);

      console.log("Login Response:", res.data); // 🔍 debug

      const { user, token } = res.data;

      // 🔐 Save user + token
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      // 🚀 Redirect
      navigate("/dashboard");

    } catch (err) {
      console.error(err);
      alert("Login failed ❌");
    }
  };

  return (
    <main className="w-full h-screen bg-amber-100 flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="p-6 max-w-sm w-full bg-white rounded-lg shadow"
      >
        <h1 className="text-3xl mb-6 text-center font-bold">
          Welcome <span className="text-amber-500">Back</span>
        </h1>

        <input
          placeholder="Email"
          className="w-full mb-3 border px-4 py-2 rounded-md"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 border px-4 py-2 rounded-md"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button className="bg-amber-500 text-white w-full py-2 rounded-md">
          Login
        </button>

        <hr className="my-4" />

        <p className="text-sm text-center">
          Create an account?{" "}
          <Link to="/register" className="text-amber-600">
            Register
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Login;