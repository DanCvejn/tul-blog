import LastPostPreview from "./LastPostPreview";
import PostPreview from "./PostPreview";
import "./Posts.scss";

const Posts = ({ posts, promo }) => {
    if (posts.length < 1) return (<h3>Nejsou zde žádné články.</h3>)

    return (
        <div className="posts">
            <h2 className="text-4xl mb-4 max-md:mb-8">Poslední články</h2>
            <div className="flex gap-2 h-[700px] max-md:h-screen mb-8 max-md:flex-col">
                {posts.map((post, i) => {
                    if (i < 1) {
                        return <LastPostPreview post={post} className="w-1/2 max-md:w-full" key={post.id} />
                    }
                })}
                <div className="flex flex-col gap-2 w-1/2 max-md:w-full h-full">
                    {posts.map((post, i) => {
                        if (i > 0 && i < (promo ? 2 : 3)) {
                            return <LastPostPreview post={post} key={post.id} />
                        }
                    })}
                    {promo && promo}
                </div>
            </div>
            <h2 className="mb-4">Další články</h2>
            <div className="md:grid grid-cols-2 flex flex-col flex-wrap gap-4">
                {posts.map((post, i) => {
                    if (i > (promo ? 1 : 2)) {
                        return <PostPreview post={post} key={post.id} />
                    }
                })}
            </div>
        </div>
    )
}

export default Posts