import PostPreview from "./PostPreview";
import "./Posts.scss";

const Posts = ({ posts }) => {
    if (posts.length < 1) return (<h3>Nejsou zde žádné články.</h3>)

    return (
        <div className="posts">
            {posts.map((post, i) => {
                if (i < 3) {
                    return <p>{i}{post.title}</p>
                }
            })}
            <div className="md:grid grid-cols-2 flex flex-col flex-wrap gap-4">
                {posts.map((post, i) => {
                    if (i > 2) {
                        return <PostPreview post={post} key={post.id} />
                    }
                })}
            </div>
        </div>
    )
}

export default Posts