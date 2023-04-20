import UserItem from './UserItem';

const UsersList = ({ users }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between items-center gap-6 bg-gray-800 rounded-xl relative px-4 py-2 mb-2">
        <p className="text-lg font-unbounded font-bold w-full">Jméno a přijmení</p>
        <p className="text-lg font-unbounded font-bold w-full">Email</p>
        <p className="text-lg font-unbounded font-bold w-full">Datum přidání</p>
        <p className="text-lg font-unbounded font-bold w-full">Práva</p>
        <p className="text-lg font-unbounded font-bold w-full text-right">Možnosti</p>
      </div>
      {users.map(user => {
        return <UserItem userData={user} key={user.id} />
      })}
    </div>
  )
}

export default UsersList