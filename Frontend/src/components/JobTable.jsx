const JobTable = ({ jobs, onDelete, onUpdate }) => {

  const getStatusColor = (status) => {
    if (status === "Applied") return "text-blue-500";
    if (status === "Interview") return "text-yellow-500";
    if (status === "Selected") return "text-green-500";
    if (status === "Rejected") return "text-red-500";
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-6">

      {/* HEADER */}
      <h2 className="text-xl font-semibold mb-6">
        Your Jobs
      </h2>

      {/* TABLE WRAPPER */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">

          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-3">Company</th>
              <th className="py-3">Position</th>
              <th className="py-3">Status</th>
              <th className="py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job) => (
              <tr
                key={job._id}
                className="border-b hover:bg-gray-50"
              >

                <td className="py-3">{job.company}</td>

                <td className="py-3">{job.position}</td>

                {/* STATUS */}
                <td className={`py-3 font-medium ${getStatusColor(job.status)}`}>
                  {job.status}
                </td>

                {/* ACTIONS */}
                <td className="py-3 space-x-3">

                  {/* UPDATE */}
                  <select
                    onChange={(e) =>
                      onUpdate(job._id, e.target.value)
                    }
                    className="border px-2 py-1 rounded focus:outline-none"
                    defaultValue={job.status}
                  >
                    <option>Applied</option>
                    <option>Interview</option>
                    <option>Selected</option>
                    <option>Rejected</option>
                  </select>

                  {/* DELETE */}
                  <button
                    onClick={() => onDelete(job._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default JobTable;