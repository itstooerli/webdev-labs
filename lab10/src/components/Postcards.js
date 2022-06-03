import React, {useState, useEffect} from 'react';

const Postcard = ({postId}) => {
    const [postData, setPostIds] = useState([]);
    
    const getPost = (postId) => {
        fetch(`/api/posts/${postId}`, {headers: getHeaders()})
            .then(response => response.json())
            .then(data => {
                setPostdata(data)
            })
    }

    useEffect(() => getPost(postId), []);

    const handleLike = () => {
        fetch('api/posts/likes', {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({"post_id": postData.id})
        })
            .then(response => response.json())
            .then(res => res.json())
            .then(data => getPost())
    }
    
    if (!postData.user){
        return <div> Loading... </div>
    }

    return (<div/>);
}

export default Postcard;