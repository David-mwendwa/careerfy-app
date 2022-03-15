const getAllJobs = async (req, res) => {
  res.send('getAllJobs');
};

const createJob = async (req, res) => {
  res.send('createJob');
};

const updateJob = async (req, res) => {
  res.send('updateJob');
};

const deleteJob = async (req, res) => {
  res.send('deleteJob');
};

const showStats = async (req, res) => {
  res.send('showStats');
};

export { getAllJobs, createJob, deleteJob, updateJob, showStats };
