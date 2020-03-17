import React from 'react';
import Dialogs from './Dialogs';
import {updateMessageBodyAC, sendMessageAC} from '../../redux/dialogs-reducer';

const ContainerDialogs = (props) => {

    let state = props.store.getState().dialogsPage;


    let sendMessage = () => {
       props.store.dispatch(sendMessageAC());
    }

    let updateMessageBody = (messageBody) => {
        props.store.dispatch(updateMessageBodyAC(messageBody))
     }

    return <Dialogs state={state} updateMessage={updateMessageBody} sendMessage={sendMessage} />
}

export default ContainerDialogs;