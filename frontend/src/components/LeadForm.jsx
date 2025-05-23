import { useState } from "react";
import { createLead } from "../api/api";
import { useNavigate } from "react-router-dom";

function LeadForm() {
  const navigate = useNavigate();
  const [lead, setLead] = useState({
    name: "",
    email: "",
    linkedin: "",
    company: "",
    notes: "",
    tags: "",
  });

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createLead(lead);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {["name", "email", "linkedin", "company", "tags"].map((field) => (
        <input
          key={field}
          type="text"
          name={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          onChange={handleChange}
          value={lead[field]}
          className="w-full border p-2 rounded"
        />
      ))}
      <textarea
        name="notes"
        placeholder="Notes"
        onChange={handleChange}
        value={lead.notes}
        className="w-full border p-2 rounded"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Save Lead
      </button>
    </form>
  );
}

export default LeadForm;
