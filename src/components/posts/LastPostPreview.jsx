import { useNavigate } from "react-router-dom";
import { parseDate, parseName } from "../../helpers/parsing";
import "./Posts.scss";

const LastPostPreview = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div className="post-big" onClick={() => navigate("/posts/" + post.id)}>
      <img src={post.img} alt="" />
      <div className="post__content">
        <h3 className="text-2xl mb-2">{post.title}</h3>
        <p className="mb-2 font-bold">{post.subtitle}</p>
        <p className="text-gray-700">{parseName(post.expand.author)} - {parseDate(new Date(post.created), "HH:mm, D. M. YYYY")}</p>
      </div>
    </div>
  )
}

export default LastPostPreview