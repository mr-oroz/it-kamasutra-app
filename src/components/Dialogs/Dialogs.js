import React from 'react';
import {NavLink} from "react-router-dom";
import s from "../Dialogs/Dialogs.module.css";

const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const dialogData = [
    {id: 1, name: 'Hasan'},
    {id: 2, name: 'Asan'},
    {id: 3, name: 'Uson'},
    {id: 4, name: 'Marat'},
    {id: 5, name: 'Diner'},
    {id: 6, name: 'Medina'},
]

const messegeData = [
    {id: 1, message: 'Hi, Marat'},
    {id: 2, message: 'Как дела?'},
    {id: 3, message: 'Все в порядке?'},
]
const messageElements = messegeData.map(v => <Message message={v.message}/>);
const dialogElements = dialogData.map(v => <DialogItem name={v.name} id={v.id}/>);

const Dialogs = (props) => {
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