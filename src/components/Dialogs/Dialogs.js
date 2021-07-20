import React from 'react';
import s from "../Dialogs/Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {
    const messageElements = props.data.messegeData.map(v => <Message message={v.message}/>);
    const dialogElements = props.data.dialogData.map(v => <DialogItem img={v.img} name={v.name} id={v.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;