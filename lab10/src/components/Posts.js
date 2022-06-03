import React, { useState, useEffect } from 'react';
import Postcard from './Postcards'

const Posts = () => {
    const [postIds, setPostIds] = useState([]);
    useEffect(() => 
        fetch('/api/posts', {
            // authentication headers added using 
            // getHeaders() function from src/utils.js
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            setPostIds(data.posts.map(post => post.id));
        })
    )
    return (
        <div>
            {PostIds.map(postId =>
            <Postcard key={postId} postId={postId} />)}
        </div>);
}

export default Posts;