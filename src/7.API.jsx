import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="newClass">
      <h3>Users: {users.length}</h3>
    </div>
  );
}

// 1.Declare a state to hold the data
// 2. useEffect with call bakc and dependency array
