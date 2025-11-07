import { Link } from "react-router-dom";
import "./Navbar.css";


export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-blue-700 text-white px-6 py-3">
      <h2 className="font-bold text-lg">Election Monitoring System</h2>
      <div className="flex gap-4">
        <Link to="/">Login</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/citizen">Citizen</Link>
        <Link to="/observer">Observer</Link>
        <Link to="/analyst">Analyst</Link>
      </div>
    </nav>
  );
}
