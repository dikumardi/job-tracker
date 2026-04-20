const Topbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white border-b">
      
      <input
        placeholder="Search..."
        className="border px-3 py-2 rounded w-1/3"
      />

      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          className="w-10 h-10 rounded-full"
        />
      </div>

    </div>
  );
};

export default Topbar;