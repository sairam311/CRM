import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LeadDetail from './pages/LeadDetail';
import AddLead from './pages/AddLead';
import Navbar from './components/Navbar';
import './index.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/lead/:id" element={<LeadDetail />} />
        <Route path="/add-lead" element={<AddLead />} />
      </Routes>
    </Router>
  );
}

export default App;
