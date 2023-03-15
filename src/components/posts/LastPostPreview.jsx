import { useNavigate } from "react-router-dom";
import { parseDate, parseName } from "../../helpers/parsing";
import "./Posts.scss";

const LastPostPreview = ({ post, className }) => {
  const navigate = useNavigate();

  return (
    <div className={"post-big " + className} onClick={() => navigate("/posts/" + post.id)}>
      <img src={post.img} alt="" />
      <div className="post__content">
        <h3 className="text-2xl mb-4">{post.title}</h3>
        <div className="flex justify-between items-center w-full">
          <p className="text-gray-700">{parseName(post.expand.author)} - {parseDate(new Date(post.created), "HH:mm, D. M. YYYY")}</p>
          <div className="flex">
            {
              post.expand?.tags?.map(tag => {
                return <p className="text-sm bg-transparent-300 rounded-lg py-1 px-2 ml-2">{tag.name}</p>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default LastPostPreview