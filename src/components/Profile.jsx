import React from 'react';
import s from './Profile.module.css';


const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.image}>
                <div className={s.avatar}></div>
            </div>
            <div>
                My post
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    Post 1
                </div>
                <div className={s.item}>
                    Post 2
                </div>
            </div>
        </div>
    );
}

export default Profile;