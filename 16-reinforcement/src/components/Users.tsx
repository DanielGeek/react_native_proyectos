import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResList, User } from '../interfaces/reqRes';

export const Users = () => {

  const [users, setUsers] = useState<User[]>([]);

  const pageRef = useRef(0);

  useEffect(() => {
    // call API
    uploadUsers();
  }, [])

  const uploadUsers = async() => {
    const resp = await reqResApi.get<ReqResList>('/users', {
      params: {
        page: pageRef.current
      }
    })

    if( resp.data.data.length > 0 ){
      setUsers( resp.data.data);
      pageRef.current++;
    } else {
      alert('there are no more records');
    }
  }

  const renderItem = ({ id, first_name, last_name, email, avatar }: User ) => {
    return (
      <tr key={ id.toString() }>
        <td>
          <img
              src={ avatar }
              alt={ first_name }
              style={{
                width: 35,
                borderRadius: 100
              }}
          />
        </td>
        <td>{ first_name } { last_name }</td>
        <td>{ email }</td>
      </tr>
    )
  }

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
          {
            users.map( renderItem )
          }
        </tbody>
      </table>

      <button
        className='btn btn-primary'
        onClick={ uploadUsers }
      >
        Next
      </button>
    </>
  )
}
