import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../../actions/userActions";

const Users = () => {
  const users = useSelector(state => state.userReducer.usersData);
  const isLoading = useSelector(state => state.userReducer.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Users</h1>
      {isLoading && <h1>. . . Loading</h1>}
      <ul>
        {users &&
          users.map(user => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Users;
