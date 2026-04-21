import { useState } from "react";
import { createJob } from "../api/job.api";

const AddJobModal = ({ isOpen, onClose, onJobAdded }) => {
  const [form, setForm] = useState({
    company: "",
    position: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createJob(form);

      onJobAdded(res.data.data); // update dashboard
      onClose(); // close modal

      setForm({ company: "", position: "" }); // reset
    } catch (err) {
      console.error(err);
      alert("Failed to add job ❌");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      
      <div className="bg-white p-6 rounded-xl w-100 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add Job</h2>

        <form onSubmit={handleSubmit}>
          
          <input
            placeholder="Company"
            value={form.company}
            onChange={(e) =>
              setForm({ ...form, company: e.target.value })
            }
            className="w-full mb-3 border px-3 py-2 rounded"
          />

          <input
            placeholder="Position"
            value={form.position}
            onChange={(e) =>
              setForm({ ...form, position: e.target.value })
            }
            className="w-full mb-3 border px-3 py-2 rounded"
          />

          <div className="flex justify-end gap-2">
            
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>

            <button className="px-4 py-2 bg-amber-500 text-white rounded">
              Add
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default AddJobModal;