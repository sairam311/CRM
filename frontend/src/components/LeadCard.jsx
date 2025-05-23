import { Link } from 'react-router-dom';

function LeadCard({ lead }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold">{lead.name}</h2>
      <p className="text-sm text-gray-600">{lead.company}</p>
      <p className="text-sm text-gray-600">{lead.email}</p>
      <Link to={`/lead/${lead._id}`} className="text-blue-500 mt-2 inline-block">View Details</Link>
    </div>
  );
}

export default LeadCard;
