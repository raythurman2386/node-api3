import React, { useState, useEffect } from "react";
import { axiosConfig as axios } from "../../utils/axiosConfig";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios()
      .get("/api/users")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err.response));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Users;
