import React from 'react';

export const User = ({ user }) => {
  return (
    <li>
      <p>{`name: ${user.name}`}</p>
      <p>{`surname: ${user.surname}`}</p>
      <p>{`description: ${user.desc}`}</p>
    </li>
  )
}