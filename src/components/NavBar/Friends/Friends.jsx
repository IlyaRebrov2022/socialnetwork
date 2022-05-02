import React from 'react';
import s from './Friends.module.css';

const FriendsList = (props) => {
    let path = "/dialogs/" + props.id;
    return (
    <div>
        <img src='https://images.wallpaperscraft.ru/image/single/korabl_more_zakat_luna_63381_1280x1024.jpg'/>
        {props.name}
    </div>
    )
}


const Friends = (props) => {

    let dialogsElements = props.friends.map(d => <FriendsList name={d.name}/>);
    return (
        <div className={s.item}>
            {dialogsElements}
        </div>
    )
}

export default Friends;