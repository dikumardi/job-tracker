const JobRow = ({ job }) => {
  const statusColor = {
    Pending: "text-yellow-600",
    Rejected: "text-red-500",
    Selected: "text-green-600",
  };

  return (
    <div className="grid grid-cols-5 py-3 border-b text-sm items-center">
      <span className="font-medium">{job.company}</span>
      <span>{job.role}</span>
      <span>{job.salary}</span>

      <span className={statusColor[job.status]}>
        {job.status}
      </span>

      <span>{job.type}</span>
    </div>
  );
};

export default JobRow;