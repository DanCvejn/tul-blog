import React, { useEffect, useState } from 'react'
import Content from "../../components/content/Content";
import UsersList from '../../components/users-page/UsersList';
import setDocumentTitle from '../../helpers/setTitle';
import { getAllUsers } from '../../helpers/apiFetch';
import FullPageLoader from '../../components/loaders/FullPageLoader';

const getData = async (setData) => {
  const res = await getAllUsers();
  return setData(res);
}

const Users = ({ title }) => {
  const [users, setUsers] = useState();
  setDocumentTitle(title);

  useEffect(() => {getData(setUsers)}, []);

  return (
    <Content title={"Správa uživatelů"}>
      {users ?
        <UsersList users={users} /> :
        <FullPageLoader />
      }
    </Content>
  )
}

export default Users