import React, { useState, useEffect } from "react";
import { axiosConfig as axios } from "../../utils/axiosConfig";

const UserDetails = props => {
  // console.log(props);
  const [user, setUser] = useState();

  useEffect(() => {
    axios()
      .get(`/api/users/${props.match.params.id}`)
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  return (
    <div>
      <h3>{user && user.name} Details</h3>
    </div>
  );
};

export default UserDetails;
