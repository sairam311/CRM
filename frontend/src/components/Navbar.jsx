import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-xl font-bold text-gray-800">AI CRM</h1>
      <div>
        <Link to="/" className="mr-4 text-blue-500">Dashboard</Link>
        <Link to="/add-lead" className="text-blue-500">Add Lead</Link>
      </div>
    </nav>
  );
}

export default Navbar;
