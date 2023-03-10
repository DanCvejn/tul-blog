import LastPostPreview from "./LastPostPreview";
import PostPreview from "./PostPreview";
import "./Posts.scss";

const Posts = ({ posts }) => {
    if (posts.length < 1) return (<h3>Nejsou zde žádné články.</h3>)

    return (
        <div className="posts">
            <h2 className="text-4xl mb-4">Poslední článek</h2>
            {posts.map((post, i) => {
                if (i < 1) {
                    return <LastPostPreview post={post} />
                }
            })}
            <h2 className="mb-4">Další články</h2>
            <div className="md:grid grid-cols-2 flex flex-col flex-wrap gap-4">
                {posts.map((post, i) => {
                    if (i > 0) {
                        return <PostPreview post={post} key={post.id} />
                    }
                })}
            </div>
        </div>
    )
}

export default Posts