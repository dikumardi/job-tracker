import React from "react";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";

const Home = () => {
  const jobs = [
    { id: 1, company: "Google", position: "Frontend Developer", status: "Applied" },
    { id: 2, company: "Amazon", position: "Backend Developer", status: "Rejected" },
    { id: 3, company: "Microsoft", position: "SDE Intern", status: "Interview" },
    { id: 4, company: "Netflix", position: "UI Engineer", status: "Applied" },
    { id: 5, company: "Meta", position: "React Developer", status: "Rejected" },
    { id: 6, company: "Adobe", position: "Full Stack Developer", status: "Interview" },
    { id: 7, company: "Flipkart", position: "Software Engineer", status: "Applied" },
  ];

  const applied = jobs.filter(j => j.status === "Applied").length;
  const rejected = jobs.filter(j => j.status === "Rejected").length;
  const interview = jobs.filter(j => j.status === "Interview").length;

  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar />

      {/* Header */}
      <div className="px-6 py-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Manage your job applications in one place
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6">
        <div className="bg-white p-5 rounded-2xl shadow-sm border">
          <p className="text-gray-500 text-sm">Total Applications</p>
          <h2 className="text-2xl font-bold mt-1">{jobs.length}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border">
          <p className="text-gray-500 text-sm">Applied</p>
          <h2 className="text-2xl font-bold text-blue-600 mt-1">{applied}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border">
          <p className="text-gray-500 text-sm">Rejected</p>
          <h2 className="text-2xl font-bold text-red-500 mt-1">{rejected}</h2>
        </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm border">
          <p className="text-gray-500 text-sm">Interview</p>
          <h2 className="text-2xl font-bold text-red-500 mt-1">{interview}</h2>
        </div>

      </div>

      {/* Job List */}
      <div className="px-6 py-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Recent Applications
          </h2>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;