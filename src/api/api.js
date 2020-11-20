import data from '../data/users.json';

export function getUsers() {
  return Promise.resolve(data)
    .then(result => result.users);
}
