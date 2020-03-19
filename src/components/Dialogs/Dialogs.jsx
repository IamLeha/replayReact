import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    
    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} />  );
    let messagesElements = props.dialogsPage.messages.map( m => <Message key={m.id} message={m.message}/> );

    let sendMessage = () => {
       props.sendMessage();
    }

    let updateMessageBody = (e) => {
        let messageBody = e.target.value;
        props.updateMessage(messageBody);
     }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>

                <div>
                    <textarea value={props.dialogsPage.newMessageBody} onChange={updateMessageBody} cols="30" rows="4"></textarea>
                    <div><button onClick={sendMessage}>submit</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;