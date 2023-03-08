import React from 'react'

const PostPreview = ({ post }) => {
  return (
    <div className="post">
        <img src={post.img} alt="" />
        <div className="post__content">
            <h3>{post.title}</h3>
            <p>{post.subtitle}</p>
        </div>
    </div>
  )
}

export default PostPreview