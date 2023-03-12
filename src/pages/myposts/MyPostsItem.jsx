import { IconEdit, IconTrash } from "@tabler/icons-react";
import Button from "../../components/buttons/Button";

const MyPostsItem = ({ post }) => {
  return (
    <div className="w-full flex items-center gap-6 bg-gray-800 rounded-xl relative">
      <img src={post.img} alt="" className="w-24 h-24 object-cover object-center rounded-xl" />
      <h3 className="text-ellipsis overflow-hidden max-w-[50%] max-h-[50px]">{post.title}</h3>
      <div className="options absolute right-6 flex gap-2">
        <Button text={""} className="primary p-2" icon={<IconEdit stroke={1.5} size={24} className="m-0" />} />
        <Button text={""} className="secondary p-2" icon={<IconTrash stroke={1.5} size={24} className="m-0" />} />
      </div>
    </div>
  )
}

export default MyPostsItem