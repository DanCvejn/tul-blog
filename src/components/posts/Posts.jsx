import PostPreview from "./PostPreview";

const Posts = ({ posts }) => {
    if (posts.length < 1) return (<h3>Nejsou zde žádné články.</h3>)

    return (
        <>
            {posts.map(post => {
                return <PostPreview post={post} key={post.id} />
            })}
        </>
    )
}

export default Posts