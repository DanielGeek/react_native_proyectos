import { useEffect, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResList, User } from '../interfaces/reqRes';

export const Users = () => {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // call API
    reqResApi.get<ReqResList>('/users')
      .then( resp => {
        console.log( resp.data.data );
      })
      .catch(console.log);
  }, [])

  return (
    <>
      <h3>Users</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </>
  )
}
