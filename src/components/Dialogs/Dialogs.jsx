import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sasha'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'}

    ]

    let dialogsElements =  dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = messages.map( m => <Message message={m.message} id={m.id} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;