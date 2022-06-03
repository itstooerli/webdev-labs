import React from 'react';
import LikeButton from './LikeButton';

class Post extends React.Component {

    constructor(props) {
        super(props);
        // initialization code here
    }

    componentDidMount() {
        // fetch posts and then set the state...
    }

    render () {
        const post = this.props.model;
        return (
            <section
                className="card">
                
                <img src={post.image_url} alt="post"/>
                <LikeButton
                    likeId={post.current_user_like_id} 
                    postId={post.id}/>
                <button><i className="fas fa-bookmark"></i></button>
                <p>{post.caption}</p>
            </section>
        )
    }
}

export default Post;