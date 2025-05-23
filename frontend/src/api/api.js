import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchLeads = () => API.get('/leads');
export const createLead = (leadData) => API.post('/leads', leadData);
export const fetchLead = (id) => API.get(`/leads/${id}`);
export const updateLead = (id, leadData) => API.put(`/leads/${id}`, leadData);
export const deleteLead = (id) => API.delete(`/leads/${id}`);

export const fetchConversations = (leadId) => API.get(`/conversations/${leadId}`);
export const createConversation = (conversationData) => API.post('/conversations', conversationData);

export const generateSuggestion = (leadId) => API.post('/suggestions/generate', { leadId });
export const fetchSuggestions = (leadId) => API.get(`/suggestions/${leadId}`);
