import React, { useContext, useState } from 'react'
import { parseName } from '../../helpers/parsing'
import Switch from '../forms/Switch'
import { UserContext } from '../../providers/UserProvider'
import { useNavigate } from 'react-router-dom'
import Button from '../buttons/Button'
import { IconEdit, IconTrash } from '@tabler/icons-react'

const UserItem = ({ userData }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleDelete = async () => {
    console.log("a");
  }

  return (
    <div className="w-full flex items-center gap-6 bg-gray-800 rounded-xl relative p-6">
      <h3 className="text-ellipsis text-xl overflow-hidden w-[50%] max-h-[50px]">{parseName(userData)}</h3>
      {user.id !== userData.id &&
        <div className="options absolute right-6 flex gap-2">
          <Button
            text={""}
            onClick={() => navigate("edit/" + userData.id)}
            className="primary p-2"
            icon={<IconEdit stroke={1.5} size={24} className="m-0" />}
          />
          <Button
            text={""}
            onClick={handleDelete}
            className="secondary p-2"
            icon={<IconTrash stroke={1.5} size={24} className="m-0" />} />
        </div>
      }
    </div>
  )
}

export default UserItem