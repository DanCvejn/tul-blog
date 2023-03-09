import { useContext, useEffect, useState } from 'react';
import Content from '../../components/Content/Content';
import Posts from '../../components/posts/Posts';
import { getMyPosts } from '../../helpers/apiFetch';
import setDocumentTitle from '../../helpers/setTitle';
import { UserContext } from '../../providers/UserProvider';

const getData = async (setData , page, user) => {
  const res = await getMyPosts(page, user.id);
  return setData(res.items);
}

const MyPosts = ({ title }) => {
  setDocumentTitle(title);
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (user) {
      getData(setPosts, 1, user)
    }
  }, [user])

  return (
    <Content title={"Moje posty"} >
      <Posts posts={posts} />
    </Content>
  )
}

export default MyPosts