import { useNavigate } from "react-router-dom";
import "./Posts.scss";

const PostPreview = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div
      className="post
                  flex
                  cursor-pointer
                  duration-300
                  rounded-xl
                  border-solid
                  border-transparent-50 border-2 hover:bg-indigo-900"
      onClick={() => navigate("/posts/" + post.id)}
    >
        <img src={post.img} alt="" className="rounded-xl mr-8" />
        <div className="post__content w-full p-4 pl-0">
            <h3 className="text-lg mb-4">{post.title}</h3>
            <p>{post.subtitle}</p>
        </div>
    </div>
  )
}

export default PostPreview