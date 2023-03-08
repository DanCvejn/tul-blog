import React from 'react'
import PostPreview from "./PostPreview";

const Posts = ({ posts }) => {
    if (!posts) return (<p>Načítání...</p>)

    if (posts.length < 1) return (<h2>Nejsou zde žádné články.</h2>)

    return (
        <>
            {posts.map(post => {
                return <PostPreview post={post} />
            })}
        </>
    )
}

export default Posts