import MyPostsItem from "./MyPostsItem"

const MyPostsList = ({ posts, getData }) => {
  if (posts.length < 1) return (<h3>Nejsou zde žádné články.</h3>)

  return (
    <div className="flex flex-col gap-4">
      {posts.map(post => {
        return <MyPostsItem post={post} key={post.id} getData={getData} />
      })}
    </div>
  )
}

export default MyPostsList