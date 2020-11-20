import React, { useState, useEffect } from 'react';
import { getUsers } from '../../api/api';
import { User } from '../User/User';

export const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(async() => {
    setUsers(await getUsers());
  }, []);

  return (
    <div>
      <ul>
        {users.map(user => <User key={user.id} user={user} />)}
      </ul>
    </div>
  );
};
