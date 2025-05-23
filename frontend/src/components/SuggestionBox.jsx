import { useEffect, useState } from "react";
import { fetchSuggestions } from "../api/api";

function SuggestionBox({ leadId }) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetchSuggestions(leadId).then((res) => setSuggestions(res.data));
  }, [leadId]);

  return (
    <ul className="space-y-2">
      {suggestions.map((s, i) => (
        <li key={i} className="border p-2 rounded bg-yellow-100">
          💡 {s.suggestion}
        </li>
      ))}
    </ul>
  );
}

export default SuggestionBox;
