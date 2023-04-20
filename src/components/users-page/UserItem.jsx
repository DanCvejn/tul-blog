import React from 'react'
import { parseName } from '../../helpers/parsing'

const UserItem = ({ user }) => {
  return (
    <div className="w-full flex items-center gap-6 bg-gray-800 rounded-xl relative p-4">
      <h3 className="text-ellipsis text-xl overflow-hidden w-[50%] max-h-[50px]">{parseName(user)}</h3>
    </div>
  )
}

export default UserItem