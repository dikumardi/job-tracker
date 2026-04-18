const Navbar = () => {
  return (
    <nav className="bg-gray-700 text-white border-b px-6 py-4 flex justify-between items-center w-full  ">

      <h1 className="text-xl font-bold ">
        JobTracker
      </h1>

      <div className="flex items-center gap-4">
        <button className="text-white hover:text-red-700">
          Dashboard
        </button>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
          + Add Job
        </button>

                <button className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-400 transition">
           Logout
        </button>
      </div>

    </nav>
  );
};

export default Navbar;