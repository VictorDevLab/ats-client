import CandidateFilter from "./components/CandidateFilter";
import CandidatesTable from "./components/CandidatesTable";

function page() {
  const users = [
    {
      id: 1,
      name: "Hart Hagerty",
      country: "United States",
      company: "Zemlak, Daniel and Leannon",
      jobTitle: "Desktop Support Technician",
      color: "Purple",
      avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    },
    {
      id: 2,
      name: "Brice Swyre",
      country: "China",
      company: "Carroll Group",
      jobTitle: "Tax Accountant",
      color: "Red",
      avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
    },
    {
      id: 3,
      name: "Marjy Ferencz",
      country: "Russia",
      company: "Rowe-Schoen",
      jobTitle: "Office Assistant I",
      color: "Crimson",
      avatar: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    },
    {
      id: 4,
      name: "Yancy Tear",
      country: "Brazil",
      company: "Wyman-Ledner",
      jobTitle: "Community Outreach Specialist",
      color: "Indigo",
      avatar: "https://img.daisyui.com/images/profile/demo/5@94.webp",
    },
    {
      id: 5,
      name: "Quinn Riley",
      country: "Germany",
      company: "Fisher-Rice",
      jobTitle: "UX Designer",
      color: "Blue",
      avatar: "https://img.daisyui.com/images/profile/demo/6@94.webp",
    },
    {
      id: 6,
      name: "Kyla Adams",
      country: "Canada",
      company: "Parker Inc",
      jobTitle: "Marketing Specialist",
      color: "Teal",
      avatar: "https://img.daisyui.com/images/profile/demo/7@94.webp",
    },
    {
      id: 7,
      name: "Lucas Finch",
      country: "Australia",
      company: "Turner LLC",
      jobTitle: "Software Engineer",
      color: "Green",
      avatar: "https://img.daisyui.com/images/profile/demo/8@94.webp",
    },
    {
      id: 8,
      name: "Sierra Brooks",
      country: "Kenya",
      company: "Juma Group",
      jobTitle: "Data Analyst",
      color: "Orange",
      avatar: "https://img.daisyui.com/images/profile/demo/9@94.webp",
    },

  ];

  return (
    <div className="p-6">
      <CandidateFilter />
      <CandidatesTable users={users} />
    </div>
  );
}

export default page;
