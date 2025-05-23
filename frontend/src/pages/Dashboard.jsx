import { useEffect, useState } from "react";
import axios from "axios";
import LeadCard from "../components/LeadCard";

function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("/api/leads").then((res) => setLeads(res.data));
  }, []);

  const filtered = leads.filter((lead) =>
    [lead.name, lead.company, lead.tags].some((field) =>
      field?.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search by name, company, or tag"
        className="w-full mb-4 p-2 border rounded"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((lead) => (
          <LeadCard key={lead._id} lead={lead} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
