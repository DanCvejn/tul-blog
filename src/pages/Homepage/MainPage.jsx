import { IconArrowRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Button from "../../components/buttons/Button";
import Posts from "../../components/posts/Posts";
import { getAllPosts } from "../../helpers/apiFetch";
import setDocumentTitle from "../../helpers/setTitle";

const getData = async (setData , page, filter, sortBy) => {
  const res = await getAllPosts(page, filter, sortBy);
  return setData(res.items);
}

const MainPage = ({ title }) => {
  const [posts, setPosts] = useState([]);
  setDocumentTitle(title)

  useEffect(() => {
    getData(setPosts, 1, null, "-created")
  }, [])

  return (
    <>
      <h1>Články</h1>
      <Posts posts={posts} />
      <Button
        text="Test tlačítka"
        icon={<IconArrowRight stroke={1.5} size={20} />}
        className="primary"
        iconPosition="right"
      />
    </>
  )
}

export default MainPage