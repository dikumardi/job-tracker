import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import JobTable from "../components/JobTable";
import AddJobModal from "../components/AddJobModal";

import { getJobs, deleteJob, updateJob } from "../api/job.api";

const Dashboard = () => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🔥 FETCH JOBS
  const fetchJobs = async () => {
    try {
      setLoading(true);

      const res = await getJobs({
        search,
        status: statusFilter,
        page,
        limit: 5
      });

      setJobs(res.data.data);
      setTotalPages(res.data.totalPages);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [search, statusFilter, page]);

  // 🔥 DELETE
  const handleDelete = async (id) => {
    await deleteJob(id);
    fetchJobs();
  };

  // 🔥 UPDATE
  const handleUpdate = async (id, status) => {
    await updateJob(id, { status });
    fetchJobs();
  };

  // 🔥 ADD
  const handleJobAdded = () => {
    fetchJobs();
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Topbar
          search={search}
          setSearch={setSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          setPage={setPage}
          openModal={() => setIsModalOpen(true)}
        />

        <div className="p-6">

          {/* TABLE */}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <JobTable
              jobs={jobs}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          )}

          {/* PAGINATION */}
          <div className="flex gap-2 mt-4 items-center">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              Prev
            </button>

            <span>Page {page} / {totalPages}</span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              Next
            </button>
          </div>

          {/* MODAL */}
          <AddJobModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onJobAdded={handleJobAdded}
          />

        </div>
      </div>
    </div>
  );
};

export default Dashboard;