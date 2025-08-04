import React, { useEffect, useState } from "react";

import "./index.css";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const getUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Failed to fetch users", err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/user/${id}`, {
        method: "DELETE",
      });
      getUsers(); // Refresh list
    } catch (err) {
      alert("Failed to delete user");
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div className="home-container">
      <h1>User List</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />
      <div className="user-list">
        {filteredUsers.length === 0 ? (
          <p className="no-results">No users found.</p>
        ) : (
          filteredUsers.map((user) => (
            <div key={user.id} className="user-card">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
