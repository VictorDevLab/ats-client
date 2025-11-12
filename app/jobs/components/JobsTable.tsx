type Job = {
  id: number;
  title: string;
  recruiter: string;
  location: string;
  stage: string;
  candidates: number;
};
type Props = {
  jobs: Job[];
};
function JobsTable({ jobs }: Props) {
  return (
    <div>
      {" "}
      <div className="card mt-6 bg-base-100 shadow-sm">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Job Title</th>
                <th>Location</th>
                <th>Stage</th>
                <th>Candidates</th>
                <th>Recruiter</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                      </div>
                      <div>
                        <div className="font-bold">{job.title}</div>
                      </div>
                    </div>
                  </td>
                  <td>{job.location}</td>
                  <td>{job.stage}</td>
                  <td>{job.candidates}</td>
                  <td>{job.recruiter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default JobsTable;
