import MyPostsItem from "./MyPostsItem"

const MyPostsList = ({ posts, getData }) => {
  if (posts.length < 1) return (<h3>Nejsou zde žádné články.</h3>)

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between items-center gap-6 bg-gray-800 rounded-xl relative px-4 py-2 mb-2">
        <p className="text-lg font-unbounded font-bold w-[50%]">Nadpis</p>
        <p className="text-lg font-unbounded font-bold w-[25%]">Datum vytvoření</p>
        <p className="text-lg font-unbounded font-bold text-right">Možnosti</p>
      </div>
      {posts.map(post => {
        return <MyPostsItem post={post} key={post.id} getData={getData} />
      })}
    </div>
  )
}

export default MyPostsList