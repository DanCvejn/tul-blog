import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../helpers/apiFetch';
import { parseDate, parseName } from '../../helpers/parsing';
import setDocumentTitle from '../../helpers/setTitle';
import Content from '../content/Content';
import FullPageLoader from '../loaders/FullPageLoader';
import "./Posts.scss";

const getData = async (postId, setPost) => {
  const res = await getPostById(postId);
  res.author = res.expand.author;
  return setPost(res);
}

const PostDetail = ({ title }) => {
  setDocumentTitle(title);
  const { postId } = useParams();
  const [post, setPost] = useState();

  const date = post && new Date(post.created);

  useEffect(() => {
    getData(postId, setPost);
  }, [])

  if (!post) return (<FullPageLoader />);

  return (
    <Content >
      <div className="post-detail">
        <h1>{post.title}</h1>
        <p className='font-bold subtitle'>{post.subtitle}</p>
        <img src={post.img} alt="" className='main-image' />
        <div dangerouslySetInnerHTML={{ __html: post.text }} className="text"></div>
        <p className="text-gray-300">
          Článek napsal: <span className="text-black">
            {parseName(post.author)} ({parseDate(date, "HH:mm, D. M. YYYY")})
          </span>
        </p>
      </div>
    </Content>
  )
}

export default PostDetail