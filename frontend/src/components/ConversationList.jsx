import { useEffect, useState } from "react";
import { fetchConversations, createConversation } from "../api/api";

function ConversationList({ leadId }) {
  const [conversations, setConversations] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchConversations(leadId).then((res) => setConversations(res.data));
  }, [leadId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createConversation({ leadId, message });
    setMessage("");
    const res = await fetchConversations(leadId);
    setConversations(res.data);
  };

  return (
    <div>
      <ul className="mb-4 space-y-2">
        {conversations.map((c, index) => (
          <li key={index} className="border p-2 rounded">
            {c.message}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Log a conversation..."
          className="w-full border p-2 rounded"
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>
    </div>
  );
}

export default ConversationList;
