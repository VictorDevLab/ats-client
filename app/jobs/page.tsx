import JobsFilter from "./components/JobsFilter"
import JobsTable from "./components/JobsTable"

function page() {
  const jobs = [
    {id: 1, title: "Software Engineer", recruiter: "David Goggins", location: "New York, NY", stage:  "active", candidates: 6},
    { id: 2, title: "Product Manager", recruiter: "Sam Smith", location: "San Francisco, CA", stage:  "active", candidates: 8},
    { id: 3, title: "Data Scientist", recruiter: "Kelvin Amaya", location: "Boston, MA", stage:  "active", candidates: 12},
  ]
  return (
    <div>
      <JobsFilter />
      <JobsTable jobs={jobs} />
    </div>
  )
}

export default page