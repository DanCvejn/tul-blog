import React from 'react'
import UserItem from './UserItem';

const UsersList = ({ users }) => {
  return (
    <div className="flex flex-col gap-4">
      {users.map(user => {
        return <UserItem userData={user} />
      })}
    </div>
  )
}

export default UsersList