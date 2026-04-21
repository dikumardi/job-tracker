const Topbar = ({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  setPage,
  openModal
}) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white border-b">

      {/* LEFT */}
      <div className="flex gap-3 items-center">

        {/* SEARCH */}
        <input
          placeholder="Search company..."
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
          className="border px-3 py-2 rounded w-62.5"
        />

        {/* FILTER */}
        <select
          value={statusFilter}
          onChange={(e) => {
            setPage(1);
            setStatusFilter(e.target.value);
          }}
          className="border px-3 py-2 rounded"
        >
          <option value="">All</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Selected">Selected</option>
          <option value="Rejected">Rejected</option>
        </select>

        {/* ADD BUTTON */}
        <button
          onClick={openModal}
          className="bg-amber-500 text-white px-4 py-2 rounded"
        >
          + Add Job
        </button>

      </div>

      {/* RIGHT */}
      <img
        src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-10 h-10 rounded-full"
      />

    </div>
  );
};

export default Topbar;