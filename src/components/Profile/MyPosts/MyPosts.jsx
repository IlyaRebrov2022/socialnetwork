import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message = {p.message} likesCount = {p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () =>{
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div>
            <div>
                My post
            </div>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;