import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://images.wallpaperscraft.ru/image/single/palmy_trava_zakat_278064_1280x1280.jpg'/>
            {/*Текст поста*/}  {props.message}
            <div>
                <span>likes:</span>{props.likesCount}
            </div>
        </div>

    );
}

export default Post;