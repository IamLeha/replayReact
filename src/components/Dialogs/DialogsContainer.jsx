import React from 'react';
import Dialogs from './Dialogs';
import {updateMessageBodyAC, sendMessageAC} from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';

const ContainerDialogs = (props) => {
    return (
        <StoreContext.Consumer>
            { 
                (store) => {

                    let state = store.getState().dialogsPage;

                    let sendMessage = () => {
                        store.dispatch(sendMessageAC());
                    }
                    
                    let updateMessageBody = (messageBody) => {
                        store.dispatch(updateMessageBodyAC(messageBody))
                    }

                    return (<Dialogs state={state} updateMessage={updateMessageBody} sendMessage={sendMessage} />)
                }
            }
        </StoreContext.Consumer>
    )
}

export default ContainerDialogs;