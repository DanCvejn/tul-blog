import { useNavigate } from "react-router-dom";
import { parseName } from "../../helpers/parsing";
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
      <div className="post__content w-full p-4 pl-0 relative">
        <h3 className="text-lg mb-2">{post.title}</h3>
        <p className="max-h-[40%] mb-2 overflow-hidden">{post.subtitle}</p>
        <div className="flex justify-between items-center w-[95%] absolute bottom-4 opacity-70">
          <p>{parseName(post.expand.author)}</p>
          <div className="flex">
            {
              post.expand?.tags?.map(tag => {
                return <p className="text-sm bg-gray-800 rounded-lg py-1 px-2 ml-2" key={tag.id}>{tag.name}</p>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostPreview