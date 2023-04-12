import { useNavigate } from "react-router-dom";
import { parseDate, parseName } from "../../helpers/parsing";
import "./Posts.scss";

const LastPostPreview = ({ post, className }) => {
  const navigate = useNavigate();

  return (
    <div className={"post-big max-md:h-1/2 " + className} onClick={() => navigate("/posts/" + post.id)}>
      <img src={post.img} alt="" />
      <div className="post__content">
        <h3 className="text-2xl mb-4 max-md:text-xl">{post.title}</h3>
        <div className="flex justify-between items-center w-full">
          <p className="text-gray-700 max-md:hidden">{parseName(post.expand.author)} - {parseDate(new Date(post.created), "HH:mm, D. M. YYYY")}</p>
          <div className="text-gray-700 hidden max-md:block">
            <p>{parseName(post.expand.author)}</p>
            <p>{parseDate(new Date(post.created), "HH:mm, D. M. YYYY")}</p>
          </div>
          <div className="flex">
            {
              post.expand?.tags?.map(tag => {
                return <p className="text-sm bg-transparent-300 rounded-lg py-1 px-2 ml-2" key={tag.id}>{tag.name}</p>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default LastPostPreview