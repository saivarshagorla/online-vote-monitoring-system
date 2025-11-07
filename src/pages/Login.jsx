import { useNavigate } from "react-router-dom";
import "./Login.css";

const roles = [
  { name: "Admin", path: "/admin" },
  { name: "Citizen", path: "/citizen" },
  { name: "Election Observer", path: "/observer" },
  { name: "Data Analyst", path: "/analyst" },
];

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Election Monitoring System</h1>
      <p className="mb-6 text-gray-600">Select your role to continue:</p>
      <div className="grid grid-cols-2 gap-4">
        {roles.map((r) => (
          <button
            key={r.name}
            onClick={() => navigate(r.path)}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            {r.name}
          </button>
        ))}
      </div>
    </div>
  );
}
