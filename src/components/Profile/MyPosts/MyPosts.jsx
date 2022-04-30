import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: 'It\'s my first post!', likesCount: 10}
    ]
    let postsElements = posts.map( p => <Post message = {p.message} likesCount = {p.likesCount}/>);

    return (
        <div>
            <div>
                My post
            </div>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;