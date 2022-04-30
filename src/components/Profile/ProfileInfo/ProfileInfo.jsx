import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
    return (
            <div>
                <div className={s.image}>
                    <div className={s.avatar}></div>
                </div>
                <div>
                    Ilya
                </div>
            </div>
    );
}

export default ProfileInfo;