/* eslint-disable */
import React from 'react';
import './App.scss';
import { getUsers } from './api/api';
import { UsersList } from './components/UsersList/UserLists';

export const App = () => {
  console.log(getUsers())

  return (
    <div>
      <div>
        Users List
      </div>
      <UsersList />
    </div>
  )
}
