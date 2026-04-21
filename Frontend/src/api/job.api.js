import API from "./axios";

// CREATE JOB
export const createJob = (data) =>
  API.post("/jobs/create", data);

// GET JOBS
// export const getJobs = () =>
//   API.get("/jobs/gets");

export const getJobs = (params) =>
  API.get("/jobs/gets", { params });

// UPDATE JOB
export const updateJob = (id, data) =>
  API.put(`/jobs/update/${id}`, data);

// DELETE JOB
export const deleteJob = (id) =>
  API.delete(`/jobs/delete/${id}`);