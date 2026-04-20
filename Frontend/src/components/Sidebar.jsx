const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r p-4">
      <h1 className="text-xl font-bold mb-6">Interview</h1>

      <ul className="space-y-4 text-gray-600">
        <li className="font-semibold text-black">Dashboard</li>
        <li>Jobs</li>
        <li>Interviews</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;