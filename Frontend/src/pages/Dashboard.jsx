import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import JobTable from "../components/JobTable";

const Dashboard = () => {

  const jobs = [
    { id: 1, company: "Google", role: "Frontend Dev", salary: "$3000", status: "Pending", type: "Remote" },
    { id: 2, company: "Amazon", role: "Backend Dev", salary: "$3500", status: "Rejected", type: "Onsite" },
    { id: 3, company: "Microsoft", role: "SDE", salary: "$4000", status: "Selected", type: "Remote" },
    { id: 4, company: "Meta", role: "React Dev", salary: "$3200", status: "Pending", type: "Remote" },
    { id: 5, company: "Netflix", role: "UI Engineer", salary: "$3700", status: "Rejected", type: "Onsite" },
    { id: 6, company: "Adobe", role: "Full Stack", salary: "$3600", status: "Pending", type: "Remote" },
    { id: 7, company: "Flipkart", role: "Software Eng", salary: "$2800", status: "Selected", type: "Remote" },
  ];

  return (
    <div className="flex">
      
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Topbar />

        <div className="p-6">
          <JobTable jobs={jobs} />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;