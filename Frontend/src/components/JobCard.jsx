import { FiBriefcase } from "react-icons/fi";

const JobCard = ({ job }) => {

  const statusStyle = {
    Applied: "bg-blue-100 text-blue-600",
    Interview: "bg-yellow-100 text-yellow-600",
    Rejected: "bg-red-100 text-red-600",
  };

  return (
    <div className="bg-white border rounded-2xl p-5 flex justify-between items-center hover:shadow-md transition">

      <div className="flex items-center gap-4">
        <div className="bg-gray-100 p-3 rounded-xl">
          <FiBriefcase className="text-gray-600 text-lg" />
        </div>

        <div>
          <h3 className="font-semibold text-gray-800">{job.company}</h3>
          <p className="text-sm text-gray-500">{job.position}</p>
        </div>


      </div>

      <span className={`px-3 py-1 text-sm rounded-full font-medium ${statusStyle[job.status]}`}>
        {job.status}
      </span>
    </div>
  );
};

export default JobCard;