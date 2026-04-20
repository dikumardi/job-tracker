import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 text-gray-800">

      {/* 🔝 Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 backdrop-blur-md bg-white/40 border-b border-white/40 sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-tight text-amber-700">
          JobTracker
        </h1>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link to="/login" className="hover:text-amber-700 transition">
            Login
          </Link>

          <Link
            to="/register"
            className="bg-amber-600 text-white px-5 py-2 rounded-full hover:bg-amber-700 transition shadow-md"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* 🔥 Hero Section */}
      <div className="flex flex-col items-center text-center px-6 mt-20">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl">
          Track Your Job Applications <br />
          <span className="text-amber-700">Simply & Effectively</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-xl mt-6">
          Organize all your job applications in one clean dashboard.
          Stay focused and never miss an opportunity again.
        </p>

        <div className="flex gap-4 mt-8">
          <Link
            to="/register"
            className="bg-amber-600 text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            Get Started 🚀
          </Link>

          <Link
            to="/login"
            className="border border-amber-200 px-7 py-3 rounded-full hover:bg-white transition"
          >
            Login
          </Link>
        </div>
      </div>

      {/* ✨ Features */}
      <div className="grid md:grid-cols-3 gap-6 px-10 mt-24 max-w-6xl mx-auto">

        <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white shadow-sm hover:shadow-md transition">
          <h3 className="font-bold text-xl mb-2 text-amber-700">
            Track Jobs
          </h3>
          <p className="text-gray-600">
            Keep all your applications organized in one place.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white shadow-sm hover:shadow-md transition">
          <h3 className="font-bold text-xl mb-2 text-amber-700">
            Update Status
          </h3>
          <p className="text-gray-600">
            Track stages: Applied → Interview → Offer.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white shadow-sm hover:shadow-md transition">
          <h3 className="font-bold text-xl mb-2 text-amber-700">
            Stay Focused
          </h3>
          <p className="text-gray-600">
            Never lose track of your career opportunities.
          </p>
        </div>

      </div>

      {/* 🔥 Bottom CTA */}
      <div className="text-center mt-24 px-6">
        <h2 className="text-3xl font-bold">
          Ready to organize your career?
        </h2>

        <p className="text-gray-600 mt-2">
          Start tracking your job applications in seconds.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <Link
            to="/register"
            className="bg-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition"
          >
            Create Account
          </Link>

          <Link
            to="/login"
            className="border border-gray-300 px-6 py-3 rounded-full hover:bg-white transition"
          >
            Login
          </Link>
        </div>
      </div>

      {/* 🔻 Footer */}
      <footer className="mt-auto text-center py-8 text-sm text-gray-500">
        <p>© 2026 JobTracker. All rights reserved.</p>

        <div className="mt-3 space-x-6">
          <span className="hover:text-amber-700 cursor-pointer transition">
            Terms
          </span>
          <span className="hover:text-amber-700 cursor-pointer transition">
            Privacy
          </span>
        </div>
      </footer>

    </div>
  );
};

export default Home;