import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateMessageBodyAC, sendMessageAC} from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
    
    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/> );

    let sendMessage = () => {
       props.dispatch(sendMessageAC());
    }

    let updateMessageBody = (e) => {
        let messageBody = e.target.value;
        props.dispatch(updateMessageBodyAC(messageBody))
     }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>

                <div>
                    <textarea value={props.state.newMessageBody} onChange={updateMessageBody} cols="30" rows="4"></textarea>
                    <div><button onClick={sendMessage}>submit</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;