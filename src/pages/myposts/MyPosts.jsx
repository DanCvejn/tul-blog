import { IconPlus } from '@tabler/icons-react';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    <Content title={"Moje články"} >
      <Posts posts={posts} />
      {user?.canCreate &&
        <Link
          to={"/my-posts/create"}
          className="fixed bottom-4 right-4 flex justify-start items-center gap-3 hover:gap-2 bg-indigo-300 text-white no-underline p-3 rounded-xl w-[46px] h-[46px] hover:w-[172px] duration-500"
        >
          <div className="h-[24px]">
            <IconPlus stroke={1.5} size={24} />
          </div>
          <p className="w-fit break-keep"> Vytvořit&nbsp;článek</p>
        </Link>
      }
    </Content>
  )
}

export default MyPosts