import { useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";
import { getAllPosts } from "../../helpers/apiFetch";
import setDocumentTitle from "../../helpers/setTitle";
import Content from "../../components/content/Content";
import FullPageLoader from "../../components/loaders/FullPageLoader";
import JoinUs from "../../components/promos/JoinUs";
import PocketBase from 'pocketbase';

const pb = new PocketBase("https://tul.dcreative.cz");
pb.autoCancellation(false);

const getData = async (setData, page, filter, sortBy) => {
  const res = await getAllPosts(page, filter, sortBy);
  pb.collection("posts").subscribe("*", async () => {
    const liveData = await getAllPosts(page, filter, sortBy);
    setData(liveData.items);
  });
  return setData(res.items);
}

const MainPage = ({ title }) => {
  const [posts, setPosts] = useState(null);
  setDocumentTitle(title)

  useEffect(() => {
    getData(setPosts, 1, null, "-created");
  }, [])

  return (
    <>
      <Content>
        {!posts ?
          <FullPageLoader />:
          <Posts posts={posts} promo={<JoinUs />} />
        }
      </Content>
    </>
  )
}

export default MainPage