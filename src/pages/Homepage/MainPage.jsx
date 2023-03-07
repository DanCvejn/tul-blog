import { useEffect, useState } from "react";
import { getAllPosts } from "../../helpers/apiFetch";

const getData = async (setData , page, filter, sortBy) => {
  const res = await getAllPosts(page, filter, sortBy);
  return setData(res.items);
}

const MainPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData(setPosts, 1, null, "-created")
  }, [])

  return (
    <div>
      {posts.length > 0 && (
        posts.map(post => {
          return (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.subtitle}</p>
              <img src={post.img} alt="" />
              <div dangerouslySetInnerHTML={{ __html: post.text }}></div>
            </div>
          )
        })
      )}
    </div>
  )
}

export default MainPage