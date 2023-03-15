import { IconEdit, IconTrash } from "@tabler/icons-react";
import { useNavigate, useRevalidator } from "react-router-dom";
import Button from "../../components/buttons/Button";
import { deletePost } from "../../helpers/apiFetch";
import { parseDate } from "../../helpers/parsing";

const MyPostsItem = ({ post, getData }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const res = await deletePost(post.id);
    if (!res.error) {
      return console.log(res.message);
    }
    return getData();
  }

  return (
    <div className="w-full flex items-center gap-6 bg-gray-800 rounded-xl relative">
      <img src={post.img} alt="" className="w-24 h-24 object-cover object-center rounded-xl" />
      <h3 className="text-ellipsis text-lg overflow-hidden w-[50%] max-h-[50px]">{post.title}</h3>
      <p>{parseDate(new Date(post.created), "HH:mm, D. M. YYYY")}</p>
      <div className="options absolute right-6 flex gap-2">
        <Button text={""} onClick={() => navigate("edit/" + post.id)} className="primary p-2" icon={<IconEdit stroke={1.5} size={24} className="m-0" />} />
        <Button text={""} onClick={handleDelete} className="secondary p-2" icon={<IconTrash stroke={1.5} size={24} className="m-0" />} />
      </div>
    </div>
  )
}

export default MyPostsItem;