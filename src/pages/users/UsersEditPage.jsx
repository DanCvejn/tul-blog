import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import setDocumentTitle from '../../helpers/setTitle';
import Content from '../../components/content/Content';
import FullPageLoader from '../../components/loaders/FullPageLoader';
import { getUserById } from '../../helpers/apiFetch';
import UsersEdit from '../../components/users-page/UsersEdit';

const getData = async (setData, userId) => {
  const res = await getUserById(userId);
  return setData(res);
}

const UsersEditPage = ({ title }) => {
  setDocumentTitle(title);
  const { userId } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {getData(setUser, userId)}, []);

  return (
    <Content title={"Úprava uživatele"}>
      {user ?
        <UsersEdit user={user} /> :
        <FullPageLoader />
      }
    </Content>
  )
}

export default UsersEditPage