import JobRow from "./JobRow";

const JobTable = ({ jobs }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">

      {/* Tabs */}
      <div className="flex gap-4 mb-4 text-sm">
        <button className="font-semibold">All</button>
        <button>Pending</button>
        <button>Rejected</button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-5 text-gray-500 text-sm border-b pb-2">
        <span>Company</span>
        <span>Role</span>
        <span>Salary</span>
        <span>Status</span>
        <span>Type</span>
      </div>

      {/* Rows */}
      {jobs.map((job) => (
        <JobRow key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobTable;