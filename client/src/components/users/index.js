import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../actions/userActions";

const Users = () => {
  const users = useSelector(state => state.usersData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Users</h1>
      {users && users.map(user => <p key={user.id}>{user.name}</p>)}
    </div>
  );
};

export default Users;
