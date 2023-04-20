import { useContext } from 'react';
import { parseDate, parseName } from '../../helpers/parsing';
import { UserContext } from '../../providers/UserProvider';
import { useNavigate } from 'react-router-dom';
import Button from '../buttons/Button';
import { IconBookmark, IconEdit, IconPencilPlus, IconTool, IconTrash, IconUserCheck } from '@tabler/icons-react';

const UserItem = ({ userData }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleDelete = async () => {
    console.log("a");
  }

  return (
    <div className="w-full flex items-center justify-between gap-6 bg-gray-800 rounded-xl relative p-2 px-4">
      <h3 className="text-ellipsis text-base overflow-hidden w-full flex items-center">
        {parseName(userData)}
        {!userData.verified &&
          <IconUserCheck color='red' size={20} stroke={1.5} className='ml-2' />
        }
      </h3>
      <p className="text-base w-full">{userData.email}</p>
      <p className="text-base w-full">{parseDate(new Date(userData.created), "D. M. YYYY")}</p>
      <p className="text-base w-full flex items-center gap-2">
        {userData.canCreate &&
          <IconPencilPlus size={22} stroke={1.5} />
        }
        {userData.tagCreator &&
          <IconBookmark size={22} stroke={1.5} />
        }
        {userData.admin &&
          <IconTool size={22} stroke={1.5} />
        }
      </p>
      <div className="options flex gap-2 w-full justify-end">
        <Button
          text={""}
          onClick={() => navigate("edit/" + userData.id)}
          className="primary p-2"
          icon={<IconEdit stroke={1.5} size={18} className="m-0" />}
          disabled={user.id === userData.id }
        />
        <Button
          text={""}
          onClick={handleDelete}
          className="secondary p-2"
          icon={<IconTrash stroke={1.5} size={18} className="m-0" />}
          disabled={user.id === userData.id }
        />
      </div>
    </div>
  )
}

export default UserItem