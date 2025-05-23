import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchLead, fetchConversations, createConversation, fetchSuggestions } from "../api/api";
import ConversationList from "../components/ConversationList";
import SuggestionBox from "../components/SuggestionBox";

function LeadDetail() {
  const { id } = useParams();
  const [lead, setLead] = useState(null);

  useEffect(() => {
    fetchLead(id).then((res) => setLead(res.data));
  }, [id]);

  return (
    <div className="p-6">
      {lead && (
        <>
          <h1 className="text-2xl font-bold mb-2">{lead.name}</h1>
          <p className="text-gray-600">{lead.company}</p>
          <p>{lead.email}</p>
          <p className="mt-2 italic">{lead.notes}</p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Conversations</h2>
            <ConversationList leadId={id} />
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">AI Suggestions</h2>
            <SuggestionBox leadId={id} />
          </div>
        </>
      )}
    </div>
  );
}

export default LeadDetail;
