import { useEffect, useState } from "react";
import { api } from "../api/api";

export default function Admin() {
  const [users, setUsers] = useState([]);

 useEffect(() => {
  api
    .get("/admin/users", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log("ADMIN USERS:", res.data); 
      setUsers(res.data);
    })
    .catch((err) => {
      console.error("ADMIN API ERROR:", err);
    });
}, []);


  return (
    <div className="min-h-screen pt-20 px-6 text-white">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Card */}
      <div className="max-w-4xl bg-[#1f2937]/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-2 bg-indigo-600 px-6 py-3 font-semibold text-white">
          <span>Name</span>
          <span>Email</span>
        </div>

        {/* Table Rows */}
        {users.map((user, i) => (
          <div
            key={i}
            className="grid grid-cols-2 px-6 py-3 border-t border-white/10 hover:bg-white/5 transition"
          >
            <span>{user.name}</span>
            <span className="text-gray-300">{user.email}</span>
          </div>
        ))}

        {/* Empty State */}
        {users.length === 0 && (
          <div className="p-6 text-center text-gray-400">
            No users found
          </div>
        )}
      </div>
    </div>
  );
}
