import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from "../interfaces/reqRes";

export const useUsers = () => {
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
    } else {
      pageRef.current--;
      alert('there are no more records');
    }
  }

  const nextPage = () => {
    pageRef.current++;
    uploadUsers();
  }

  const previousPage = () => {
    if ( pageRef.current > 1 ) {
      pageRef.current --;
      uploadUsers();
    }
  }

  return {
    users,
    nextPage,
    previousPage,
  }
}
