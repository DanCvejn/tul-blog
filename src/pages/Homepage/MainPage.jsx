import { useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";
import { getAllPosts } from "../../helpers/apiFetch";
import setDocumentTitle from "../../helpers/setTitle";
import Content from "../../components/Content/Content";
import FullPageLoader from "../../components/loaders/FullPageLoader";

const getData = async (setData , page, filter, sortBy) => {
  const res = await getAllPosts(page, filter, sortBy);
  return setData(res.items);
}

const MainPage = ({ title }) => {
  const [posts, setPosts] = useState(null);
  setDocumentTitle(title)

  useEffect(() => {
    getData(setPosts, 1, null, "-created")
  }, [])

  return (
    <>
      <Content>
        {!posts ?
          <FullPageLoader />:
          <Posts posts={posts} />
        }
      </Content>
    </>
  )
}

export default MainPage