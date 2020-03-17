const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY';

const dialogsReducer = (state, action) => {
    switch (action.type){
        case SEND_MESSAGE:
            state.messages.push({id: 6, message: state.newMessageBody});
            state.newMessageBody  = '';
            return state;
        case UPDATE_MESSAGE_BODY:
            state.newMessageBody  = action.messageBody;
            return state;
        default:
            return state;
    }
}

export const sendMessageAC = () => {
    return { type:  SEND_MESSAGE}
}

export const updateMessageBodyAC = (messageBody) => {
    return { type: UPDATE_MESSAGE_BODY, messageBody}
}

export default dialogsReducer;